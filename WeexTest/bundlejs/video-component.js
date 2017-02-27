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

	;__weex_define__("@weex-component/92cfab4c6e406e42696544d050b2dd11", [], function(__weex_require__, exports, __weex_module__){

	;
	    __weex_module__.exports = {
	        data: function () {return {
	            state: '----',
	            src:'http://flv2.bn.netease.com/videolib3/1611/01/XGqSL5981/SD/XGqSL5981-mobile.mp4'
	        }},
	        methods: {
	            onstart: function() {
	                this.state = 'onstart';
	            },
	            onpause: function() {
	                this.state = 'onpause';
	            },
	            onfinish: function() {
	                this.state = 'onfinish';
	            },
	            onfail: function() {
	                this.state = 'onfail';
	            }
	        }
	    }

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "children": [
	    {
	      "type": "video",
	      "classList": [
	        "video"
	      ],
	      "attr": {
	        "src": "http://flv2.bn.netease.com/videolib3/1611/01/XGqSL5981/SD/XGqSL5981-mobile.mp4",
	        "autoPlay": "true",
	        "playStatus": "play"
	      },
	      "events": {
	        "start": "onstart",
	        "pause": "onpause",
	        "finish": "onfinish",
	        "fail": "onfail"
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "info"
	      ],
	      "attr": {
	        "value": function () {return this.state}
	      }
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "video": {
	    "width": 630,
	    "height": 350,
	    "marginTop": 60,
	    "marginLeft": 60
	  },
	  "info": {
	    "marginTop": 40,
	    "fontSize": 40,
	    "textAlign": "center"
	  }
	})
	})
	;__weex_bootstrap__("@weex-component/92cfab4c6e406e42696544d050b2dd11", {
	  "transformerVersion": "0.3.1"
	},undefined)

/***/ }
/******/ ]);