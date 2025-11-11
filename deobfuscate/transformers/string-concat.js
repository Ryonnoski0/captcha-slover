/**
 * String Concatenation Transformer
 * Combines adjacent string literals and resolves escape sequences
 * Example: "a" + "b" -> "ab", "\x48\x65\x6c\x6c\x6f" -> "Hello"
 */

const t = require('@babel/types');

/**
 * Decodes hex escape sequences in a string
 * @param {string} str - String with potential escape sequences
 * @returns {string} - Decoded string
 */
function decodeEscapeSequences(str) {
  try {
    // Handle hex escape sequences: \xHH
    str = str.replace(/\\x([0-9A-Fa-f]{2})/g, (match, hex) => {
      return String.fromCharCode(parseInt(hex, 16));
    });
    
    // Handle unicode escape sequences: \uHHHH
    str = str.replace(/\\u([0-9A-Fa-f]{4})/g, (match, hex) => {
      return String.fromCharCode(parseInt(hex, 16));
    });
    
    return str;
  } catch (e) {
    return str;
  }
}

/**
 * String Concatenation Visitor
 */
const stringConcatVisitor = {
  // Combine string concatenation: "a" + "b" -> "ab"
  BinaryExpression(path) {
    const { node } = path;
    
    // Check if it's a string concatenation
    if (node.operator === '+') {
      const left = path.get('left');
      const right = path.get('right');
      
      // Both sides are string literals
      if (t.isStringLiteral(left.node) && t.isStringLiteral(right.node)) {
        const combined = left.node.value + right.node.value;
        path.replaceWith(t.stringLiteral(combined));
        this.transformCount++;
        return;
      }
      
      // Left is binary expression (for chained concatenation)
      if (t.isBinaryExpression(left.node) && left.node.operator === '+') {
        // Will be handled in the next iteration after left is processed
      }
    }
  },

  // Decode escape sequences in string literals
  StringLiteral(path) {
    const { value } = path.node;
    const decoded = decodeEscapeSequences(value);
    
    if (decoded !== value) {
      path.node.value = decoded;
      this.transformCount++;
    }
  },

  // Handle template literals with no expressions
  TemplateLiteral(path) {
    const { node } = path;
    
    // If template literal has no expressions, convert to string literal
    if (node.expressions.length === 0 && node.quasis.length === 1) {
      const value = node.quasis[0].value.cooked || node.quasis[0].value.raw;
      path.replaceWith(t.stringLiteral(value));
      this.transformCount++;
    }
  },
};

/**
 * Apply string concatenation transformation
 * @param {Object} ast - Babel AST
 * @param {Function} traverse - Babel traverse function
 * @returns {Object} - Transformation statistics
 */
function transform(ast, traverse) {
  const context = { transformCount: 0 };
  
  // Run multiple passes to handle nested concatenations
  let lastCount = -1;
  let iterations = 0;
  const maxIterations = 10;
  
  while (context.transformCount !== lastCount && iterations < maxIterations) {
    lastCount = context.transformCount;
    
    // Create visitor with bound context
    const visitor = {};
    for (const [key, value] of Object.entries(stringConcatVisitor)) {
      visitor[key] = value.bind(context);
    }
    
    traverse(ast, visitor);
    
    iterations++;
  }

  return {
    name: 'String Concatenation',
    transformCount: context.transformCount,
  };
}

module.exports = {
  transform,
  visitor: stringConcatVisitor,
};
