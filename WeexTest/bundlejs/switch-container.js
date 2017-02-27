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

	;__weex_define__("@weex-component/df740741f3e16586c1d02aa99ab9d597", [], function(__weex_require__, exports, __weex_module__){

	;
	    __weex_module__.exports = {
	        data: function () {return {
	            checked: ''
	        }},
	        methods: {
	          onchange: function(event) {
	              this.checked = event.value;
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
	        "example"
	      ],
	      "children": [
	        {
	          "type": "text",
	          "classList": [
	            "label"
	          ],
	          "attr": {
	            "value": "normal"
	          }
	        },
	        {
	          "type": "switch"
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "classList": [
	        "example"
	      ],
	      "children": [
	        {
	          "type": "text",
	          "classList": [
	            "label"
	          ],
	          "attr": {
	            "value": "checked"
	          }
	        },
	        {
	          "type": "switch",
	          "attr": {
	            "checked": "true"
	          }
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "classList": [
	        "example"
	      ],
	      "children": [
	        {
	          "type": "text",
	          "classList": [
	            "label"
	          ],
	          "attr": {
	            "value": "disabled"
	          }
	        },
	        {
	          "type": "switch",
	          "attr": {
	            "disabled": "true",
	            "checked": "true"
	          }
	        },
	        {
	          "type": "switch",
	          "attr": {
	            "disabled": "true"
	          }
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "classList": [
	        "example"
	      ],
	      "children": [
	        {
	          "type": "text",
	          "classList": [
	            "label"
	          ],
	          "attr": {
	            "value": "onchange"
	          }
	        },
	        {
	          "type": "switch",
	          "events": {
	            "change": "onchange"
	          }
	        },
	        {
	          "type": "text",
	          "classList": [
	            "info"
	          ],
	          "attr": {
	            "value": function () {return this.checked}
	          }
	        }
	      ]
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "example": {
	    "flexDirection": "row",
	    "justifyContent": "flex-start",
	    "marginTop": 60
	  },
	  "label": {
	    "fontSize": 40,
	    "lineHeight": 60,
	    "width": 350,
	    "color": "#666666",
	    "textAlign": "right",
	    "marginRight": 20
	  },
	  "info": {
	    "fontSize": 30,
	    "lineHeight": 60,
	    "color": "#BBBBBB",
	    "marginLeft": 10
	  }
	})
	})
	;__weex_bootstrap__("@weex-component/df740741f3e16586c1d02aa99ab9d597", {
	  "transformerVersion": "0.3.1"
	},undefined)

/***/ }
/******/ ]);