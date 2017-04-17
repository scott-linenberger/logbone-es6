import UndefinedException from './Undefined.exception';

class Logger {
  /**
   * Constructs a new Logger object with the provided loggername.
   * @param {string} loggername - name to be associated with the logger.
   */
  constructor(loggername) {
    /* throw if the loggername is undefiend */
    if (loggername === undefined) {
      throw new UndefinedException('loggername');
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

  getLoggerFormat(command) {
    /* throw an exception if command isn't defined */
    if (command === undefined || command.length === 0) {
      throw new UndefinedException('command');
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

export default class Logbone {
  static getLogger(loggername) {
    return new Logger(loggername);
  }
}