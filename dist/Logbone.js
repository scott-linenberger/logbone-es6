(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/** Class for handling undefined  */
class UndefinedException {
  /**
   * Constructs an object with a message stating the variable is undefined.
   * @param {string } variableName - name of the variable that is undefined
   */
  constructor(variableName) {
    this.variableName = variableName;
    this.message = `${variableName} is undefined: ${variableName} cannot be undefined!`;
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = UndefinedException;



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Undefined_exception__ = __webpack_require__(0);


/**
 * Logger class
 */
class Logger {
  /**
   * Constructs a new Logger object with the provided loggername.
   * @param {string} loggername - name to be associated with the logger.
   */
  constructor(loggername) {
    /* throw if the loggername is undefiend */
    if (loggername === undefined) {
      throw new __WEBPACK_IMPORTED_MODULE_0__Undefined_exception__["a" /* default */]('loggername');
    }

    /* assign instance vars */
    this.loggername = loggername;

    /* init logger functions */
    this.log = this.getLoggerFunction('log');
    this.info = this.getLoggerFunction('info');
    this.debug = this.getLoggerFunction('debug');
    this.warn = this.getLoggerFunction('warn');
    this.error = this.getLoggerFunction('error');
  }

  /**
   * Returns a function that utilizes the console for argument printing
   * @param {string} command - console command: 'log', 'debug', etc..
   */
  getLoggerFunction(command) {
    const $this = this;
    /* build a closure for logging using the specified method */
    return (...args) => {
      $this.printArgs(command, args);
    };
  }

  /**
   * Creates a format string that gets tacked onto the console output when logging methods
   * are called.
   * @param {string} command - console command string: log, info, debug, etc..
   */
  getLoggerFormat(command) {
    /* throw an exception if command isn't defined */
    if (command === undefined || command.length === 0) {
      throw new __WEBPACK_IMPORTED_MODULE_0__Undefined_exception__["a" /* default */]('command');
    }

    const level = command.toUpperCase();
    return `[${level}][${this.loggername}]: `;
  }

  /**
   * Method that prints formatted arguments.
   * @param {string} command
   * @param {string} prefix
   * @param {object} _args
   */
  printArgs(command, _args) {
    const commandFn = console[command];
    let format = this.getLoggerFormat(command);

    if (_args === undefined || _args.length === 0) {
      commandFn(format);
    }

    /* if the first argument is a string, append it to the format */
    if ((typeof _args[0]) === 'string') {
      format += _args[0];

      if (_args.length === 1) {
        commandFn(format);
      }

      if (_args.length === 2) {
        commandFn(format, _args[1]);
      }

      if (_args.length === 3) {
        commandFn(format, _args[1], _args[2]);
      }

      if (_args.length === 4) {
        commandFn(format, _args[1], _args[2], _args[3]);
      }

      if (_args.length === 5) {
        commandFn(format, _args[1], _args[2], _args[3], _args[4]);
      }

      /* jump out */
      return;
    }

    /* if the first argument is not a string, do not append it to the format */
    if (_args.length === 1) {
      commandFn(format + _args[0]);
    }

    if (_args.length === 2) {
      commandFn(format, _args[0], _args[1]);
    }

    if (_args.length === 3) {
      commandFn(format, _args[0], _args[1], _args[2]);
    }

    if (_args.length === 4) {
      commandFn(format, _args[0], _args[1], _args[2], _args[3]);
    }

    if (_args.length === 5) {
      commandFn(format, _args[0], _args[1], _args[2], _args[3], _args[4]);
    }
  }
}

/**
 * Logbone is a logger factory used to get an instance of a Logbone Logger.
 * To get a new logger call `Logbone.getLogger(<loggername>)`
 */
class Logbone {
  /**
   * Method that returns a new instance of Logger.
   * @param {string} loggername - prefix used when logging to the console.
   */
  static getLogger(loggername) {
    return new Logger(loggername);
  }
}
/* harmony export (immutable) */ __webpack_exports__["default"] = Logbone;



/***/ })
/******/ ]);
});