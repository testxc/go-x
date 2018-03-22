/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/_angular@1.6.9@angular/angular.js":
/*!********************************************************!*\
  !*** ./node_modules/_angular@1.6.9@angular/angular.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/***/ }),

/***/ "./node_modules/_angular@1.6.9@angular/index.js":
/*!******************************************************!*\
  !*** ./node_modules/_angular@1.6.9@angular/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./angular */ \"./node_modules/_angular@1.6.9@angular/angular.js\");\nmodule.exports = angular;\n\n\n//# sourceURL=webpack:///./node_modules/_angular@1.6.9@angular/index.js?");

/***/ }),

/***/ "./node_modules/_sprintf-js@1.1.1@sprintf-js/src/sprintf.js":
/*!******************************************************************!*\
  !*** ./node_modules/_sprintf-js@1.1.1@sprintf-js/src/sprintf.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_RESULT__;/* global window, exports, define */\n\n!function() {\n    'use strict'\n\n    var re = {\n        not_string: /[^s]/,\n        not_bool: /[^t]/,\n        not_type: /[^T]/,\n        not_primitive: /[^v]/,\n        number: /[diefg]/,\n        numeric_arg: /[bcdiefguxX]/,\n        json: /[j]/,\n        not_json: /[^j]/,\n        text: /^[^\\x25]+/,\n        modulo: /^\\x25{2}/,\n        placeholder: /^\\x25(?:([1-9]\\d*)\\$|\\(([^\\)]+)\\))?(\\+)?(0|'[^$])?(-)?(\\d+)?(?:\\.(\\d+))?([b-gijostTuvxX])/,\n        key: /^([a-z_][a-z_\\d]*)/i,\n        key_access: /^\\.([a-z_][a-z_\\d]*)/i,\n        index_access: /^\\[(\\d+)\\]/,\n        sign: /^[\\+\\-]/\n    }\n\n    function sprintf(key) {\n        // `arguments` is not an array, but should be fine for this call\n        return sprintf_format(sprintf_parse(key), arguments)\n    }\n\n    function vsprintf(fmt, argv) {\n        return sprintf.apply(null, [fmt].concat(argv || []))\n    }\n\n    function sprintf_format(parse_tree, argv) {\n        var cursor = 1, tree_length = parse_tree.length, arg, output = '', i, k, match, pad, pad_character, pad_length, is_positive, sign\n        for (i = 0; i < tree_length; i++) {\n            if (typeof parse_tree[i] === 'string') {\n                output += parse_tree[i]\n            }\n            else if (Array.isArray(parse_tree[i])) {\n                match = parse_tree[i] // convenience purposes only\n                if (match[2]) { // keyword argument\n                    arg = argv[cursor]\n                    for (k = 0; k < match[2].length; k++) {\n                        if (!arg.hasOwnProperty(match[2][k])) {\n                            throw new Error(sprintf('[sprintf] property \"%s\" does not exist', match[2][k]))\n                        }\n                        arg = arg[match[2][k]]\n                    }\n                }\n                else if (match[1]) { // positional argument (explicit)\n                    arg = argv[match[1]]\n                }\n                else { // positional argument (implicit)\n                    arg = argv[cursor++]\n                }\n\n                if (re.not_type.test(match[8]) && re.not_primitive.test(match[8]) && arg instanceof Function) {\n                    arg = arg()\n                }\n\n                if (re.numeric_arg.test(match[8]) && (typeof arg !== 'number' && isNaN(arg))) {\n                    throw new TypeError(sprintf('[sprintf] expecting number but found %T', arg))\n                }\n\n                if (re.number.test(match[8])) {\n                    is_positive = arg >= 0\n                }\n\n                switch (match[8]) {\n                    case 'b':\n                        arg = parseInt(arg, 10).toString(2)\n                        break\n                    case 'c':\n                        arg = String.fromCharCode(parseInt(arg, 10))\n                        break\n                    case 'd':\n                    case 'i':\n                        arg = parseInt(arg, 10)\n                        break\n                    case 'j':\n                        arg = JSON.stringify(arg, null, match[6] ? parseInt(match[6]) : 0)\n                        break\n                    case 'e':\n                        arg = match[7] ? parseFloat(arg).toExponential(match[7]) : parseFloat(arg).toExponential()\n                        break\n                    case 'f':\n                        arg = match[7] ? parseFloat(arg).toFixed(match[7]) : parseFloat(arg)\n                        break\n                    case 'g':\n                        arg = match[7] ? String(Number(arg.toPrecision(match[7]))) : parseFloat(arg)\n                        break\n                    case 'o':\n                        arg = (parseInt(arg, 10) >>> 0).toString(8)\n                        break\n                    case 's':\n                        arg = String(arg)\n                        arg = (match[7] ? arg.substring(0, match[7]) : arg)\n                        break\n                    case 't':\n                        arg = String(!!arg)\n                        arg = (match[7] ? arg.substring(0, match[7]) : arg)\n                        break\n                    case 'T':\n                        arg = Object.prototype.toString.call(arg).slice(8, -1).toLowerCase()\n                        arg = (match[7] ? arg.substring(0, match[7]) : arg)\n                        break\n                    case 'u':\n                        arg = parseInt(arg, 10) >>> 0\n                        break\n                    case 'v':\n                        arg = arg.valueOf()\n                        arg = (match[7] ? arg.substring(0, match[7]) : arg)\n                        break\n                    case 'x':\n                        arg = (parseInt(arg, 10) >>> 0).toString(16)\n                        break\n                    case 'X':\n                        arg = (parseInt(arg, 10) >>> 0).toString(16).toUpperCase()\n                        break\n                }\n                if (re.json.test(match[8])) {\n                    output += arg\n                }\n                else {\n                    if (re.number.test(match[8]) && (!is_positive || match[3])) {\n                        sign = is_positive ? '+' : '-'\n                        arg = arg.toString().replace(re.sign, '')\n                    }\n                    else {\n                        sign = ''\n                    }\n                    pad_character = match[4] ? match[4] === '0' ? '0' : match[4].charAt(1) : ' '\n                    pad_length = match[6] - (sign + arg).length\n                    pad = match[6] ? (pad_length > 0 ? pad_character.repeat(pad_length) : '') : ''\n                    output += match[5] ? sign + arg + pad : (pad_character === '0' ? sign + pad + arg : pad + sign + arg)\n                }\n            }\n        }\n        return output\n    }\n\n    var sprintf_cache = Object.create(null)\n\n    function sprintf_parse(fmt) {\n        if (sprintf_cache[fmt]) {\n            return sprintf_cache[fmt]\n        }\n\n        var _fmt = fmt, match, parse_tree = [], arg_names = 0\n        while (_fmt) {\n            if ((match = re.text.exec(_fmt)) !== null) {\n                parse_tree.push(match[0])\n            }\n            else if ((match = re.modulo.exec(_fmt)) !== null) {\n                parse_tree.push('%')\n            }\n            else if ((match = re.placeholder.exec(_fmt)) !== null) {\n                if (match[2]) {\n                    arg_names |= 1\n                    var field_list = [], replacement_field = match[2], field_match = []\n                    if ((field_match = re.key.exec(replacement_field)) !== null) {\n                        field_list.push(field_match[1])\n                        while ((replacement_field = replacement_field.substring(field_match[0].length)) !== '') {\n                            if ((field_match = re.key_access.exec(replacement_field)) !== null) {\n                                field_list.push(field_match[1])\n                            }\n                            else if ((field_match = re.index_access.exec(replacement_field)) !== null) {\n                                field_list.push(field_match[1])\n                            }\n                            else {\n                                throw new SyntaxError('[sprintf] failed to parse named argument key')\n                            }\n                        }\n                    }\n                    else {\n                        throw new SyntaxError('[sprintf] failed to parse named argument key')\n                    }\n                    match[2] = field_list\n                }\n                else {\n                    arg_names |= 2\n                }\n                if (arg_names === 3) {\n                    throw new Error('[sprintf] mixing positional and named placeholders is not (yet) supported')\n                }\n                parse_tree.push(match)\n            }\n            else {\n                throw new SyntaxError('[sprintf] unexpected placeholder')\n            }\n            _fmt = _fmt.substring(match[0].length)\n        }\n        return sprintf_cache[fmt] = parse_tree\n    }\n\n    /**\n     * export to either browser or node.js\n     */\n    /* eslint-disable quote-props */\n    if (true) {\n        exports['sprintf'] = sprintf\n        exports['vsprintf'] = vsprintf\n    }\n    if (typeof window !== 'undefined') {\n        window['sprintf'] = sprintf\n        window['vsprintf'] = vsprintf\n\n        if (true) {\n            !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {\n                return {\n                    'sprintf': sprintf,\n                    'vsprintf': vsprintf\n                }\n            }).call(exports, __webpack_require__, exports, module),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))\n        }\n    }\n    /* eslint-enable quote-props */\n}()\n\n\n//# sourceURL=webpack:///./node_modules/_sprintf-js@1.1.1@sprintf-js/src/sprintf.js?");

/***/ }),

