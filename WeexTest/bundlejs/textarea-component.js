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

	;__weex_define__("@weex-component/fc0ce3878d7410e874dbc6b63a82da88", [], function(__weex_require__, exports, __weex_module__){

	;
	    __weex_module__.exports = {
	        methods: {
	            onchange(event) {
	                let event1 = __weex_require__('@weex-module/event');
	                event1.showAlert('onchange', `onchange:${event.value}`);
	            },
	            onblur(event) {
	                let event1 = __weex_require__('@weex-module/event');
	                event1.showAlert('onblur', `onblur:${event.value}`);
	            },
	            oninput(event) {
	                let event1 = __weex_require__('@weex-module/event');
	                event1.showAlert('oninput', `oninput:${event.value}`);
	            },
	            onfocus(event) {
	//                let event1 = __weex_require__('@weex-module/event');
	//                event1.showAlert('onfocus', `onfocus:${event.value}`);
	            }
	        }
	    }

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "children": [
	    {
	      "type": "textarea",
	      "classList": [
	        "textarea"
	      ],
	      "events": {
	        "change": "onchange",
	        "blur": "onblur",
	        "input": "oninput",
	        "focus": "onfocus"
	      }
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "textarea": {
	    "fontSize": 50,
	    "width": 650,
	    "marginTop": 200,
	    "marginLeft": 50,
	    "padding": 20,
	    "color": "#666666",
	    "borderWidth": 2,
	    "borderStyle": "solid",
	    "borderColor": "#41B880"
	  }
	})
	})
	;__weex_bootstrap__("@weex-component/fc0ce3878d7410e874dbc6b63a82da88", {
	  "transformerVersion": "0.3.1"
	},undefined)

/***/ }
/******/ ]);