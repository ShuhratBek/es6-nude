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
	
	var _home = __webpack_require__(12);
	
	var _home2 = _interopRequireDefault(_home);
	
	var _stories = __webpack_require__(11);
	
	var _stories2 = _interopRequireDefault(_stories);
	
	var _about = __webpack_require__(13);
	
	var _about2 = _interopRequireDefault(_about);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var API_URL = "https://api.nytimes.com/svc/topstories/v2/";
	var API_KEY = 'f0685eed837242f6842e7948796dcafa';
	
	var routes = {
	    '/': function _() {
	        var homePage = new _home2.default();
	        document.body.innerHTML = homePage.render();
	    },
	    '/stories': {
	        '/:section': {
	            on: function on(section) {
	                var request = new Request("" + API_URL + section + ".json?api-key=" + API_KEY, {
	                    method: 'GET'
	                });
	                fetch(request).then(function (response) {
	                    if (response.status >= 200 && response.status < 300) {
	                        return Promise.resolve(response);
	                    } else {
	                        return Promise.reject(new Error(response.statusText));
	                    }
	                }).then(function (response) {
	                    return response.json();
	                }).then(function (data) {
	                    var storiesPage = new _stories2.default(data);
	                    document.body.innerHTML = storiesPage.render();
	                }).catch(function (err) {
	                    // Error :(
	                });
	            }
	        }
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
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
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
	      return "\n            <nav class=\"navbar navbar-inverse navbar-fixed-top\">\n              <div class=\"container-fluid\">\n                <div class=\"navbar-header\">\n                  <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" \n                    data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n                    <span class=\"sr-only\">Toggle navigation</span>\n                    <span class=\"icon-bar\"></span>\n                    <span class=\"icon-bar\"></span>\n                    <span class=\"icon-bar\"></span>\n                  </button>\n                  <a class=\"navbar-brand\" href=\"#\">ES6-Nude</a>\n                </div>\n            \n                <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n                  <ul class=\"nav navbar-nav navbar-right\">\n                    <li><a href=\"#/\">Home</a></li>\n                    <li><a href=\"#/stories/home\">Stories</a></li>\n                    <li><a href=\"#/about\">About</a></li>\n                  </ul>\n                </div>\n              </div>\n            </nav>\n        ";
	    }
	  }]);
	
	  return NavBar;
	}();
	
	exports.default = NavBar;

/***/ },
/* 8 */,
/* 9 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var SectionBar = function () {
	    function SectionBar() {
	        _classCallCheck(this, SectionBar);
	
	        this.sections = ['home', 'opinion', 'world', 'national', 'politics', 'upshot', 'nyregion', 'business', 'technology', 'science', 'health', 'sports', 'arts', 'books', 'movies', 'theater', 'sundayreview', 'fashion', 'tmagazine', 'food', 'travel'];
	    }
	
	    _createClass(SectionBar, [{
	        key: 'renderSection',
	        value: function renderSection() {
	            return this.sections.map(function (section) {
	                return '<a href="#/stories/' + section + '" class="list-group-item text-capitalize">' + section + '</a>';
	            }).join('');
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return '\n            <div class="list-group">\n              ' + this.renderSection() + '\n            </div>';
	        }
	    }]);
	
	    return SectionBar;
	}();
	
	exports.default = SectionBar;

/***/ },
/* 10 */,
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _navbar = __webpack_require__(7);
	
	var _navbar2 = _interopRequireDefault(_navbar);
	
	var _sectionBar = __webpack_require__(9);
	
	var _sectionBar2 = _interopRequireDefault(_sectionBar);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var StoriesController = function () {
	    function StoriesController(stories) {
	        _classCallCheck(this, StoriesController);
	
	        this.navBar = new _navbar2.default();
	        this.sectionBar = new _sectionBar2.default();
	        this.stories = stories;
	    }
	
	    _createClass(StoriesController, [{
	        key: 'renderStories',
	        value: function renderStories() {
	            return this.stories.results.map(function (story) {
	                return '<h3>' + story.title + '</h3>';
	            }).join('');
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return '\n        ' + this.navBar.render() + '\n        <div class="container-fluid">\n            <div class="row">\n                <div class="col-md-3">\n                    ' + this.sectionBar.render() + '\n                </div>\n                <div class="col-md-9">\n                    <h1 class="text-uppercase">' + this.stories.section + '</h1>\n                    ' + this.renderStories() + '\n                </div>\n            </div>\n        </div>\n        ';
	        }
	    }]);
	
	    return StoriesController;
	}();
	
	exports.default = StoriesController;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _navbar = __webpack_require__(7);
	
	var _navbar2 = _interopRequireDefault(_navbar);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var HomeController = function () {
	    function HomeController() {
	        _classCallCheck(this, HomeController);
	
	        this.navBar = new _navbar2.default();
	    }
	
	    _createClass(HomeController, [{
	        key: 'render',
	        value: function render() {
	            return '\n        ' + this.navBar.render() + '\n        <div class="container-fluid">\n            <div class="jumbotron">\n              <h1>Welcome to ES6-Nude!</h1>\n              <p>SPA without framework</p>\n              <p><a class="btn btn-primary btn-lg" href="#/stories/home" role="button">Stories</a></p>\n            </div>\n        </div>\n        ';
	        }
	    }]);
	
	    return HomeController;
	}();
	
	exports.default = HomeController;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _navbar = __webpack_require__(7);
	
	var _navbar2 = _interopRequireDefault(_navbar);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var AboutController = function () {
	    function AboutController() {
	        _classCallCheck(this, AboutController);
	
	        this.navBar = new _navbar2.default();
	    }
	
	    _createClass(AboutController, [{
	        key: 'render',
	        value: function render() {
	            return '\n        ' + this.navBar.render() + '\n        <h1 class="text-center">About Us</h1>\n        ';
	        }
	    }]);
	
	    return AboutController;
	}();
	
	exports.default = AboutController;

/***/ }
/******/ ]);
//# sourceMappingURL=app.js.map