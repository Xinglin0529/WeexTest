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

	var __weex_template__ = __webpack_require__(1)
	var __weex_style__ = __webpack_require__(2)
	var __weex_script__ = __webpack_require__(3)

	__weex_define__('@weex-component/f2830a1a62caadefe38c5968184a70b6', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})

	__weex_bootstrap__('@weex-component/f2830a1a62caadefe38c5968184a70b6',undefined,undefined)

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "children": [
	    {
	      "type": "div",
	      "classList": [
	        "group"
	      ],
	      "children": [
	        {
	          "type": "input",
	          "classList": [
	            "input"
	          ],
	          "id": "input",
	          "attr": {
	            "type": "url",
	            "autofocus": "false",
	            "value": "https://m.taobao.com"
	          }
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "classList": [
	        "container"
	      ],
	      "children": [
	        {
	          "type": "text",
	          "classList": [
	            "button"
	          ],
	          "events": {
	            "click": "loadURL"
	          },
	          "attr": {
	            "value": "loadURL"
	          }
	        },
	        {
	          "type": "text",
	          "classList": [
	            "button"
	          ],
	          "events": {
	            "click": "reload"
	          },
	          "attr": {
	            "value": "reload"
	          }
	        }
	      ]
	    },
	    {
	      "type": "web",
	      "id": "webview",
	      "attr": {
	        "src": function () {return this.url}
	      },
	      "classList": [
	        "webview"
	      ],
	      "events": {
	        "pagestart": "start",
	        "pagefinish": "finish",
	        "error": "error"
	      }
	    }
	  ]
	}

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = {
	  "group": {
	    "flexDirection": "row",
	    "justifyContent": "space-between",
	    "marginTop": 128,
	    "height": 88
	  },
	  "container": {
	    "flexDirection": "row",
	    "justifyContent": "space-between",
	    "paddingTop": 15,
	    "paddingLeft": 15,
	    "paddingRight": 15
	  },
	  "input": {
	    "flex": 1,
	    "fontSize": 36,
	    "padding": 15,
	    "borderWidth": 2,
	    "borderStyle": "solid",
	    "borderColor": "#BBBBBB"
	  },
	  "button": {
	    "width": 225,
	    "textAlign": "center",
	    "backgroundColor": "#d3d3d3",
	    "paddingTop": 15,
	    "paddingBottom": 15,
	    "marginBottom": 30,
	    "fontSize": 30
	  },
	  "webview": {
	    "flex": 1,
	    "borderWidth": 2,
	    "borderStyle": "solid",
	    "borderColor": "#41B883"
	  }
	}

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	module.exports = {
	    data: function () {return {
	        url: 'https://m.alibaba.com'
	    }},
	    methods: {
	        loadURL: function loadURL(event) {
	            this.url = this.$el('input').value;
	            var webview = __weex_require__('@weex-module/webview');
	            webview.goBack(this.$el('webview'));
	        },
	        reload: function reload(event) {
	            var webview = __weex_require__('@weex-module/webview');
	            webview.reload(this.$el('webview'));
	        },
	        start: function start(event) {},
	        finish: function finish(event) {},
	        error: function error(event) {}
	    }
	};}
	/* generated by weex-loader */


/***/ }
/******/ ]);