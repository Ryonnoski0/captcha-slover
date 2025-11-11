/**
 * Variable Renaming Transformer
 * Attempts to rename variables to more meaningful names based on context
 * WARNING: This is an aggressive transformation and may break code
 */

const t = require('@babel/types');

/**
 * Infer variable type from its initialization
 * @param {Object} init - Initialization node
 * @returns {string} - Inferred type
 */
function inferType(init) {
  if (!init) return 'unknown';
  
  if (t.isFunctionExpression(init) || t.isArrowFunctionExpression(init)) {
    return 'function';
  }
  if (t.isObjectExpression(init)) {
    return 'object';
  }
  if (t.isArrayExpression(init)) {
    return 'array';
  }
  if (t.isStringLiteral(init)) {
    return 'string';
  }
  if (t.isNumericLiteral(init)) {
    return 'number';
  }
  if (t.isBooleanLiteral(init)) {
    return 'boolean';
  }
  if (t.isNewExpression(init)) {
    return 'object';
  }
  
  return 'unknown';
}

/**
 * Generate a meaningful variable name
 * @param {string} originalName - Original variable name
 * @param {string} type - Inferred type
 * @param {Object} config - Configuration object
 * @param {Map} usedNames - Set of already used names
 * @returns {string} - New variable name
 */
function generateVariableName(originalName, type, config, usedNames) {
  // Don't rename if it's in the preserve list
  if (config.variableNaming.preserve.includes(originalName)) {
    return originalName;
  }
  
  // If the name is already descriptive, keep it
  if (originalName.length > 3 && /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(originalName)) {
    return originalName;
  }
  
  const prefix = config.variableNaming.prefix[type] || config.variableNaming.prefix.unknown;
  let counter = 1;
  let newName = `${prefix}${counter}`;
  
  while (usedNames.has(newName)) {
    counter++;
    newName = `${prefix}${counter}`;
  }
  
  usedNames.add(newName);
  return newName;
}

/**
 * Variable Renaming Visitor
 */
const renameVariablesVisitor = {
  Program(path) {
    this.usedNames = new Set();
    this.renamings = new Map();
  },

  // Rename variables in declarations
  VariableDeclarator(path) {
    const { node } = path;
    
    if (t.isIdentifier(node.id)) {
      const varName = node.id.name;
      
      // Skip if already renamed or should be preserved
      if (this.renamings.has(varName) || this.config.variableNaming.preserve.includes(varName)) {
        return;
      }
      
      const type = inferType(node.init);
      const newName = generateVariableName(varName, type, this.config, this.usedNames);
      
      if (newName !== varName) {
        // Get the binding and rename all references
        const binding = path.scope.getBinding(varName);
        if (binding) {
          binding.scope.rename(varName, newName);
          this.renamings.set(varName, newName);
          this.transformCount++;
        }
      }
    }
  },

  // Rename function parameters (conservative)
  FunctionDeclaration(path) {
    // Function name
    if (path.node.id && t.isIdentifier(path.node.id)) {
      const funcName = path.node.id.name;
      
      if (!this.config.variableNaming.preserve.includes(funcName) && funcName.length <= 2) {
        const newName = generateVariableName(funcName, 'function', this.config, this.usedNames);
        if (newName !== funcName) {
          const binding = path.scope.getBinding(funcName);
          if (binding) {
            binding.scope.rename(funcName, newName);
            this.transformCount++;
          }
        }
      }
    }
  },
};

/**
 * Apply variable renaming transformation
 * @param {Object} ast - Babel AST
 * @param {Function} traverse - Babel traverse function
 * @param {Object} config - Configuration
 * @returns {Object} - Transformation statistics
 */
function transform(ast, traverse, config) {
  const context = { 
    transformCount: 0,
    config: config,
    usedNames: new Set(),
    renamings: new Map(),
  };
  
  // Create visitor with bound context
  const visitor = {};
  for (const [key, value] of Object.entries(renameVariablesVisitor)) {
    visitor[key] = value.bind(context);
  }
  
  traverse(ast, visitor);

  return {
    name: 'Variable Renaming',
    transformCount: context.transformCount,
    renamings: Array.from(context.renamings.entries()),
  };
}

module.exports = {
  transform,
  visitor: renameVariablesVisitor,
};
