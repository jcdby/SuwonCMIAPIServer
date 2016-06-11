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

	'use strict';

	var _express = __webpack_require__(1);

	var _express2 = _interopRequireDefault(_express);

	var _APIs = __webpack_require__(2);

	var _APIs2 = _interopRequireDefault(_APIs);

	var _database = __webpack_require__(6);

	var _database2 = _interopRequireDefault(_database);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var app = (0, _express2.default)();

	// db.once('open', function() {
	//   // we're connected!
	//   console.log('db is connected!')

	//   mongoose.model("gallery",'gallery').find({}, function(err, items) {
	//     if (err) throw err;
	//             // object of all the users
	//      console.log(items);
	//   });

	// });

	//start router
	(0, _APIs2.default)(app);

	//port
	app.listen(10000, function () {
	  console.log('Example app listening on port 10000!');
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("express");

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _photoController = __webpack_require__(3);

	var _photoController2 = _interopRequireDefault(_photoController);

	var _express = __webpack_require__(1);

	var _express2 = _interopRequireDefault(_express);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var photo_contr = new _photoController2.default();

	module.exports = function (app) {

	    app.use(_express2.default.static('./src/public'));

	    //article apis
	    app.route('/articles/').all(function (req, res, next) {
	        console.log('article request is getted!');
	        next();
	    }).get(function (req, res, next) {
	        res.send('getting articles');
	    });

	    //photos apis
	    app.route('/photos/').all(function (req, res, next) {
	        console.log('photos are requested!');
	        next();
	    }).get(photo_contr.getMethod);

	    //Main page api
	    app.get('/', function (req, res) {
	        res.send('Welcom to Suwon CMI church!changing');
	    });
	};

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _gallery = __webpack_require__(4);

	var _gallery2 = _interopRequireDefault(_gallery);

	var _mongoose = __webpack_require__(5);

	var _mongoose2 = _interopRequireDefault(_mongoose);

	var _database = __webpack_require__(6);

	var _database2 = _interopRequireDefault(_database);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var photoController = function () {
	    function photoController() {
	        _classCallCheck(this, photoController);
	    }

	    _createClass(photoController, [{
	        key: 'getMethod',
	        value: function getMethod(req, res, next) {

	            _gallery2.default.find({}, function (err, items) {
	                if (err) throw err;
	                // object of all the users
	                res.json(items);
	            });
	        }
	    }]);

	    return photoController;
	}();

	exports.default = photoController;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _mongoose = __webpack_require__(5);

	var _mongoose2 = _interopRequireDefault(_mongoose);

	var _database = __webpack_require__(6);

	var _database2 = _interopRequireDefault(_database);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Schema = _mongoose2.default.Schema;

	var GallerySchema = new Schema({
	  _id: _mongoose2.default.Schema.Types.ObjectId,
	  no: String,
	  memo: String,
	  ip: String,
	  name: String,
	  email: String,
	  subject: String,
	  file_name1: String,
	  file_name2: String
	});

	var Gallery = _database2.default.getDB().model('gallery', GallerySchema, 'gallery');

	module.exports = Gallery;

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("mongoose");

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _mongoose = __webpack_require__(5);

	var _mongoose2 = _interopRequireDefault(_mongoose);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var database = function () {
	  function database() {
	    _classCallCheck(this, database);

	    this.db = _mongoose2.default.createConnection('mongodb://192.168.99.100:32781/swcmi');

	    this.getDB = this.getDB.bind(this);
	  }

	  _createClass(database, [{
	    key: 'getDB',
	    value: function getDB() {
	      return this.db;
	    }
	  }]);

	  return database;
	}();

	exports.default = new database();

/***/ }
/******/ ]);