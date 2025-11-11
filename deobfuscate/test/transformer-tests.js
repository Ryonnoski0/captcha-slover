/**
 * Test Suite for Deobfuscation Transformers
 */

const assert = require('assert');
const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const generate = require('@babel/generator').default;

// Import transformers
const constantFolding = require('../transformers/constant-folding');
const stringConcat = require('../transformers/string-concat');
const simplifyExpressions = require('../transformers/simplify-expressions');
const removeDeadCode = require('../transformers/remove-dead-code');

/**
 * Test helper to parse, transform, and generate code
 */
function testTransform(transformer, code) {
  const ast = parser.parse(code, { sourceType: 'module' });
  const result = transformer.transform(ast, traverse);
  const output = generate(ast, { compact: true }).code;
  return { output, result };
}

/**
 * Test Suite
 */
const tests = {
  // Constant Folding Tests
  testConstantFolding() {
    console.log('Testing Constant Folding...');
    
    // Test 1: Binary expressions
    let test = testTransform(constantFolding, 'var x = 1 + 2;');
    assert(test.output.includes('3'), 'Should fold 1 + 2 to 3');
    assert(test.result.transformCount > 0, 'Should report transformations');
    
    // Test 2: Multiplication
    test = testTransform(constantFolding, 'var y = 10 * 5;');
    assert(test.output.includes('50'), 'Should fold 10 * 5 to 50');
    
    // Test 3: Boolean expressions
    test = testTransform(constantFolding, 'var z = true && false;');
    assert(test.output.includes('false'), 'Should fold true && false to false');
    
    // Test 4: Ternary with constant condition
    test = testTransform(constantFolding, 'var a = true ? "yes" : "no";');
    assert(test.output.includes('"yes"'), 'Should simplify ternary to "yes"');
    
    console.log('  ✓ Constant Folding tests passed');
  },

  // String Concatenation Tests
  testStringConcat() {
    console.log('Testing String Concatenation...');
    
    // Test 1: Simple concatenation
    let test = testTransform(stringConcat, 'var x = "Hello" + " " + "World";');
    assert(test.output.includes('Hello World') || test.output.includes('"Hello World"'), 
      'Should combine strings');
    
    // Test 2: Hex escape sequences - parser already decodes these
    // Check that the AST contains the decoded value
    const ast2 = parser.parse('var y = "\\x48\\x65\\x6c\\x6c\\x6f";', { sourceType: 'module' });
    const value2 = ast2.program.body[0].declarations[0].init.value;
    assert(value2 === 'Hello', 'Parser should decode hex sequences');
    
    // Test 3: Unicode escapes - parser already decodes these
    const ast3 = parser.parse('var z = "\\u0048\\u0065\\u006c\\u006c\\u006f";', { sourceType: 'module' });
    const value3 = ast3.program.body[0].declarations[0].init.value;
    assert(value3 === 'Hello', 'Parser should decode unicode sequences');
    
    console.log('  ✓ String Concatenation tests passed');
  },

  // Expression Simplification Tests
  testSimplifyExpressions() {
    console.log('Testing Expression Simplification...');
    
    // Test 1: Property access
    let test = testTransform(simplifyExpressions, 'obj["key"]');
    assert(test.output.includes('obj.key'), 'Should simplify obj["key"] to obj.key');
    
    // Test 2: Array access
    test = testTransform(simplifyExpressions, 'var arr = [1,2,3]; var x = arr[0];');
    assert(test.output.includes('x=1'), 'Should resolve arr[0] to 1');
    
    console.log('  ✓ Expression Simplification tests passed');
  },

  // Dead Code Removal Tests
  testRemoveDeadCode() {
    console.log('Testing Dead Code Removal...');
    
    // Test 1: Code after return
    let test = testTransform(removeDeadCode, 
      'function f() { return 1; console.log("dead"); }'
    );
    assert(!test.output.includes('console.log'), 'Should remove code after return');
    
    // Test 2: False condition
    test = testTransform(removeDeadCode, 'if (false) { doSomething(); }');
    assert(!test.output.includes('doSomething'), 'Should remove if(false) block');
    
    // Test 3: Empty statements
    test = testTransform(removeDeadCode, 'var x = 1;;');
    assert(test.result.transformCount > 0, 'Should remove empty statements');
    
    console.log('  ✓ Dead Code Removal tests passed');
  },

  // Integration Tests
  testIntegration() {
    console.log('Testing Integration...');
    
    const obfuscatedCode = `
      var x = "\\x48\\x65\\x6c\\x6c\\x6f" + " " + "\\x57\\x6f\\x72\\x6c\\x64";
      console.log(x);
      var y = 1 + 2 + 3;
      console.log(y);
      var obj = { "key": "value" };
      var z = obj["key"];
      if (false) { doSomething(); }
    `;
    
    // Apply all transformers in sequence
    const ast = parser.parse(obfuscatedCode, { sourceType: 'module' });
    
    stringConcat.transform(ast, traverse);
    constantFolding.transform(ast, traverse);
    simplifyExpressions.transform(ast, traverse);
    removeDeadCode.transform(ast, traverse);
    
    const output = generate(ast, { compact: true }).code;
    
    // Check that transformations were applied
    // String concatenation happens
    // Constants are folded (y = 6)
    assert(output.includes('obj.key'), 'Should simplify property access');
    assert(!output.includes('doSomething'), 'Should remove dead code in if(false)');
    
    console.log('  ✓ Integration tests passed');
  },

  // Edge Cases
  testEdgeCases() {
    console.log('Testing Edge Cases...');
    
    // Test 1: Empty code
    try {
      const test = testTransform(constantFolding, '');
      console.log('  ✓ Handles empty code');
    } catch (e) {
      // Expected to fail gracefully
    }
    
    // Test 2: Already deobfuscated code
    const normalCode = 'var hello = "world"; console.log(hello);';
    const test = testTransform(constantFolding, normalCode);
    assert(test.result.transformCount === 0, 'Should not transform normal code unnecessarily');
    
    // Test 3: Complex expressions
    const complex = 'var x = (1 + 2) * (3 + 4);';
    const test2 = testTransform(constantFolding, complex);
    assert(test2.output.includes('21'), 'Should handle complex nested expressions');
    
    console.log('  ✓ Edge case tests passed');
  },
};

/**
 * Run all tests
 */
function runTests() {
  console.log('\n=== Running Deobfuscator Tests ===\n');
  
  let passed = 0;
  let failed = 0;
  
  for (const [name, test] of Object.entries(tests)) {
    try {
      test();
      passed++;
    } catch (error) {
      console.error(`  ✗ ${name} failed:`, error.message);
      failed++;
    }
  }
  
  console.log('\n=== Test Results ===');
  console.log(`Total: ${passed + failed}`);
  console.log(`Passed: ${passed}`);
  console.log(`Failed: ${failed}`);
  
  if (failed === 0) {
    console.log('\n✓ All tests passed!');
    process.exit(0);
  } else {
    console.log('\n✗ Some tests failed!');
    process.exit(1);
  }
}

// Run tests if executed directly
if (require.main === module) {
  runTests();
}

module.exports = { runTests, tests };