/***/ "./src/app/models/user.js":
/*!********************************!*\
  !*** ./src/app/models/user.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n\r\nmodule.exports = User;\r\n\r\nfunction User() {\r\n  this.uid = 0;\r\n  this.token = \"\";\r\n  this.gatewayIP = \"\";\r\n  this.gatewayPort = 0;\r\n}\r\n\r\nvar proto = User.prototype;\r\n\r\nproto.Login = function(data) {\r\n  console.log(\"user data = \", JSON.stringify(data));\r\n\r\n  this.uid = data.UID;\r\n  this.token = data.Token;\r\n  this.gatewayIP = data.LobbyAddr.split(\":\")[0];\r\n  this.gatewayPort = parseInt(data.LobbyAddr.split(\":\")[1]);\r\n\r\n  // 登录Gateway\r\n  this.gateway();\r\n};\r\n\r\nproto.gateway = function() {\r\n  alert('aaa');\r\n};\r\n\r\n\r\nvar u = new User()\r\n\r\nUser.initUser = function(app) {\r\n  app.factory('user', obj);\r\n  obj.$inject = [\r\n    '$rootScope'\r\n  ];\r\n\r\n  function obj($rootScope) {\r\n    return u;\r\n  }\r\n}\n\n//# sourceURL=webpack:///./src/app/models/user.js?");

/***/ }),

