/**
 * Dead Code Removal Transformer
 * Removes unreachable code and unused declarations
 */

const t = require('@babel/types');

/**
 * Check if a node is a literal false or true value
 * @param {Object} node - AST node
 * @returns {boolean|null} - true/false or null if not a literal boolean
 */
function isLiteralBoolean(node) {
  if (t.isBooleanLiteral(node)) {
    return node.value;
  }
  if (t.isNumericLiteral(node)) {
    return node.value !== 0;
  }
  return null;
}

/**
 * Dead Code Removal Visitor
 */
const removeDeadCodeVisitor = {
  // Remove unreachable code after return/throw/break/continue
  BlockStatement(path) {
    const { node } = path;
    const statements = node.body;
    
    for (let i = 0; i < statements.length; i++) {
      const stmt = statements[i];
      
      // If we find a return, throw, break, or continue, everything after is dead
      if (
        t.isReturnStatement(stmt) ||
        t.isThrowStatement(stmt) ||
        t.isBreakStatement(stmt) ||
        t.isContinueStatement(stmt)
      ) {
        const deadCode = statements.slice(i + 1);
        if (deadCode.length > 0) {
          statements.splice(i + 1);
          this.transformCount += deadCode.length;
        }
        break;
      }
    }
  },

  // Remove if statements with constant false conditions
  IfStatement(path) {
    const { node } = path;
    const testValue = isLiteralBoolean(node.test);
    
    if (testValue === true) {
      // Replace with consequent
      if (node.consequent) {
        path.replaceWith(node.consequent);
        this.transformCount++;
      } else {
        path.remove();
        this.transformCount++;
      }
    } else if (testValue === false) {
      // Replace with alternate or remove
      if (node.alternate) {
        path.replaceWith(node.alternate);
        this.transformCount++;
      } else {
        path.remove();
        this.transformCount++;
      }
    }
  },

  // Remove empty statements
  EmptyStatement(path) {
    path.remove();
    this.transformCount++;
  },

  // Remove unreferenced variables (conservative)
  VariableDeclaration(path) {
    const { node } = path;
    
    // Filter out declarators that are never used
    const usedDeclarators = node.declarations.filter((declarator) => {
      if (!t.isIdentifier(declarator.id)) {
        return true; // Keep non-identifier patterns
      }
      
      const binding = path.scope.getBinding(declarator.id.name);
      if (!binding) {
        return true; // Keep if no binding found (safer)
      }
      
      // Remove if not referenced anywhere and has no side effects in init
      if (binding.referenced === false && binding.references === 0) {
        // Check if init has side effects
        if (!declarator.init || t.isLiteral(declarator.init)) {
          this.transformCount++;
          return false; // Remove this declarator
        }
      }
      
      return true; // Keep this declarator
    });
    
    if (usedDeclarators.length === 0) {
      path.remove();
    } else if (usedDeclarators.length < node.declarations.length) {
      node.declarations = usedDeclarators;
    }
  },

  // Remove while(false) loops
  WhileStatement(path) {
    const { node } = path;
    const testValue = isLiteralBoolean(node.test);
    
    if (testValue === false) {
      path.remove();
      this.transformCount++;
    }
  },

  // Remove for loops with false condition
  ForStatement(path) {
    const { node } = path;
    if (node.test) {
      const testValue = isLiteralBoolean(node.test);
      if (testValue === false) {
        // Keep init if it has side effects, otherwise remove entire loop
        if (node.init && !t.isLiteral(node.init)) {
          path.replaceWith(t.expressionStatement(node.init));
        } else {
          path.remove();
        }
        this.transformCount++;
      }
    }
  },
};

/**
 * Apply dead code removal transformation
 * @param {Object} ast - Babel AST
 * @param {Function} traverse - Babel traverse function
 * @returns {Object} - Transformation statistics
 */
function transform(ast, traverse) {
  const context = { transformCount: 0 };
  
  // Run multiple passes to handle cascading dead code
  let lastCount = -1;
  let iterations = 0;
  const maxIterations = 5;
  
  while (context.transformCount !== lastCount && iterations < maxIterations) {
    lastCount = context.transformCount;
    
    // Create visitor with bound context
    const visitor = {};
    for (const [key, value] of Object.entries(removeDeadCodeVisitor)) {
      visitor[key] = value.bind(context);
    }
    
    traverse(ast, visitor);
    
    iterations++;
  }

  return {
    name: 'Dead Code Removal',
    transformCount: context.transformCount,
  };
}

module.exports = {
  transform,
  visitor: removeDeadCodeVisitor,
};
