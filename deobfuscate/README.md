# JavaScript Deobfuscator

A powerful Babel AST-based deobfuscation tool for JavaScript code. This tool can reverse common obfuscation techniques and transform minified/obfuscated code into more readable form.

## Features

- **Constant Folding** - Evaluates constant expressions (`1 + 2` → `3`)
- **String Concatenation** - Combines string literals (`"a" + "b"` → `"ab"`)
- **Escape Sequence Decoding** - Converts hex/unicode escapes (`\x48\x65\x6c\x6c\x6f` → `Hello`)
- **Expression Simplification** - Simplifies complex expressions
- **Property Access Simplification** - Converts bracket to dot notation (`obj["key"]` → `obj.key`)
- **Array Index Resolution** - Resolves constant array accesses (`arr[0]` → `value`)
- **Dead Code Removal** - Removes unreachable code
- **Variable Renaming** - Attempts to infer meaningful variable names (aggressive mode)

## Installation

```bash
npm install
```

This will install all required dependencies:
- `@babel/parser` - JavaScript parser
- `@babel/traverse` - AST traversal
- `@babel/types` - AST node types and builders
- `@babel/generator` - Code generation from AST
- `commander` - CLI argument parsing

## Usage

### Command Line

Basic usage:
```bash
npm run deobfuscate -- --input <file> --output <file>
```

Deobfuscate the background.js file:
```bash
npm run deobfuscate:background
```

### CLI Options

```bash
node deobfuscate/cli.js [options]

Options:
  -i, --input <path>         Input file or directory path (required)
  -o, --output <path>        Output file or directory path (required)
  -a, --aggressive           Enable aggressive mode (more transformations)
  -p, --preserve-comments    Preserve comments in output (default: true)
  -r, --recursive            Process directories recursively
  -v, --verbose              Verbose output with detailed reports
  -V, --version              Output version number
  -h, --help                 Display help
```

### Examples

**Deobfuscate a single file:**
```bash
node deobfuscate/cli.js -i background.js -o background.deobfuscated.js
```

**Deobfuscate with aggressive mode:**
```bash
node deobfuscate/cli.js -i background.js -o output.js --aggressive
```

**Process entire directory:**
```bash
node deobfuscate/cli.js -i ./content -o ./content-deobfuscated --recursive
```

**Verbose mode with detailed reports:**
```bash
node deobfuscate/cli.js -i input.js -o output.js --verbose
```

### Programmatic Usage

```javascript
const { deobfuscate, deobfuscateFile } = require('./deobfuscate/deobfuscator');

// Deobfuscate code string
const code = 'var x = 1 + 2;';
const result = deobfuscate(code, { aggressive: false });
console.log(result.code); // var x = 3;

// Deobfuscate file
deobfuscateFile('input.js', 'output.js', {
  aggressive: true,
  preserveComments: true,
  verbose: true
});
```

## Transformers

### 1. Constant Folding (`constant-folding.js`)

Evaluates and replaces constant expressions with their computed values.

**Examples:**
```javascript
// Before
var a = 1 + 2;
var b = 10 * 5;
var c = true && false;

// After
var a = 3;
var b = 50;
var c = false;
```

### 2. String Concatenation (`string-concat.js`)

Combines adjacent string literals and decodes escape sequences.

**Examples:**
```javascript
// Before
var msg = "Hello" + " " + "World";
var hex = "\x48\x65\x6c\x6c\x6f";
var unicode = "\u0048\u0065\u006c\u006c\u006f";

// After
var msg = "Hello World";
var hex = "Hello";
var unicode = "Hello";
```

### 3. Expression Simplification (`simplify-expressions.js`)

Simplifies property access and resolves array indices.

**Examples:**
```javascript
// Before
var obj = {key: "value"};
var x = obj["key"];
var arr = [1, 2, 3];
var y = arr[0];

// After
var obj = {key: "value"};
var x = obj.key;
var arr = [1, 2, 3];
var y = 1;
```

### 4. Dead Code Removal (`remove-dead-code.js`)

Removes unreachable code and unused variables.

**Examples:**
```javascript
// Before
function test() {
  return true;
  console.log("unreachable");
}
if (false) {
  doSomething();
}

// After
function test() {
  return true;
}
```

### 5. Variable Renaming (`rename-variables.js`)

Attempts to rename variables to more meaningful names (aggressive mode only).

**Examples:**
```javascript
// Before
var a = function() {};
var b = [1, 2, 3];
var c = "hello";

// After (aggressive mode)
var fn1 = function() {};
var arr1 = [1, 2, 3];
var str1 = "hello";
```

## Configuration

Edit `deobfuscate/config.js` to customize:

- Which transformations are enabled by default
- Variable naming rules and preserved identifiers
- Parser and generator options
- File ignore patterns

**Example configuration:**
```javascript
module.exports = {
  transformations: {
    constantFolding: true,
    stringConcat: true,
    simplifyExpressions: true,
    renameVariables: false,  // Risky, enable with --aggressive
    removeDeadCode: true,
  },
  variableNaming: {
    preserve: ['exports', 'module', 'require', 'console'],
  },
};
```

## Common Obfuscation Patterns

This tool handles many common obfuscation patterns:

1. **Hex String Encoding**: `"\x48\x65\x6c\x6c\x6f"` → `"Hello"`
2. **Unicode Escapes**: `"\u0048"` → `"H"`
3. **String Splitting**: `"Hel" + "lo"` → `"Hello"`
4. **Constant Expressions**: `1 + 1` → `2`
5. **Array Access**: `["value"][0]` → `"value"`
6. **Property Obfuscation**: `obj["prop"]` → `obj.prop`
7. **Dead Code Injection**: Removes `if (false) { ... }`
8. **Ternary Simplification**: `true ? a : b` → `a`

## Limitations

- **Control Flow Flattening**: Complex control flow obfuscation requires more advanced analysis
- **Dynamic Code**: Cannot deobfuscate code generated at runtime (`eval`, `Function` constructor)
- **Variable Renaming**: Conservative by default; aggressive mode may break code with dynamic property access
- **Webpack Bundles**: May require special handling for module loaders

## Troubleshooting

**Parse Errors:**
- Try different source types in config (`module`, `script`, `unambiguous`)
- Check if code uses non-standard syntax

**Broken Output:**
- Disable aggressive mode
- Try enabling/disabling specific transformations in config
- Use `--preserve-comments` to keep original comments

**Large Files:**
- Processing very large files (>1MB) may be slow
- Consider splitting into smaller modules first

## Testing

Run the test suite:
```bash
npm test
```

Tests are located in `deobfuscate/test/` and cover:
- Individual transformer functionality
- Edge cases and error handling
- Integration tests with real obfuscated code

## Contributing

When adding new transformers:

1. Create transformer in `deobfuscate/transformers/`
2. Export `transform` function and `visitor` object
3. Add to `deobfuscator.js` transformation pipeline
4. Update configuration in `config.js`
5. Add tests in `deobfuscate/test/`
6. Document in this README

## License

ISC

## References

- [Babel Documentation](https://babeljs.io/docs/)
- [AST Explorer](https://astexplorer.net/)
- [Babel Types](https://babeljs.io/docs/babel-types)