/***/ "./src/app/pages sync recursive ^\\.\\/.*\\.controller\\.js$":
/*!*****************************************************!*\
  !*** ./src/app/pages sync ^\.\/.*\.controller\.js$ ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./lobby.controller.js\": \"./src/app/pages/lobby.controller.js\",\n\t\"./login.controller.js\": \"./src/app/pages/login.controller.js\",\n\t\"./room.controller.js\": \"./src/app/pages/room.controller.js\",\n\t\"./stage.controller.js\": \"./src/app/pages/stage.controller.js\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\tvar module = __webpack_require__(id);\n\treturn module;\n}\nfunction webpackContextResolve(req) {\n\tvar id = map[req];\n\tif(!(id + 1)) { // check for number or string\n\t\tvar e = new Error('Cannot find module \"' + req + '\".');\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn id;\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/app/pages sync recursive ^\\\\.\\\\/.*\\\\.controller\\\\.js$\";\n\n//# sourceURL=webpack:///./src/app/pages_sync_^\\.\\/.*\\.controller\\.js$?");

/***/ }),

/***/ "./src/app/pages/lobby.controller.js":
/*!*******************************************!*\
  !*** ./src/app/pages/lobby.controller.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n\r\nvar Page = __webpack_require__(/*! ./page.js */ \"./src/app/pages/page.js\")\r\n\r\nmodule.exports = PageLobby\r\n\r\nfunction PageLobby() {}\r\n\r\nPageLobby.onController = function($scope, $http, user, pageEvent) {\r\n  $scope.click = function() {\r\n    Page.showPage(pageEvent, 'room');\r\n  };\r\n}\n\n//# sourceURL=webpack:///./src/app/pages/lobby.controller.js?");

