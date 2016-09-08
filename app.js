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
	
	var _stories = __webpack_require__(5);
	
	var _stories2 = _interopRequireDefault(_stories);
	
	var _about = __webpack_require__(7);
	
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
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _baseClass = __webpack_require__(2);
	
	var _baseClass2 = _interopRequireDefault(_baseClass);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var HomeController = function (_BaseClass) {
	    _inherits(HomeController, _BaseClass);
	
	    function HomeController() {
	        _classCallCheck(this, HomeController);
	
	        var _this = _possibleConstructorReturn(this, (HomeController.__proto__ || Object.getPrototypeOf(HomeController)).call(this));
	
	        _this.template = '\n        <div class="container-fluid">\n            <div class="jumbotron">\n              <h1>Welcome to ES6-Nude!</h1>\n              <p>SPA without framework</p>\n              <p><a class="btn btn-primary btn-lg" href="#/stories/home" role="button">Stories</a></p>\n            </div>\n        </div>';
	        return _this;
	    }
	
	    return HomeController;
	}(_baseClass2.default);
	
	exports.default = HomeController;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _navbar = __webpack_require__(3);
	
	var _navbar2 = _interopRequireDefault(_navbar);
	
	var _footer = __webpack_require__(4);
	
	var _footer2 = _interopRequireDefault(_footer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var BaseClass = function () {
	    function BaseClass() {
	        _classCallCheck(this, BaseClass);
	
	        this.navBar = new _navbar2.default();
	        this.footer = new _footer2.default();
	        this.template = '';
	    }
	
	    _createClass(BaseClass, [{
	        key: 'render',
	        value: function render() {
	            return '\n        ' + this.navBar.render() + '\n        ' + this.template + '\n        ' + this.footer.render();
	        }
	    }]);
	
	    return BaseClass;
	}();
	
	exports.default = BaseClass;

/***/ },
/* 3 */
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
/* 4 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Footer = function () {
	    function Footer() {
	        _classCallCheck(this, Footer);
	    }
	
	    _createClass(Footer, [{
	        key: "render",
	        value: function render() {
	            return "\n            <div class=\"container text-center\">\n                Build with ♥ by the ShuhratBek ©2016\n            </div>\n        ";
	        }
	    }]);
	
	    return Footer;
	}();
	
	exports.default = Footer;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _baseClass = __webpack_require__(2);
	
	var _baseClass2 = _interopRequireDefault(_baseClass);
	
	var _sectionBar = __webpack_require__(6);
	
	var _sectionBar2 = _interopRequireDefault(_sectionBar);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var StoriesController = function (_BaseClass) {
	    _inherits(StoriesController, _BaseClass);
	
	    function StoriesController(stories) {
	        _classCallCheck(this, StoriesController);
	
	        var _this = _possibleConstructorReturn(this, (StoriesController.__proto__ || Object.getPrototypeOf(StoriesController)).call(this));
	
	        _this.sectionBar = new _sectionBar2.default(stories.section);
	        _this.stories = stories;
	        _this.template = '\n            <div class="container-fluid">\n                <div class="row">\n                    <div class="col-md-3">\n                        ' + _this.sectionBar.render() + '\n                    </div>\n                    <div class="col-md-9">\n                        <h1 class="text-uppercase">' + _this.stories.section + ' <span class="badge badge-default">' + _this.stories.num_results + '</span></h1>\n                            <div class="masonry-row">\n                                ' + _this.renderStories() + '\n                            </div>\n                    </div>\n                </div>\n            </div>';
	        return _this;
	    }
	
	    _createClass(StoriesController, [{
	        key: 'getThumbnail',
	        value: function getThumbnail(media) {
	            if (media.length > 0) {
	                var image = media.find(function (x) {
	                    return x.format === 'superJumbo';
	                });
	                return '<img src="' + image.url + '" alt="' + image.caption + '" class="img-responsive">';
	            }
	            return '';
	        }
	    }, {
	        key: 'renderStories',
	        value: function renderStories() {
	            var _this2 = this;
	
	            return this.stories.results.map(function (story) {
	                return '\n            <div class="item">\n                <div class="wrapper thumbnail">\n                    ' + _this2.getThumbnail(story.multimedia) + '\n                    <div class="caption">\n                        <h4>' + story.title + '</h4>\n                        <em class="text-muted">' + story.byline + '</em>\n                        <p>' + story.abstract + '</p>\n                        <a href="' + story.url + '" target="_blank" class="btn btn-primary btn-block" role="button">Read more...</a>\n                    </div>\n                </div>\n            </div>';
	            }).join('');
	        }
	    }]);
	
	    return StoriesController;
	}(_baseClass2.default);
	
	exports.default = StoriesController;

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var SectionBar = function () {
	    function SectionBar(section) {
	        _classCallCheck(this, SectionBar);
	
	        this.sections = ['home', 'opinion', 'world', 'national', 'politics', 'upshot', 'nyregion', 'business', 'technology', 'science', 'health', 'sports', 'arts', 'books', 'movies', 'theater', 'sundayreview', 'fashion', 'tmagazine', 'food', 'travel'];
	        this.section = section;
	    }
	
	    _createClass(SectionBar, [{
	        key: 'renderSection',
	        value: function renderSection() {
	            var _this = this;
	
	            return this.sections.map(function (section) {
	                return '<a href="#/stories/' + section + '" class="list-group-item text-capitalize' + (section === _this.section ? ' active' : '') + '">' + section + '</a>';
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
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _baseClass = __webpack_require__(2);
	
	var _baseClass2 = _interopRequireDefault(_baseClass);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var AboutController = function (_BaseClass) {
	    _inherits(AboutController, _BaseClass);
	
	    function AboutController() {
	        _classCallCheck(this, AboutController);
	
	        var _this = _possibleConstructorReturn(this, (AboutController.__proto__ || Object.getPrototypeOf(AboutController)).call(this));
	
	        _this.template = '\n            <h1 class="text-center">About Us</h1>\n        ';
	        return _this;
	    }
	
	    return AboutController;
	}(_baseClass2.default);
	
	exports.default = AboutController;

/***/ }
/******/ ]);
//# sourceMappingURL=app.js.map