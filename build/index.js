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
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (v) {
  if (!(Array.isArray(v) || 'string' === typeof v)) {
    throw new Error('Illegal vector: ' + v);
  }

  var rawArr = Array.isArray(v) ? v : v.split(' ');
  var arr = rawArr.map(function (n) {
    return +n;
  });

  if (arr.find(isNaN)) {
    throw new Error('Illegal vector: ' + v);
  }

  return arr;
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _parseVector = __webpack_require__(0);

var _parseVector2 = _interopRequireDefault(_parseVector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var color = _ref.color,
      points = _ref.points;
  return {
    type: 'POLYGON',
    color: color,
    points: points.map(_parseVector2.default)
  };
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (type, props) {
  for (var _len = arguments.length, children = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    children[_key - 2] = arguments[_key];
  }

  if ('string' === typeof type) {
    throw new Error('Illegal JSX in mesh definition: ');
  }

  var propsWithChildren = Object.assign({}, props, { children: children });

  return type(propsWithChildren);
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (parentArr) {
  return parentArr.reduce(function (arr, item) {
    return Array.isArray(item) ? arr.concat(item) : arr.concat([item]);
  }, []);
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var flattenTagsIntoPolyArr = function flattenTagsIntoPolyArr(tags) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [0, 0, 0];
  var scale = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [1, 1, 1];
  var listeners = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

  var _offset = _slicedToArray(offset, 3),
      ox = _offset[0],
      oy = _offset[1],
      oz = _offset[2];

  var _scale = _slicedToArray(scale, 3),
      sx = _scale[0],
      sy = _scale[1],
      sz = _scale[2];

  return tags.reduce(function (arr, tag) {
    if (tag.type === 'POLYGON') {
      return arr.concat([{
        color: tag.color,
        points: tag.points.map(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 3),
              x = _ref2[0],
              y = _ref2[1],
              z = _ref2[2];

          return [ox + x * sx, oy + y * sy, oz + z * sz];
        }),
        listeners: listeners
      }]);
    } else if (tag.type === 'GROUP') {
      var _tag$position = _slicedToArray(tag.position, 3),
          px = _tag$position[0],
          py = _tag$position[1],
          pz = _tag$position[2];

      var _tag$dimensions = _slicedToArray(tag.dimensions, 3),
          gdx = _tag$dimensions[0],
          gdy = _tag$dimensions[1],
          gdz = _tag$dimensions[2];

      var _tag$viewBoxDimension = _slicedToArray(tag.viewBoxDimensions, 3),
          gvbx = _tag$viewBoxDimension[0],
          gvby = _tag$viewBoxDimension[1],
          gvbz = _tag$viewBoxDimension[2];

      var gsx = gdx / gvbx,
          gsy = gdy / gvby,
          gsz = gdz / gvbz;


      return arr.concat(flattenTagsIntoPolyArr(tag.children, [ox + px * sx, oy + py * sy, oz + pz * sz], [gsx, gsy, gsz]));
    } else if (tag.type === 'LISTENER') {
      var compoundedListeners = Object.assign({}, listeners, tag.listeners);

      return arr.concat(flattenTagsIntoPolyArr(tag.children, offset, scale, compoundedListeners));
    } else {
      throw new Error('Illegal tag type: ' + tag.type);
    }
  }, []);
};

exports.default = flattenTagsIntoPolyArr;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (colors, numberRequired) {
  if (!Array.isArray(colors) || colors.length === 0) {
    throw new Error('You must provide a non-zero-length array as the colors prop');
  }

  return Array.apply(null, { length: numberRequired }).map(function (_, i) {
    return colors[i] || colors[0];
  });
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = __webpack_require__(16);

var _react2 = _interopRequireDefault(_react);

var _createCoordCalculator = __webpack_require__(8);

var _createCoordCalculator2 = _interopRequireDefault(_createCoordCalculator);

var _flattenTagsIntoPolyArr = __webpack_require__(4);

var _flattenTagsIntoPolyArr2 = _interopRequireDefault(_flattenTagsIntoPolyArr);

var _sortByRenderOrder = __webpack_require__(15);

var _sortByRenderOrder2 = _interopRequireDefault(_sortByRenderOrder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IsometricProjection(_ref) {
  var size = _ref.size,
      x = _ref.x,
      y = _ref.y,
      group = _ref.mesh;
  var vbd = group.viewBoxDimensions,
      children = group.children;


  var scale = vbd.map(function (n) {
    return size / n;
  });

  var polygons = (0, _flattenTagsIntoPolyArr2.default)(children, [0, 0, 0], scale);

  polygons.sort(_sortByRenderOrder2.default);

  var calculate = (0, _createCoordCalculator2.default)(size);

  var renderPolygons = polygons.map(function (_ref2) {
    var color = _ref2.color,
        points = _ref2.points,
        listeners = _ref2.listeners;
    return {
      color: color,
      points: points.map(function (_ref3) {
        var _ref4 = _slicedToArray(_ref3, 3),
            x = _ref4[0],
            y = _ref4[1],
            z = _ref4[2];

        return calculate(x, y, z);
      }),
      listeners: listeners
    };
  });

  return _react2.default.createElement(
    'g',
    { transform: 'translate(' + x + ', ' + y + ')' },
    renderPolygons.map(function (_ref5, i) {
      var color = _ref5.color,
          points = _ref5.points,
          listeners = _ref5.listeners;

      var pointsStr = points.map(function (p) {
        return p.join(',');
      }).join(' ');

      var sanitizedListeners = listeners; // TODO: implement sanitization
      return _react2.default.createElement('polygon', _extends({ key: i, points: pointsStr, fill: color }, sanitizedListeners));
    })
  );
}

exports.default = IsometricProjection;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _MeshDefinition = __webpack_require__(12);

var _MeshDefinition2 = _interopRequireDefault(_MeshDefinition);

var _Group = __webpack_require__(10);

var _Group2 = _interopRequireDefault(_Group);

var _Polygon = __webpack_require__(1);

var _Polygon2 = _interopRequireDefault(_Polygon);

var _Listener = __webpack_require__(11);

var _Listener2 = _interopRequireDefault(_Listener);

var _Pyramid = __webpack_require__(13);

var _Pyramid2 = _interopRequireDefault(_Pyramid);

var _Rect = __webpack_require__(14);

var _Rect2 = _interopRequireDefault(_Rect);

var _jsxToObj = __webpack_require__(2);

var _jsxToObj2 = _interopRequireDefault(_jsxToObj);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  MeshDefinition: _MeshDefinition2.default,

  Group: _Group2.default,
  Polygon: _Polygon2.default,
  Listener: _Listener2.default,

  Pyramid: _Pyramid2.default,
  Rect: _Rect2.default,

  jsxToObj: _jsxToObj2.default
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var SQRT3 = Math.sqrt(3);

exports.default = function () {
  return function (x, y, z) {
    // const k = width / SQRT3

    var x1 = x; // * k
    var y1 = y; // * k
    var z1 = z; // * k
    var x2 = (z1 - x1) * (SQRT3 / 2);
    var y2 = y1 - (x1 + z1) / 2;

    return [x2, -y2];
  };
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.meshLib = exports.IsometricProjection = undefined;

var _IsometricProjection = __webpack_require__(6);

var _IsometricProjection2 = _interopRequireDefault(_IsometricProjection);

var _index = __webpack_require__(7);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.IsometricProjection = _IsometricProjection2.default;
exports.meshLib = _index2.default;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _flattenSubarraysIntoParent = __webpack_require__(3);

var _flattenSubarraysIntoParent2 = _interopRequireDefault(_flattenSubarraysIntoParent);

var _parseVector = __webpack_require__(0);

var _parseVector2 = _interopRequireDefault(_parseVector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var _ref$viewBoxDimension = _ref.viewBoxDimensions,
      viewBoxDimensions = _ref$viewBoxDimension === undefined ? '1 1 1' : _ref$viewBoxDimension,
      _ref$dimensions = _ref.dimensions,
      dimensions = _ref$dimensions === undefined ? '1 1 1' : _ref$dimensions,
      _ref$position = _ref.position,
      position = _ref$position === undefined ? '0 0 0' : _ref$position,
      children = _ref.children;

  return {
    type: 'GROUP',
    viewBoxDimensions: (0, _parseVector2.default)(viewBoxDimensions),
    dimensions: (0, _parseVector2.default)(dimensions),
    position: (0, _parseVector2.default)(position),
    children: (0, _flattenSubarraysIntoParent2.default)(children)
  };
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _flattenSubarraysIntoParent = __webpack_require__(3);

var _flattenSubarraysIntoParent2 = _interopRequireDefault(_flattenSubarraysIntoParent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var listeners = _ref.listeners,
      children = _ref.children;

  return {
    type: 'LISTENER',
    listeners: listeners,
    children: (0, _flattenSubarraysIntoParent2.default)(children)
  };
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _flattenTagsIntoPolyArr = __webpack_require__(4);

var _flattenTagsIntoPolyArr2 = _interopRequireDefault(_flattenTagsIntoPolyArr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var viewBoxDimensions = _ref.viewBoxDimensions,
      children = _ref.children;
  return {
    type: 'MESH_DEFINITION',
    viewBoxDimensions: viewBoxDimensions,
    polygons: (0, _flattenTagsIntoPolyArr2.default)(children)
  };
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _parseColors = __webpack_require__(5);

var _parseColors2 = _interopRequireDefault(_parseColors);

var _parseVector = __webpack_require__(0);

var _parseVector2 = _interopRequireDefault(_parseVector);

var _jsxToObj = __webpack_require__(2);

var _jsxToObj2 = _interopRequireDefault(_jsxToObj);

var _Polygon = __webpack_require__(1);

var _Polygon2 = _interopRequireDefault(_Polygon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @jsx jsxToObj **/

exports.default = function (_ref) {
  var basePoints = _ref.basePoints,
      tipPoint = _ref.tipPoint,
      colors = _ref.colors;

  var bp = basePoints.map(_parseVector2.default);
  var tp = (0, _parseVector2.default)(tipPoint);
  var pc = (0, _parseColors2.default)(colors, bp.length + 1);

  return bp.reduce(function (arr, basePoint, i) {
    var nextIndex = i + 1;
    var nextPoint = nextIndex < bp.length ? bp[nextIndex] : bp[0];
    return arr.concat([(0, _jsxToObj2.default)(_Polygon2.default, { color: pc[i + 1], points: [basePoint, tipPoint, nextPoint] })]);
  }, [(0, _jsxToObj2.default)(_Polygon2.default, { color: pc[0], points: bp })]);
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _jsxToObj = __webpack_require__(2);

var _jsxToObj2 = _interopRequireDefault(_jsxToObj);

var _parseColors = __webpack_require__(5);

var _parseColors2 = _interopRequireDefault(_parseColors);

var _parseVector5 = __webpack_require__(0);

var _parseVector6 = _interopRequireDefault(_parseVector5);

var _Polygon = __webpack_require__(1);

var _Polygon2 = _interopRequireDefault(_Polygon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @jsx jsxToObj **/

exports.default = function (_ref) {
  var position = _ref.position,
      dimensions = _ref.dimensions,
      colors = _ref.colors;

  var pc = (0, _parseColors2.default)(colors, 6);

  var _parseVector = (0, _parseVector6.default)(position),
      _parseVector2 = _slicedToArray(_parseVector, 3),
      x = _parseVector2[0],
      y = _parseVector2[1],
      z = _parseVector2[2];

  var _parseVector3 = (0, _parseVector6.default)(dimensions),
      _parseVector4 = _slicedToArray(_parseVector3, 3),
      dx = _parseVector4[0],
      dy = _parseVector4[1],
      dz = _parseVector4[2];

  return [(0, _jsxToObj2.default)(_Polygon2.default, {
    color: pc[0],
    points: [[x, y + dy, z], [x + dx, y + dy, z], [x + dx, y + dy, z + dz], [x, y + dy, z + dz]]
  }), (0, _jsxToObj2.default)(_Polygon2.default, {
    color: pc[1],
    points: [[x + dx, y, z], [x + dx, y + dy, z], [x + dx, y + dy, z + dz], [x + dx, y, z + dz]]
  }), (0, _jsxToObj2.default)(_Polygon2.default, {
    color: pc[2],
    points: [[x, y, z + dz], [x, y + dy, z + dz], [x + dx, y + dy, z + dz], [x + dx, y, z + dz]]
  }), (0, _jsxToObj2.default)(_Polygon2.default, {
    color: pc[3],
    points: [[x, y, z], [x + dx, y, z], [x + dx, y + dy, z], [x, y + dy, z]]
  }), (0, _jsxToObj2.default)(_Polygon2.default, {
    color: pc[4],
    points: [[x, y, z], [x, y, z + dz], [x, y + dy, z + dz], [x, y + dy, z]]
  }), (0, _jsxToObj2.default)(_Polygon2.default, {
    color: pc[5],
    points: [[x, y, z], [x + dx, y, z], [x + dx, y, z + dz], [x, y, z + dz]]
  })];
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

// Takes two polygons and returns a number dictating which should be rendered first
// This function is a callback for Array#sort()
exports.default = function (_ref, _ref2) {
  var a = _ref.points;
  var b = _ref2.points;

  // A "point sum" of a point is the sum of the point's components
  // It is used to determine the render order of the polygons
  var aPointSums = a.map(function (_ref3) {
    var _ref4 = _slicedToArray(_ref3, 3),
        x = _ref4[0],
        y = _ref4[1],
        z = _ref4[2];

    return x + y + z;
  });
  var bPointSums = b.map(function (_ref5) {
    var _ref6 = _slicedToArray(_ref5, 3),
        x = _ref6[0],
        y = _ref6[1],
        z = _ref6[2];

    return x + y + z;
  });

  // Sort in descending order
  aPointSums.sort(function (a, b) {
    return b - a;
  });
  bPointSums.sort(function (a, b) {
    return b - a;
  });

  // Starting with the largest point sum of each polygon, compare them
  // If they are equal, then compare the next greatest, and so on
  var i = 0;
  while (i < aPointSums.length && i < bPointSums.length) {
    var diff = aPointSums[i] - bPointSums[i];

    if (diff !== 0) {
      return diff;
    }

    i = i + 1;
  }

  return bPointSums.length - aPointSums.length;
};

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })
/******/ ]);