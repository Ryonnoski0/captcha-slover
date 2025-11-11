/**
 * Constant Folding Transformer
 * Evaluates and replaces constant expressions with their computed values
 * Example: 1 + 2 -> 3, "hello" + " world" -> "hello world"
 */

const t = require('@babel/types');

/**
 * Safely evaluates a constant expression
 * @param {Object} path - Babel AST path
 * @returns {*} The evaluated value or undefined if not evaluable
 */
function evaluateConstant(path) {
  try {
    const result = path.evaluate();
    if (result.confident) {
      return result.value;
    }
  } catch (e) {
    // Evaluation failed, return undefined
  }
  return undefined;
}

/**
 * Constant Folding Visitor
 */
const constantFoldingVisitor = {
  // Fold binary expressions: 1 + 2 -> 3
  BinaryExpression(path) {
    const value = evaluateConstant(path);
    if (value !== undefined) {
      // Replace with appropriate literal
      if (typeof value === 'number') {
        path.replaceWith(t.numericLiteral(value));
      } else if (typeof value === 'string') {
        path.replaceWith(t.stringLiteral(value));
      } else if (typeof value === 'boolean') {
        path.replaceWith(t.booleanLiteral(value));
      }
      this.transformCount++;
    }
  },

  // Fold unary expressions: !true -> false, -5 -> -5
  UnaryExpression(path) {
    const value = evaluateConstant(path);
    if (value !== undefined) {
      if (typeof value === 'number') {
        path.replaceWith(t.numericLiteral(value));
      } else if (typeof value === 'boolean') {
        path.replaceWith(t.booleanLiteral(value));
      }
      this.transformCount++;
    }
  },

  // Fold logical expressions: true && false -> false
  LogicalExpression(path) {
    const value = evaluateConstant(path);
    if (value !== undefined) {
      if (typeof value === 'boolean') {
        path.replaceWith(t.booleanLiteral(value));
        this.transformCount++;
      }
    }
  },

  // Simplify conditional expressions: true ? a : b -> a
  ConditionalExpression(path) {
    const test = path.get('test');
    const testValue = evaluateConstant(test);
    
    if (testValue !== undefined) {
      if (testValue) {
        path.replaceWith(path.node.consequent);
      } else {
        path.replaceWith(path.node.alternate);
      }
      this.transformCount++;
    }
  },
};

/**
 * Apply constant folding transformation
 * @param {Object} ast - Babel AST
 * @param {Function} traverse - Babel traverse function
 * @returns {Object} - Transformation statistics
 */
function transform(ast, traverse) {
  const context = { transformCount: 0 };
  
  // Create visitor with bound context
  const visitor = {};
  for (const [key, value] of Object.entries(constantFoldingVisitor)) {
    visitor[key] = value.bind(context);
  }
  
  traverse(ast, visitor);

  return {
    name: 'Constant Folding',
    transformCount: context.transformCount,
  };
}

module.exports = {
  transform,
  visitor: constantFoldingVisitor,
};
