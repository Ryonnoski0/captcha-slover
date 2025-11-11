/**
 * Example of obfuscated JavaScript code
 * This demonstrates common obfuscation techniques
 */

// Hex encoded strings
var _0x1 = "\x48\x65\x6c\x6c\x6f";
var _0x2 = "\x57\x6f\x72\x6c\x64";

// Unicode escape sequences
var _0x3 = "\u0048\u0065\u006c\u006c\u006f";

// String concatenation
var _0x4 = "Hel" + "lo" + " " + "Wor" + "ld";

// Array access obfuscation
var _0x5 = ["message", "console", "log"];
var _0x6 = _0x5[0];
var _0x7 = _0x5[1];
var _0x8 = _0x5[2];

// Property access obfuscation
var _0x9 = {
  "method": "GET",
  "url": "https://example.com",
  "data": null
};
var _0xa = _0x9["method"];
var _0xb = _0x9["url"];

// Constant folding examples
var _0xc = 1 + 2;
var _0xd = 10 * 5;
var _0xe = 100 / 2;
var _0xf = true && false;
var _0x10 = true || false;

// Dead code
if (false) {
  console.log("This will never run");
  var deadVariable = "unreachable";
}

// Ternary expressions with constants
var _0x11 = true ? "yes" : "no";
var _0x12 = false ? "no" : "yes";

// Complex obfuscation pattern
var _0x13 = function(_0x14, _0x15) {
  var _0x16 = _0x14 + _0x15;
  return _0x16;
};

// Function with obfuscated logic
function _0x17() {
  var _0x18 = [1, 2, 3, 4, 5];
  var _0x19 = _0x18[0] + _0x18[1];
  var _0x1a = _0x18[2] * _0x18[3];
  return _0x19 + _0x1a;
}

// Object with computed properties
var _0x1b = {};
_0x1b["key1"] = "value1";
_0x1b["key2"] = "value2";
_0x1b["key3"] = "value3";

// Nested obfuscation
var _0x1c = {
  "data": {
    "user": {
      "name": "J" + "o" + "h" + "n",
      "age": 20 + 10,
      "active": true && true
    }
  }
};

// Control flow obfuscation
var _0x1d = function() {
  var _0x1e = 1 + 1;
  if (_0x1e === 2) {
    return true;
  } else {
    return false;
  }
};

// Main execution
(function() {
  var _0x1f = _0x1 + " " + _0x2;
  var _0x20 = window || {};
  _0x20["document"] = _0x20["document"] || {};
  
  // Obfuscated console.log
  var _0x21 = console;
  var _0x22 = _0x21["log"];
  _0x22(_0x1f);
})();

// Export pattern
if (typeof module !== "undefined" && module["exports"]) {
  module["exports"] = {
    "greet": function() {
      return _0x1 + " " + _0x2;
    }
  };
}
