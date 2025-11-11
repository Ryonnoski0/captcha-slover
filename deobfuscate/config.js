/**
 * Deobfuscator Configuration
 * Defines which transformations are enabled by default and their settings
 */

module.exports = {
  /**
   * Default transformations enabled
   */
  transformations: {
    constantFolding: true,
    stringConcat: true,
    simplifyExpressions: true,
    renameVariables: false, // Disabled by default as it can be risky
    removeDeadCode: true,
    propertyAccessSimplification: true,
    inlineFunctions: false, // Disabled by default, enable with --aggressive
  },

  /**
   * Aggressive mode - enables more risky transformations
   */
  aggressiveMode: {
    renameVariables: true,
    inlineFunctions: true,
    controlFlowFlattening: true,
  },

  /**
   * Variable naming rules
   */
  variableNaming: {
    // Prefixes for different types of variables
    prefix: {
      function: 'fn',
      object: 'obj',
      array: 'arr',
      string: 'str',
      number: 'num',
      boolean: 'bool',
      unknown: 'var',
    },
    // Preserve certain variable names
    preserve: [
      'exports',
      'module',
      'require',
      '__esModule',
      'default',
      'console',
      'window',
      'document',
      'navigator',
      'chrome',
      'browser',
    ],
  },

  /**
   * Code generation options
   */
  generator: {
    retainLines: false,
    compact: false,
    concise: false,
    comments: true, // Preserve comments by default
    minified: false,
    jsescOption: {
      minimal: true,
    },
  },

  /**
   * Parser options
   */
  parser: {
    sourceType: 'unambiguous',
    plugins: [
      'jsx',
      'objectRestSpread',
      'asyncGenerators',
      'classProperties',
      'dynamicImport',
      'optionalChaining',
      'nullishCoalescingOperator',
    ],
  },

  /**
   * Files and directories to ignore
   */
  ignore: [
    '**/node_modules/**',
    '**/dist/**',
    '**/build/**',
    '**/*.min.js',
    '**/*.deobfuscated.js',
  ],

  /**
   * Reporting options
   */
  reporting: {
    verbose: false,
    showTransformations: true,
    generateReport: true,
  },
};
