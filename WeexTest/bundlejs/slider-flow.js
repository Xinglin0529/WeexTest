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

	;__weex_define__("@weex-component/fd416dbd6e6c1641024f5b6f860f4d78", [], function(__weex_require__, exports, __weex_module__){
	__webpack_require__(1);

	;
	    __weex_module__.exports = {
	        data: function () {return {
	            imageList: [
	                { src: 'https://gd2.alicdn.com/bao/uploaded/i2/T14H1LFwBcXXXXXXXX_!!0-item_pic.jpg'},
	                { src: 'https://gd1.alicdn.com/bao/uploaded/i1/TB1PXJCJFXXXXciXFXXXXXXXXXX_!!0-item_pic.jpg'},
	                { src: 'https://gd3.alicdn.com/bao/uploaded/i3/TB1x6hYLXXXXXazXVXXXXXXXXXX_!!0-item_pic.jpg'}
	            ]
	        }},
	        methods: {
	            onchange: function(action) {
	                let event = __weex_require__('@weex-module/event');
	//        event.showAlert('提示', `点击了${action.index}`);
	            }
	        }
	    }

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "children": [
	    {
	      "type": "slider",
	      "classList": [
	        "slider"
	      ],
	      "attr": {
	        "interval": "3000",
	        "autoPlay": "true"
	      },
	      "events": {
	        "change": "onchange"
	      },
	      "children": [
	        {
	          "type": "slider-item",
	          "repeat": function () {return this.imageList}
	        },
	        {
	          "type": "indicator",
	          "classList": [
	            "indicator"
	          ]
	        }
	      ]
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "indicator": {
	    "position": "absolute",
	    "top": 150,
	    "left": 200,
	    "height": 50,
	    "width": 300,
	    "itemColor": "green",
	    "itemSelectedColor": "red",
	    "itemSize": 10
	  },
	  "slider": {
	    "marginLeft": 20,
	    "marginRight": 20,
	    "marginTop": 200,
	    "height": 200,
	    "borderWidth": 1,
	    "borderColor": "#41b883"
	  }
	})
	})
	;__weex_bootstrap__("@weex-component/fd416dbd6e6c1641024f5b6f860f4d78", {
	  "transformerVersion": "0.3.1"
	},undefined)

/***/ },
/* 1 */
/***/ function(module, exports) {

	;__weex_define__("@weex-component/slider-item", [], function(__weex_require__, exports, __weex_module__){

	;
	    __weex_module__.exports = {
	        data: function () {return {
	            src: ''
	        }}
	    };

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "image",
	  "classList": [
	    "image"
	  ],
	  "attr": {
	    "resize": "contain",
	    "src": function () {return this.src}
	  }
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "image": {
	    "flex": 1
	  }
	})
	})

/***/ }
/******/ ]);