/**
 * Example of deobfuscated JavaScript code
 * This shows the expected output after deobfuscation
 */

// Hex encoded strings - DECODED
var _0x1 = "Hello";
var _0x2 = "World";

// Unicode escape sequences - DECODED
var _0x3 = "Hello";

// String concatenation - COMBINED
var _0x4 = "Hello World";

// Array access obfuscation - RESOLVED
var _0x5 = ["message", "console", "log"];
var _0x6 = "message";
var _0x7 = "console";
var _0x8 = "log";

// Property access obfuscation - SIMPLIFIED
var _0x9 = {
  method: "GET",
  url: "https://example.com",
  data: null
};
var _0xa = _0x9.method;
var _0xb = _0x9.url;

// Constant folding examples - EVALUATED
var _0xc = 3;
var _0xd = 50;
var _0xe = 50;
var _0xf = false;
var _0x10 = true;

// Dead code - REMOVED
// (All dead code has been eliminated)

// Ternary expressions with constants - SIMPLIFIED
var _0x11 = "yes";
var _0x12 = "yes";

// Complex obfuscation pattern - PRESERVED (function logic)
var _0x13 = function (_0x14, _0x15) {
  var _0x16 = _0x14 + _0x15;
  return _0x16;
};

// Function with obfuscated logic - PARTIALLY DEOBFUSCATED
function _0x17() {
  var _0x18 = [1, 2, 3, 4, 5];
  var _0x19 = 3; // Resolved: _0x18[0] + _0x18[1] = 1 + 2
  var _0x1a = 12; // Resolved: _0x18[2] * _0x18[3] = 3 * 4
  return 15; // Evaluated: _0x19 + _0x1a
}

// Object with computed properties - SIMPLIFIED
var _0x1b = {};
_0x1b.key1 = "value1";
_0x1b.key2 = "value2";
_0x1b.key3 = "value3";

// Nested obfuscation - FULLY DEOBFUSCATED
var _0x1c = {
  data: {
    user: {
      name: "John",
      age: 30,
      active: true
    }
  }
};

// Control flow obfuscation - SIMPLIFIED
var _0x1d = function () {
  var _0x1e = 2;
  return true;
};

// Main execution - PARTIALLY DEOBFUSCATED
(function () {
  var _0x1f = "Hello World";
  var _0x20 = window || {};
  _0x20.document = _0x20.document || {};

  // Obfuscated console.log - SIMPLIFIED
  var _0x21 = console;
  var _0x22 = _0x21.log;
  _0x22(_0x1f);
})();

// Export pattern - SIMPLIFIED
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    greet: function () {
      return "Hello World";
    }
  };
}
