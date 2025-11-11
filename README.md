# CAPTCHA Solver Browser Extension

A browser extension for solving CAPTCHA challenges with an integrated JavaScript deobfuscation tool.

## Features

- CAPTCHA solving capabilities
- Browser extension for Chrome/Chromium browsers
- **NEW**: Babel AST-based JavaScript deobfuscation tool

## Deobfuscation Tool

This project includes a powerful deobfuscation tool built with Babel's AST (Abstract Syntax Tree) manipulation capabilities. It can reverse common JavaScript obfuscation techniques and make code more readable.

### Quick Start

```bash
# Install dependencies
npm install

# Deobfuscate a file
npm run deobfuscate -- --input <file> --output <file>

# Deobfuscate the background.js
npm run deobfuscate:background

# Run tests
npm test
```

### Deobfuscation Features

- **Constant Folding**: Evaluates constant expressions (`1 + 2` → `3`)
- **String Concatenation**: Combines string literals (`"a" + "b"` → `"ab"`)
- **Escape Sequence Decoding**: Converts hex/unicode escapes to readable text
- **Expression Simplification**: Simplifies property access and array indexing
- **Dead Code Removal**: Removes unreachable code
- **Variable Renaming**: Attempts to infer meaningful names (aggressive mode)

### Documentation

For complete deobfuscation tool documentation, see [deobfuscate/README.md](deobfuscate/README.md)

### Examples

Transform obfuscated code:
```javascript
// Before
var x = "\x48\x65\x6c\x6c\x6f" + " " + "\x57\x6f\x72\x6c\x64";
var y = 1 + 2 + 3;
if (false) { console.log("dead"); }
var obj = {};
obj["key"] = "value";

// After deobfuscation
var x = "Hello World";
var y = 6;
var obj = {};
obj.key = "value";
```

## Project Structure

```
.
├── background.js           # Background service worker (obfuscated)
├── config.js              # Extension configuration
├── content/               # Content scripts
├── deobfuscate/          # Deobfuscation tool
│   ├── README.md         # Detailed documentation
│   ├── cli.js            # Command-line interface
│   ├── config.js         # Tool configuration
│   ├── deobfuscator.js   # Main deobfuscator module
│   ├── transformers/     # AST transformers
│   ├── examples/         # Example files
│   └── test/            # Test suite
├── manifest.json         # Extension manifest
├── option/              # Options page
└── popup/               # Extension popup
```

## Development

### Installing Dependencies

```bash
npm install
```

### Running Tests

```bash
npm test
```

### Using the Deobfuscator

See the [Deobfuscation Tool Documentation](deobfuscate/README.md) for detailed usage instructions.

## License

ISC
