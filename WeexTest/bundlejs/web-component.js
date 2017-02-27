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
/***/ function(module, exports) {

	;__weex_define__("@weex-component/eca54f7047ba0997a916945610d579ed", [], function(__weex_require__, exports, __weex_module__){

	;
	    __weex_module__.exports = {
	        data: function () {return {
	            url: 'https://m.alibaba.com'
	        }},
	        methods: {
	            loadURL(event) {
	                this.url = this.$refs.input.value;
	                const self = this;
	                setTimeout(function() {
	                    let webview = __weex_require__('@weex-module/webview');
	                    webview.goBack(self.el('webview'));
	                }, 10000);
	            },
	            reload(event) {
	                let webview = __weex_require__('@weex-module/webview');
	                webview.reload(this.el('webview'))
	            },
	            start(event) {
	            },
	            finish(event) {
	            },
	            error(event) {
	            }
	        }
	    }

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
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
	          "attr": {
	            "ref": "input",
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
	        "group"
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
	      "attr": {
	        "ref": "webview",
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
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "group": {
	    "flexDirection": "row",
	    "marginTop": 100
	  },
	  "input": {
	    "width": 600,
	    "fontSize": 36,
	    "paddingTop": 15,
	    "paddingBottom": 15,
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
	    "marginLeft": 75,
	    "width": 600,
	    "height": 750,
	    "borderWidth": 2,
	    "borderStyle": "solid",
	    "borderColor": "#41B883"
	  }
	})
	})
	;__weex_bootstrap__("@weex-component/eca54f7047ba0997a916945610d579ed", {
	  "transformerVersion": "0.3.1"
	},undefined)

/***/ }
/******/ ]);