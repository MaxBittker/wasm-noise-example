(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var wasm_noise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! wasm-noise */ \"./node_modules/wasm-noise/wasm_noise.js\");\n\nvar perlin = wasm_noise__WEBPACK_IMPORTED_MODULE_0__[\"Perlin2D\"].new();\ndocument.getElementById(\"output\");\nlet t = 0;\nlet size = 150;\n\nfunction write() {\n  //   console.log(t);\n  let str = `<pre>`;\n  let s = 0.03;\n  t++;\n  for (var i = 0; i < size; i++) {\n    for (var j = 0; j < size; j++) {\n      let xo = perlin.get3(i * s, j * s, t * 0.01);\n      let v = perlin.get3((i + xo * 10) * s, (j + 55.4) * s, t * 0.01);\n      let c = \" \";\n      if (v > -0.3) {\n        c = \".\";\n      }\n      if (v > 0.3) {\n        c = \"*\";\n      }\n      if (v > 0.6) {\n        c = \"#\";\n      }\n      str += c;\n    }\n    str += \"\\n\";\n  }\n  output.innerHTML = str;\n  window.requestAnimationFrame(write);\n}\n\nwindow.requestAnimationFrame(write);\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

}]);