/***/ }),

/***/ "./src/app/pages/login.controller.js":
/*!*******************************************!*\
  !*** ./src/app/pages/login.controller.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n\r\nvar Page = __webpack_require__(/*! ./page.js */ \"./src/app/pages/page.js\")\r\n__webpack_require__(/*! sprintf-js */ \"./node_modules/_sprintf-js@1.1.1@sprintf-js/src/sprintf.js\")\r\n\r\nmodule.exports = PageLogin\r\n\r\nfunction PageLogin() {}\r\n\r\nPageLogin.onController = function($scope, $http, user, pageEvent) {\r\n  $scope.enable = true;\r\n  $scope.txtaccount = 'test1';\r\n  $scope.txtpassword = '123456';\r\n  $scope.txtip = '127.0.0.1';\r\n  $scope.txtport = 8080;\r\n  $scope.click = function() {\r\n    onClick($scope, $http);\r\n  };\r\n\r\n  function onClick($scope, $http) {\r\n    console.log('txtaccount:', $scope.txtaccount);\r\n    console.log('txtpassword:', $scope.txtpassword);\r\n    console.log('txtip:', $scope.txtip);\r\n    console.log('txtport:', $scope.txtport);\r\n\r\n    if ($scope.txtaccount == \"\") {\r\n      alert(\"账号名不能为空！\");\r\n      return;\r\n    }\r\n    if ($scope.txtpassword == \"\") {\r\n      alert(\"密码不能为空！\");\r\n      return;\r\n    }\r\n\r\n    var UserLoginReq = {\r\n      \"User\": $scope.txtaccount,\r\n      \"Password\": $scope.txtpassword\r\n    };\r\n    var data = JSON.stringify(UserLoginReq);\r\n    var url = sprintf(\"http://%s:%s/login\", $scope.txtip, $scope.txtport);\r\n\r\n    $http({\r\n      url: url,\r\n      method: 'POST',\r\n      data: data,\r\n      async: false,\r\n      headers: {\r\n        \"Access-Control-Allow-Origin\": \"*\",\r\n        'Access-Control-Allow-Methods': 'POST',\r\n        'Access-Control-Allow-Headers': 'Accept,X-Custom-Header,X-Requested-With,Content-Type,Origin'\r\n      }\r\n    }).then(function success(response) {\r\n      console.log(\"login to Login success!\");\r\n      console.log('response:', response);\r\n      user.Login(response.data)\r\n    }, function fail(response) {\r\n      console.log(\"login to Login fail!\");\r\n      console.log('response:', response);\r\n      alert(\"login fail.\\nresponse:\" + JSON.stringify(response));\r\n    });\r\n  }\r\n}\n\n//# sourceURL=webpack:///./src/app/pages/login.controller.js?");

/***/ }),

