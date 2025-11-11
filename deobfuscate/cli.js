#!/usr/bin/env node

/**
 * Deobfuscator CLI
 * Command-line interface for the deobfuscation tool
 */

const { Command } = require('commander');
const fs = require('fs');
const path = require('path');
const {
  deobfuscateFile,
  deobfuscateDirectory,
} = require('./deobfuscator');

const program = new Command();

program
  .name('deobfuscate')
  .description('Deobfuscate JavaScript files using Babel AST transformations')
  .version('1.0.0');

program
  .option('-i, --input <path>', 'Input file or directory path')
  .option('-o, --output <path>', 'Output file or directory path')
  .option('-a, --aggressive', 'Enable aggressive mode (more transformations)', false)
  .option('-p, --preserve-comments', 'Preserve comments in output', true)
  .option('-r, --recursive', 'Process directories recursively', false)
  .option('-v, --verbose', 'Verbose output', false)
  .action((options) => {
    const { input, output, aggressive, preserveComments, recursive, verbose } = options;

    // Validate input
    if (!input) {
      console.error('Error: --input is required');
      process.exit(1);
    }

    if (!output) {
      console.error('Error: --output is required');
      process.exit(1);
    }

    // Check if input exists
    if (!fs.existsSync(input)) {
      console.error(`Error: Input path does not exist: ${input}`);
      process.exit(1);
    }

    const inputStat = fs.statSync(input);
    const deobfuscateOptions = {
      aggressive,
      preserveComments,
      verbose,
      recursive,
    };

    console.log('Deobfuscation Settings:');
    console.log(`  Input: ${input}`);
    console.log(`  Output: ${output}`);
    console.log(`  Aggressive mode: ${aggressive}`);
    console.log(`  Preserve comments: ${preserveComments}`);
    console.log(`  Recursive: ${recursive}`);
    console.log('');

    try {
      if (inputStat.isFile()) {
        // Process single file
        const result = deobfuscateFile(input, output, deobfuscateOptions);
        
        if (result.success) {
          console.log('\n✓ Deobfuscation completed successfully!');
          process.exit(0);
        } else {
          console.error('\n✗ Deobfuscation failed!');
          process.exit(1);
        }
      } else if (inputStat.isDirectory()) {
        // Process directory
        console.log(`Processing directory: ${input}\n`);
        const results = deobfuscateDirectory(input, output, deobfuscateOptions);
        
        const successful = results.filter(r => r.success).length;
        const failed = results.filter(r => !r.success).length;
        
        console.log(`\nProcessed ${results.length} file(s):`);
        console.log(`  ✓ Successful: ${successful}`);
        if (failed > 0) {
          console.log(`  ✗ Failed: ${failed}`);
        }
        
        if (failed === 0) {
          console.log('\n✓ All files processed successfully!');
          process.exit(0);
        } else {
          console.log('\n⚠ Some files failed to process');
          process.exit(1);
        }
      } else {
        console.error('Error: Input must be a file or directory');
        process.exit(1);
      }
    } catch (error) {
      console.error(`\nFatal error: ${error.message}`);
      if (verbose) {
        console.error(error.stack);
      }
      process.exit(1);
    }
  });

// Parse command line arguments
program.parse(process.argv);

// Show help if no arguments provided
if (process.argv.length === 2) {
  program.help();
}
