/**
 * Test Runner
 * Executes all test suites
 */

const { runTests } = require('./transformer-tests');

console.log('JavaScript Deobfuscator Test Suite');
console.log('===================================\n');

// Run transformer tests
runTests();