/***/ "./src/app/pages/page.js":
/*!*******************************!*\
  !*** ./src/app/pages/page.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n\r\nvar Util = __webpack_require__(/*! ../util/util.js */ \"./src/app/util/util.js\")\r\n\r\nmodule.exports = Page\r\n\r\nfunction Page() {}\r\n\r\nPage.loadPage = function(app, page) {\r\n\r\n  app.directive('runoob' + Util.toUpper(page), function() {\r\n    return {\r\n      templateUrl: 'app/pages/' + page + '.html'\r\n    };\r\n  });\r\n\r\n  var pageX = __webpack_require__(\"./src/app/pages sync recursive ^\\\\.\\\\/.*\\\\.controller\\\\.js$\")(\"./\" + page + '.controller.js');\r\n\r\n  var onLoad = pageX.onLoad;\r\n  if (onLoad != null) {\r\n    onLoad(app);\r\n  }\r\n\r\n  function ctrl($scope, $http, user, pageEvent) {\r\n    pageEvent.on('showPage', function(event, data) {\r\n      $scope.enable = (data == page);\r\n    }, $scope);\r\n    $scope.enable = false;\r\n    onController($scope, $http, user, pageEvent);\r\n  }\r\n  var onController = pageX.onController;\r\n  if (onController != null) {\r\n    app.controller(page, ctrl);\r\n    ctrl.$inject = [\r\n      '$scope',\r\n      '$http',\r\n      'user',\r\n      'pageEvent'\r\n    ];\r\n  }\r\n}\r\n\r\nPage.initPageEventGenerator = function(app) {\r\n  app.factory('pageEvent', obj);\r\n\r\n  obj.$inject = [\r\n    '$rootScope'\r\n  ];\r\n\r\n  function obj($rootScope) {\r\n    var msgBus = {};\r\n    msgBus.emit = function(msg, data) {\r\n      data = data || {};\r\n      $rootScope.$emit(msg, data);\r\n    };\r\n    msgBus.on = function(msg, func, scope) {\r\n      var unbind = $rootScope.$on(msg, func);\r\n      if (scope) {\r\n        scope.$on('$destroy', unbind);\r\n      }\r\n    };\r\n    return msgBus;\r\n  }\r\n}\r\n\r\nPage.showPage = function(pageEvent, page) {\r\n  pageEvent.emit('showPage', page);\r\n}\n\n//# sourceURL=webpack:///./src/app/pages/page.js?");

/***/ }),

/***/ "./src/app/pages/room.controller.js":
/*!******************************************!*\
  !*** ./src/app/pages/room.controller.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n\r\nvar Page = __webpack_require__(/*! ./page.js */ \"./src/app/pages/page.js\")\r\n\r\nmodule.exports = PageRoom\r\n\r\nfunction PageRoom() {}\r\n\r\nPageRoom.onController = function($scope, $http, user, pageEvent) {\r\n  $scope.click = function() {\r\n    Page.showPage(pageEvent, 'login');\r\n  };\r\n}\n\n//# sourceURL=webpack:///./src/app/pages/room.controller.js?");

/***/ }),

/***/ "./src/app/pages/stage.controller.js":
/*!*******************************************!*\
  !*** ./src/app/pages/stage.controller.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n\r\nvar Page = __webpack_require__(/*! ./page.js */ \"./src/app/pages/page.js\")\r\n\r\nmodule.exports = PageStage\r\n\r\nfunction PageStage() {}\r\n\r\nPageStage.onLoad = function(app) {\r\n  Page.loadPage(app, 'login');\r\n  Page.loadPage(app, 'lobby');\r\n  Page.loadPage(app, 'room');\r\n}\r\n\n\n//# sourceURL=webpack:///./src/app/pages/stage.controller.js?");

/***/ }),

/***/ "./src/app/util/util.js":
/*!******************************!*\
  !*** ./src/app/util/util.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n\r\nmodule.exports = Util\r\n\r\nfunction Util() {}\r\n\r\nUtil.toUpper = function(s) {\r\n  return s.substring(0, 1).toUpperCase() + s.substring(1);\r\n}\r\n\n\n//# sourceURL=webpack:///./src/app/util/util.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! angular */ \"./node_modules/_angular@1.6.9@angular/index.js\")\r\nvar Page = __webpack_require__(/*! ./app/pages/page.js */ \"./src/app/pages/page.js\")\r\nvar User = __webpack_require__(/*! ./app/models/user.js */ \"./src/app/models/user.js\")\r\n\r\nfunction startApp() {\r\n  var app = angular.module(\"app\", []);\r\n  closePreload(app);\r\n  User.initUser(app);\r\n  Page.initPageEventGenerator(app);\r\n  Page.loadPage(app, 'stage');\r\n}\r\n\r\nstartApp();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/index.js */\"./src/index.js\");\n\n\n//# sourceURL=webpack:///multi_./src/index.js?");

/***/ })

/******/ });