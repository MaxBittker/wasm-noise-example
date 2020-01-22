(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/wasm-noise/wasm_noise.js":
/*!***********************************************!*\
  !*** ./node_modules/wasm-noise/wasm_noise.js ***!
  \***********************************************/
/*! exports provided: Perlin2D, __wbindgen_throw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Perlin2D\", function() { return Perlin2D; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return __wbindgen_throw; });\n/* harmony import */ var _wasm_noise_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wasm_noise_bg.wasm */ \"./node_modules/wasm-noise/wasm_noise_bg.wasm\");\n\n\nlet cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });\n\ncachedTextDecoder.decode();\n\nlet cachegetUint8Memory0 = null;\nfunction getUint8Memory0() {\n    if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== _wasm_noise_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetUint8Memory0 = new Uint8Array(_wasm_noise_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetUint8Memory0;\n}\n\nfunction getStringFromWasm0(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));\n}\n/**\n*/\nclass Perlin2D {\n\n    static __wrap(ptr) {\n        const obj = Object.create(Perlin2D.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    free() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        _wasm_noise_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_perlin2d_free\"](ptr);\n    }\n    /**\n    * @param {number} x\n    * @param {number} y\n    * @returns {number}\n    */\n    get(x, y) {\n        var ret = _wasm_noise_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"perlin2d_get\"](this.ptr, x, y);\n        return ret;\n    }\n    /**\n    * @param {number} x\n    * @param {number} y\n    * @param {number} z\n    * @returns {number}\n    */\n    get3(x, y, z) {\n        var ret = _wasm_noise_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"perlin2d_get3\"](this.ptr, x, y, z);\n        return ret;\n    }\n    /**\n    * @returns {Perlin2D}\n    */\n    static new() {\n        var ret = _wasm_noise_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"perlin2d_new\"]();\n        return Perlin2D.__wrap(ret);\n    }\n}\n\nconst __wbindgen_throw = function(arg0, arg1) {\n    throw new Error(getStringFromWasm0(arg0, arg1));\n};\n\n\n\n//# sourceURL=webpack:///./node_modules/wasm-noise/wasm_noise.js?");

/***/ }),

/***/ "./node_modules/wasm-noise/wasm_noise_bg.wasm":
/*!****************************************************!*\
  !*** ./node_modules/wasm-noise/wasm_noise_bg.wasm ***!
  \****************************************************/
/*! exports provided: memory, __wbg_perlin2d_free, perlin2d_get, perlin2d_get3, perlin2d_new */
/***/ (function(module, exports, __webpack_require__) {

eval("\"use strict\";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.i];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name != \"__webpack_init__\") exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n/* harmony import */ var m0 = __webpack_require__(/*! ./wasm_noise.js */ \"./node_modules/wasm-noise/wasm_noise.js\");\n\n\n// exec wasm module\nwasmExports[\"__webpack_init__\"]()\n\n//# sourceURL=webpack:///./node_modules/wasm-noise/wasm_noise_bg.wasm?");

/***/ })

}]);