module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _createCoordCalculator = __webpack_require__(2);

var _createCoordCalculator2 = _interopRequireDefault(_createCoordCalculator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

var SQRT3 = Math.sqrt(3);

function IsometricProjection(_ref) {
  var width = _ref.width,
      x = _ref.x,
      y = _ref.y,
      mesh = _ref.mesh;

  var calculate = (0, _createCoordCalculator2.default)(width);

  var _mesh = _toArray(mesh),
      scale = _mesh[0],
      polygons = _mesh.slice(1);

  var scaledPolygons = polygons.map(function (_ref2) {
    var _ref3 = _toArray(_ref2),
        color = _ref3[0],
        vertices = _ref3.slice(1);

    return [color].concat(_toConsumableArray(vertices.map(function (v) {
      return v.map(function (scalar) {
        return scalar / scale;
      });
    })));
  });
  scaledPolygons.sort(function (_ref4, _ref5) {
    var _ref7 = _toArray(_ref4),
        aVertices = _ref7.slice(1);

    var _ref6 = _toArray(_ref5),
        bVertices = _ref6.slice(1);

    var aGreatestVertexDistanceSquared = Math.max.apply(Math, _toConsumableArray(aVertices.map(function (_ref8) {
      var _ref9 = _slicedToArray(_ref8, 3),
          x = _ref9[0],
          y = _ref9[1],
          z = _ref9[2];

      return x + y + z;
    })));
    var bGreatestVertexDistanceSquared = Math.max.apply(Math, _toConsumableArray(bVertices.map(function (_ref10) {
      var _ref11 = _slicedToArray(_ref10, 3),
          x = _ref11[0],
          y = _ref11[1],
          z = _ref11[2];

      return x + y + z;
    })));
    return aGreatestVertexDistanceSquared - bGreatestVertexDistanceSquared;
  });
  var renderPolygons = scaledPolygons.map(function (_ref12) {
    var _ref13 = _toArray(_ref12),
        color = _ref13[0],
        vertices = _ref13.slice(1);

    return [color].concat(_toConsumableArray(vertices.map(function (_ref14) {
      var _ref15 = _slicedToArray(_ref14, 3),
          x = _ref15[0],
          y = _ref15[1],
          z = _ref15[2];

      return calculate(x, y, z);
    })));
  });

  return _react2.default.createElement(
    'g',
    { transform: 'translate(' + x + ', ' + y + ')' },
    renderPolygons.map(function (_ref16, i) {
      var _ref17 = _toArray(_ref16),
          color = _ref17[0],
          points = _ref17.slice(1);

      var pointsStr = points.map(function (p) {
        return p.join(',');
      }).join(' ');
      return _react2.default.createElement('polygon', { key: i, points: pointsStr, fill: color });
    })
  );
}

exports.default = IsometricProjection;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var parseColors = function parseColors(colors, polygons) {
  return Array.apply(null, { length: polygons }).map(function (a, i) {
    return colors[i] || colors[0] || 'transparent';
  });
};

var cube = function cube(x, y, z, s) {
  for (var _len = arguments.length, c = Array(_len > 4 ? _len - 4 : 0), _key = 4; _key < _len; _key++) {
    c[_key - 4] = arguments[_key];
  }

  return rectPrism.apply(undefined, [x, y, z, s, s, s].concat(c));
};

var polygon = function polygon(c) {
  for (var _len2 = arguments.length, vertices = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    vertices[_key2 - 1] = arguments[_key2];
  }

  return [[c].concat(vertices)];
};

var rectPrism = function rectPrism(x, y, z, dx, dy, dz) {
  for (var _len3 = arguments.length, c = Array(_len3 > 6 ? _len3 - 6 : 0), _key3 = 6; _key3 < _len3; _key3++) {
    c[_key3 - 6] = arguments[_key3];
  }

  var c1 = parseColors(c, 6);
  return [].concat(_toConsumableArray(xzRect(x, y, z, dx, dz, c1[0])), _toConsumableArray(xyRect(x, y, z, dx, dy, c1[1])), _toConsumableArray(yzRect(x, y, z, dy, dz, c1[2])), _toConsumableArray(xyRect(x, y, z + dz, dx, dy, c1[3])), _toConsumableArray(yzRect(x + dx, y, z, dy, dz, c1[4])), _toConsumableArray(xzRect(x, y + dy, z, dx, dz, c1[5])));
};

var xyRect = function xyRect(x, y, z, dx, dy, c) {
  return [[c, [x, y, z], [x + dx, y, z], [x + dx, y + dy, z], [x, y + dy, z]]];
};

var xzRect = function xzRect(x, y, z, dx, dz, c) {
  return [[c, [x, y, z], [x + dx, y, z], [x + dx, y, z + dz], [x, y, z + dz]]];
};

/* TODO
const xzRectPyramid = (x, y, z, dx, dy, dz, ...c) => {
  const c1 = parseColors(c, 5);
  return [
    ...xzRect(x, y, z, dx, dz, c1[0]),
    [c1[1], [x, y, z], []]
  ];
};
*/

var yzRect = function yzRect(x, y, z, dy, dz, c) {
  return [[c, [x, y, z], [x, y + dy, z], [x, y + dy, z + dz], [x, y, z + dz]]];
};

exports.default = {
  cube: cube,
  polygon: polygon,
  rectPrism: rectPrism,
  xyRect: xyRect,
  xzRect: xzRect,
  yzRect: yzRect
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var SQRT3 = Math.sqrt(3);

exports.default = function (width) {
  return function (x, y, z) {
    var k = width / SQRT3;

    var x1 = x * k;
    var y1 = y * k;
    var z1 = z * k;
    var x2 = (z1 - x1) * (SQRT3 / 2);
    var y2 = y1 - (x1 + z1) / 2;

    return [x2, -y2];
  };
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.meshLib = exports.IsometricProjection = undefined;

var _IsometricProjection = __webpack_require__(0);

var _IsometricProjection2 = _interopRequireDefault(_IsometricProjection);

var _meshLib = __webpack_require__(1);

var _meshLib2 = _interopRequireDefault(_meshLib);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.IsometricProjection = _IsometricProjection2.default;
exports.meshLib = _meshLib2.default;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })
/******/ ]);