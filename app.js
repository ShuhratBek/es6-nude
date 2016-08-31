/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _home = __webpack_require__(1);
	
	var _home2 = _interopRequireDefault(_home);
	
	var _about = __webpack_require__(6);
	
	var _about2 = _interopRequireDefault(_about);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var routes = {
	    '/': function _() {
	        var homePage = new _home2.default();
	        document.body.innerHTML = homePage.render();
	    },
	    '/about': function about() {
	        var aboutPage = new _about2.default();
	        document.body.innerHTML = aboutPage.render();
	    }
	};
	
	var router = Router(routes);
	router.init();
	router.setRoute('/');

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _navbar = __webpack_require__(2);
	
	var _navbar2 = _interopRequireDefault(_navbar);
	
	var _main = __webpack_require__(3);
	
	var _main2 = _interopRequireDefault(_main);
	
	var _features = __webpack_require__(4);
	
	var _features2 = _interopRequireDefault(_features);
	
	var _newsletter = __webpack_require__(5);
	
	var _newsletter2 = _interopRequireDefault(_newsletter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var HomePageController = function () {
	    function HomePageController() {
	        _classCallCheck(this, HomePageController);
	
	        this.navBar = new _navbar2.default();
	        this.mainSection = new _main2.default();
	        this.featuresSection = new _features2.default();
	        this.newsletterSection = new _newsletter2.default();
	    }
	
	    _createClass(HomePageController, [{
	        key: 'render',
	        value: function render() {
	            return '\n        ' + this.navBar.render() + '\n        <hr>\n        ' + this.mainSection.render() + '\n        ' + this.featuresSection.render() + '\n        ' + this.newsletterSection.render() + '\n        ';
	        }
	    }]);
	
	    return HomePageController;
	}();
	
	exports.default = HomePageController;

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var NavBar = function () {
	    function NavBar() {
	        _classCallCheck(this, NavBar);
	    }
	
	    _createClass(NavBar, [{
	        key: "render",
	        value: function render() {
	            return "\n        <div class=\"row\" style=\"margin-top: 20px;\">\n            <div class=\"col-sm-12 text-center\">\n                <a href=\"#/\">Home</a>\n                <a href=\"#/about\">About</a>\n            </div>\n        </div>\n        ";
	        }
	    }]);
	
	    return NavBar;
	}();
	
	exports.default = NavBar;

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var MainSection = function () {
	    function MainSection() {
	        _classCallCheck(this, MainSection);
	    }
	
	    _createClass(MainSection, [{
	        key: "render",
	        value: function render() {
	            return "\n        <div class=\"row\">\n            <div class=\"col-sm-12 text-center\">\n                <h1>Main Section</h1>\n            </div>\n        </div>\n        <hr>\n        ";
	        }
	    }]);
	
	    return MainSection;
	}();
	
	exports.default = MainSection;

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var FeaturesSection = function () {
	    function FeaturesSection() {
	        _classCallCheck(this, FeaturesSection);
	
	        var request = new Request('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=f0685eed837242f6842e7948796dcafa', {
	            method: 'GET'
	        });
	        fetch(request).then(function (response) {
	            this.features = response.json();
	        });
	    }
	
	    _createClass(FeaturesSection, [{
	        key: 'renderFeatureRows',
	        value: function renderFeatureRows() {
	            return this.features.map(function (feature) {
	                return '\n            <div class="row text-center">\n                <div class="col-sm-12">\n                    <h4>' + feature.section + '</h4>\n                    <p>' + feature.description + '</p>\n                    <p>' + feature.image + '</p>\n                </div>\n            </div>\n            ';
	            }).join('');
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return '\n        <section class="features-section">\n            <h1 class="text-center">Features Section</h1>\n            ' + this.renderFeatureRows() + '\n        </section>\n        <hr>\n        ';
	        }
	    }]);
	
	    return FeaturesSection;
	}();
	
	exports.default = FeaturesSection;

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var NewsletterSection = function () {
	    function NewsletterSection() {
	        _classCallCheck(this, NewsletterSection);
	    }
	
	    _createClass(NewsletterSection, [{
	        key: "render",
	        value: function render() {
	            return "\n        <section class=\"newsletter-section\">\n            <div class=\"row\">\n                <div class=\"col-sm-12 text-center\">\n                    <h1>Newsletter Section</h1>\n                </div>\n            </div>\n        </section>\n        <hr>\n        ";
	        }
	    }]);
	
	    return NewsletterSection;
	}();
	
	exports.default = NewsletterSection;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _navbar = __webpack_require__(2);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var AboutPageController = function () {
	    function AboutPageController() {
	        _classCallCheck(this, AboutPageController);
	
	        this.navBar = new _navbar.NavBar();
	    }
	
	    _createClass(AboutPageController, [{
	        key: 'render',
	        value: function render() {
	            return '\n        ' + this.navBar.render() + '\n        <hr>\n        <h1 class="text-center">About Us</h1>\n        ';
	        }
	    }]);
	
	    return AboutPageController;
	}();
	
	exports.default = AboutPageController;

/***/ }
/******/ ]);
//# sourceMappingURL=app.js.map