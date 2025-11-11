/**
 * Main Deobfuscator Module
 * Coordinates all transformations and provides the main deobfuscation API
 */

const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const generate = require('@babel/generator').default;
const fs = require('fs');
const path = require('path');

// Import transformers
const constantFolding = require('./transformers/constant-folding');
const stringConcat = require('./transformers/string-concat');
const simplifyExpressions = require('./transformers/simplify-expressions');
const renameVariables = require('./transformers/rename-variables');
const removeDeadCode = require('./transformers/remove-dead-code');

// Import config
const defaultConfig = require('./config');

/**
 * Parse JavaScript code into AST
 * @param {string} code - JavaScript source code
 * @param {Object} config - Parser configuration
 * @returns {Object} - Babel AST
 */
function parseCode(code, config = {}) {
  const parserOptions = {
    ...defaultConfig.parser,
    ...config,
  };

  try {
    return parser.parse(code, parserOptions);
  } catch (error) {
    console.error('Parse error:', error.message);
    throw error;
  }
}

/**
 * Generate code from AST
 * @param {Object} ast - Babel AST
 * @param {Object} config - Generator configuration
 * @returns {string} - Generated JavaScript code
 */
function generateCode(ast, config = {}) {
  const generatorOptions = {
    ...defaultConfig.generator,
    ...config,
  };

  try {
    const result = generate(ast, generatorOptions);
    return result.code;
  } catch (error) {
    console.error('Generation error:', error.message);
    throw error;
  }
}

/**
 * Apply transformations to AST
 * @param {Object} ast - Babel AST
 * @param {Object} options - Transformation options
 * @returns {Object} - Transformation report
 */
function applyTransformations(ast, options = {}) {
  const config = { ...defaultConfig, ...options.config };
  const aggressive = options.aggressive || false;
  const preserveComments = options.preserveComments !== false;

  const report = {
    transformations: [],
    totalTransforms: 0,
    startTime: Date.now(),
  };

  // Determine which transformations to apply
  const transformsToApply = { ...config.transformations };
  
  if (aggressive) {
    Object.assign(transformsToApply, config.aggressiveMode);
  }

  // Apply transformations in order
  try {
    // 1. String concatenation and escape sequence handling
    if (transformsToApply.stringConcat) {
      const result = stringConcat.transform(ast, traverse);
      report.transformations.push(result);
      report.totalTransforms += result.transformCount;
    }

    // 2. Constant folding
    if (transformsToApply.constantFolding) {
      const result = constantFolding.transform(ast, traverse);
      report.transformations.push(result);
      report.totalTransforms += result.transformCount;
    }

    // 3. Expression simplification
    if (transformsToApply.simplifyExpressions) {
      const result = simplifyExpressions.transform(ast, traverse);
      report.transformations.push(result);
      report.totalTransforms += result.transformCount;
    }

    // 4. Dead code removal
    if (transformsToApply.removeDeadCode) {
      const result = removeDeadCode.transform(ast, traverse);
      report.transformations.push(result);
      report.totalTransforms += result.transformCount;
    }

    // 5. Variable renaming (aggressive mode only by default)
    if (transformsToApply.renameVariables) {
      const result = renameVariables.transform(ast, traverse, config);
      report.transformations.push(result);
      report.totalTransforms += result.transformCount;
    }

    report.endTime = Date.now();
    report.duration = report.endTime - report.startTime;

  } catch (error) {
    report.error = error.message;
    console.error('Transformation error:', error);
  }

  return report;
}

/**
 * Deobfuscate JavaScript code
 * @param {string} code - Obfuscated JavaScript code
 * @param {Object} options - Deobfuscation options
 * @returns {Object} - Result with deobfuscated code and report
 */
function deobfuscate(code, options = {}) {
  try {
    // Parse code
    const ast = parseCode(code, options.parserConfig);

    // Apply transformations
    const report = applyTransformations(ast, options);

    // Generate deobfuscated code
    const generatorConfig = {
      ...options.generatorConfig,
      comments: options.preserveComments !== false,
    };
    const deobfuscatedCode = generateCode(ast, generatorConfig);

    return {
      success: true,
      code: deobfuscatedCode,
      report,
    };
  } catch (error) {
    return {
      success: false,
      error: error.message,
      code: code, // Return original code on error
    };
  }
}

/**
 * Deobfuscate a file
 * @param {string} inputPath - Path to input file
 * @param {string} outputPath - Path to output file
 * @param {Object} options - Deobfuscation options
 * @returns {Object} - Result with report
 */
function deobfuscateFile(inputPath, outputPath, options = {}) {
  try {
    // Read input file
    const code = fs.readFileSync(inputPath, 'utf-8');
    console.log(`Processing: ${inputPath}`);
    console.log(`Input size: ${(code.length / 1024).toFixed(2)} KB`);

    // Deobfuscate
    const result = deobfuscate(code, options);

    if (result.success) {
      // Write output file
      fs.writeFileSync(outputPath, result.code, 'utf-8');
      console.log(`Output written to: ${outputPath}`);
      console.log(`Output size: ${(result.code.length / 1024).toFixed(2)} KB`);
      
      // Print report
      if (options.verbose || defaultConfig.reporting.showTransformations) {
        printReport(result.report);
      }

      return {
        success: true,
        inputPath,
        outputPath,
        report: result.report,
      };
    } else {
      console.error(`Failed to deobfuscate: ${result.error}`);
      return {
        success: false,
        error: result.error,
      };
    }
  } catch (error) {
    console.error(`Error processing file: ${error.message}`);
    return {
      success: false,
      error: error.message,
    };
  }
}

/**
 * Print transformation report
 * @param {Object} report - Transformation report
 */
function printReport(report) {
  console.log('\n=== Deobfuscation Report ===');
  console.log(`Duration: ${report.duration}ms`);
  console.log(`Total transformations: ${report.totalTransforms}`);
  console.log('\nTransformations applied:');
  
  report.transformations.forEach((transform) => {
    console.log(`  - ${transform.name}: ${transform.transformCount} changes`);
  });
  
  console.log('===========================\n');
}

/**
 * Deobfuscate multiple files in a directory
 * @param {string} inputDir - Input directory path
 * @param {string} outputDir - Output directory path
 * @param {Object} options - Deobfuscation options
 * @returns {Array} - Array of results
 */
function deobfuscateDirectory(inputDir, outputDir, options = {}) {
  const results = [];

  try {
    // Create output directory if it doesn't exist
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    // Read directory
    const files = fs.readdirSync(inputDir);

    files.forEach((file) => {
      const inputPath = path.join(inputDir, file);
      const stat = fs.statSync(inputPath);

      if (stat.isFile() && file.endsWith('.js')) {
        // Skip files matching ignore patterns
        const shouldIgnore = defaultConfig.ignore.some((pattern) => {
          return inputPath.includes(pattern.replace('**/', '').replace('*', ''));
        });

        if (!shouldIgnore) {
          const outputPath = path.join(outputDir, file.replace('.js', '.deobfuscated.js'));
          const result = deobfuscateFile(inputPath, outputPath, options);
          results.push(result);
        }
      } else if (stat.isDirectory() && options.recursive) {
        // Recursively process subdirectories
        const subOutputDir = path.join(outputDir, file);
        const subResults = deobfuscateDirectory(inputPath, subOutputDir, options);
        results.push(...subResults);
      }
    });

  } catch (error) {
    console.error(`Error processing directory: ${error.message}`);
  }

  return results;
}

module.exports = {
  deobfuscate,
  deobfuscateFile,
  deobfuscateDirectory,
  parseCode,
  generateCode,
  applyTransformations,
};
