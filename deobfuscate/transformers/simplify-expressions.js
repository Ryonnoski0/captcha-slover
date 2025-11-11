/**
 * Expression Simplification Transformer
 * Simplifies complex expressions and property accesses
 * Example: obj["key"] -> obj.key, arr[0] -> value (when possible)
 */

const t = require('@babel/types');

/**
 * Check if a string is a valid JavaScript identifier
 * @param {string} str - String to check
 * @returns {boolean}
 */
function isValidIdentifier(str) {
  return /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(str);
}

/**
 * Get the value from an array at a specific index
 * @param {Object} arrayPath - Babel path to array expression
 * @param {number} index - Index to access
 * @returns {Object|null} - Element node or null
 */
function getArrayElement(arrayPath, index) {
  if (t.isArrayExpression(arrayPath.node)) {
    const elements = arrayPath.node.elements;
    if (index >= 0 && index < elements.length && elements[index]) {
      return elements[index];
    }
  }
  return null;
}

/**
 * Expression Simplification Visitor
 */
const simplifyExpressionsVisitor = {
  // Simplify member expressions: obj["key"] -> obj.key
  MemberExpression(path) {
    const { node } = path;
    
    // obj["key"] -> obj.key
    if (node.computed && t.isStringLiteral(node.property)) {
      const propertyName = node.property.value;
      
      // Only convert if it's a valid identifier
      if (isValidIdentifier(propertyName)) {
        node.computed = false;
        node.property = t.identifier(propertyName);
        this.transformCount++;
      }
    }
    
    // Try to resolve array access: arr[0] -> value
    if (node.computed && t.isNumericLiteral(node.property)) {
      const index = node.property.value;
      
      // Check if object is an array expression or identifier
      if (Number.isInteger(index) && index >= 0) {
        // Direct array expression: [1,2,3][0] -> 1
        if (t.isArrayExpression(node.object)) {
          const element = getArrayElement(path.get('object'), index);
          if (element) {
            path.replaceWith(element);
            this.transformCount++;
          }
        }
        // Identifier referencing an array
        else if (t.isIdentifier(node.object)) {
          const binding = path.scope.getBinding(node.object.name);
          if (binding && binding.constant) {
            const init = binding.path.node.init;
            if (t.isArrayExpression(init)) {
              const elements = init.elements;
              if (index < elements.length && elements[index]) {
                path.replaceWith(t.cloneNode(elements[index]));
                this.transformCount++;
              }
            }
          }
        }
      }
    }
  },

  // Simplify double negation: !!value -> Boolean(value) or just value in some contexts
  UnaryExpression(path) {
    const { node } = path;
    
    if (node.operator === '!' && t.isUnaryExpression(node.argument) && node.argument.operator === '!') {
      // !!x can be simplified in boolean contexts, but be conservative
      // For now, just track it
    }
  },

  // Simplify void 0 -> undefined (common obfuscation)
  // Note: void 0 is used because undefined can be reassigned
  // We'll keep this conservative and only replace in safe contexts
  
  // Simplify sequence expressions when only last value is used
  SequenceExpression(path) {
    const { node } = path;
    
    // If sequence expression is in an expression statement, 
    // and earlier expressions have no side effects, simplify
    if (path.parent.type === 'ExpressionStatement') {
      const expressions = node.expressions;
      // Conservative: only remove if we're confident about side effects
      // For now, just count them
    }
  },
};

/**
 * Apply expression simplification transformation
 * @param {Object} ast - Babel AST
 * @param {Function} traverse - Babel traverse function
 * @returns {Object} - Transformation statistics
 */
function transform(ast, traverse) {
  const context = { transformCount: 0 };
  
  // Create visitor with bound context
  const visitor = {};
  for (const [key, value] of Object.entries(simplifyExpressionsVisitor)) {
    visitor[key] = value.bind(context);
  }
  
  traverse(ast, visitor);

  return {
    name: 'Expression Simplification',
    transformCount: context.transformCount,
  };
}

module.exports = {
  transform,
  visitor: simplifyExpressionsVisitor,
};
