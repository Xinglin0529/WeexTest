/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1)
	var __weex_template__ = __webpack_require__(5)
	var __weex_style__ = __webpack_require__(6)
	var __weex_script__ = __webpack_require__(7)

	__weex_define__('@weex-component/bfb0c893dd9292110cf7d9d26b4d2531', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})

	__weex_bootstrap__('@weex-component/bfb0c893dd9292110cf7d9d26b4d2531',undefined,undefined)

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(2)
	var __weex_style__ = __webpack_require__(3)
	var __weex_script__ = __webpack_require__(4)

	__weex_define__('@weex-component/list-container', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "list",
	  "classList": [
	    "list"
	  ],
	  "attr": {
	    "loadmoreoffset": "64"
	  },
	  "children": [
	    {
	      "type": "refresh",
	      "classList": [
	        "refresh"
	      ],
	      "events": {
	        "refresh": "refresh"
	      },
	      "children": [
	        {
	          "type": "text",
	          "classList": [
	            "indicator"
	          ],
	          "shown": function () {return (this.refresh==='hide')},
	          "attr": {
	            "value": "pullingdown"
	          }
	        }
	      ]
	    },
	    {
	      "type": "cell",
	      "append": "tree",
	      "repeat": {
	        "expression": function () {return this.lists},
	        "value": "num"
	      },
	      "children": [
	        {
	          "type": "div",
	          "classList": [
	            "panel"
	          ],
	          "children": [
	            {
	              "type": "text",
	              "classList": [
	                "text"
	              ],
	              "attr": {
	                "value": function () {return this.num}
	              }
	            }
	          ]
	        }
	      ]
	    },
	    {
	      "type": "loading",
	      "classList": [
	        "loading"
	      ],
	      "events": {
	        "loading": "loadmore"
	      },
	      "children": [
	        {
	          "type": "text",
	          "classList": [
	            "indicator"
	          ],
	          "attr": {
	            "value": "loading..."
	          }
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = {
	  "list": {
	    "flex": 1,
	    "marginTop": 128
	  },
	  "panel": {
	    "width": 600,
	    "height": 250,
	    "marginLeft": 75,
	    "marginTop": 35,
	    "marginBottom": 35,
	    "flexDirection": "column",
	    "justifyContent": "center",
	    "borderWidth": 2,
	    "borderStyle": "solid",
	    "borderColor": "rgb(162,217,192)",
	    "backgroundColor": "#FFFF00"
	  },
	  "text": {
	    "fontSize": 50,
	    "textAlign": "center",
	    "color": "#FF0000",
	    "height": 60,
	    "justifyContent": "center"
	  },
	  "refresh": {
	    "width": 750,
	    "height": 100,
	    "alignItems": "center",
	    "display": "flex"
	  },
	  "loading": {
	    "justifyContent": "center"
	  },
	  "indicator": {
	    "color": "#888888",
	    "fontSize": 42,
	    "paddingTop": 20,
	    "paddingBottom": 20,
	    "textAlign": "center"
	  },
	  "loading-indicator": {
	    "height": 120,
	    "width": 120,
	    "color": "#889967"
	  }
	}

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	module.exports = {
	    data: function () {return {
	        lists: [1, 2, 3, 4, 5],
	        refresh: 'hide',
	        loading: 'hide'
	    }},
	    methods: {
	        refresh: function refresh() {
	            this.refresh = 'show';
	            var event = __weex_require__('@weex-module/event');
	            event.showAlert('提示', 'refresh');
	        },
	        loadmore: function loadmore(event) {
	            for (var i = 0; i < 5; i++) {
	                this.lists.push(i);
	            }
	            var alert = __weex_require__('@weex-module/event');
	            alert.showAlert('提示', '\u6570\u91CF' + this.lists.length);
	        }
	    }
	};}
	/* generated by weex-loader */


/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "list-container"
	}

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = {}

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){"use strict";}
	/* generated by weex-loader */


/***/ }
/******/ ]);