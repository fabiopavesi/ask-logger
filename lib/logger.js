"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = exports.LogLevel = void 0;
/**
 * Built-in log levels
 */
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["LOG"] = 0] = "LOG";
    LogLevel[LogLevel["DEBUG"] = 1] = "DEBUG";
    LogLevel[LogLevel["INFO"] = 2] = "INFO";
    LogLevel[LogLevel["WARN"] = 3] = "WARN";
    LogLevel[LogLevel["ERROR"] = 4] = "ERROR";
    LogLevel[LogLevel["NONE"] = 5] = "NONE";
})(LogLevel = exports.LogLevel || (exports.LogLevel = {}));
var Logger = /** @class */ (function () {
    function Logger(context) {
        this.context = context;
    }
    /**
     * Get a logger instance for the specified context
     *
     * The context is a string that will be added to all messages coming from, e.g., a specific class or module
     *
     * @param context
     */
    Logger.getLogger = function (context) {
        if (!this.instances[context])
            this.instances[context] = new Logger(context);
        return this.instances[context];
    };
    /**
     * Sets the global debugging level, i.e. the minimum level for messages to be shown
     * @param level
     */
    Logger.prototype.set_level = function (level) {
        Logger.level = level;
    };
    Logger.prototype.do_log = function (level, messages) {
        if (level >= Logger.level) {
            // messages.splice(0, 1)
            if (typeof window !== 'undefined') {
                var message = "%c" + new Date().toLocaleString() + " - " + Logger.level_names[level] + " - " + this.context + " - ";
                console.log.apply(console, __spreadArray(["" + message, "color: " + Logger.level_browser_colours[level]], messages));
            }
            else {
                var message = "\u001B[" + Logger.level_terminal_colours[level] + "m" + new Date().toLocaleString() + " - " + Logger.level_names[level] + " - " + this.context + " - \u001B[0m - ";
                console.log.apply(console, __spreadArray([message], messages));
            }
        }
    };
    Logger.prototype.log = function () {
        var messages = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            messages[_i] = arguments[_i];
        }
        this.do_log(LogLevel.LOG, messages);
    };
    Logger.prototype.debug = function () {
        var messages = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            messages[_i] = arguments[_i];
        }
        this.do_log(LogLevel.DEBUG, messages);
    };
    Logger.prototype.info = function () {
        var messages = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            messages[_i] = arguments[_i];
        }
        this.do_log(LogLevel.INFO, messages);
    };
    Logger.prototype.warn = function () {
        var messages = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            messages[_i] = arguments[_i];
        }
        this.do_log(LogLevel.WARN, messages);
    };
    Logger.prototype.error = function () {
        var messages = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            messages[_i] = arguments[_i];
        }
        this.do_log(LogLevel.ERROR, messages);
    };
    Logger.level_names = [
        'LOG',
        'DEBUG',
        'INFO',
        'WARN',
        'ERROR',
        'NONE'
    ];
    Logger.level_terminal_colours = [
        "38;2;" + 0x99 + ";" + 0x99 + ";" + 0x99,
        '34',
        '38',
        "38;2;" + 0xff + ";" + 0x66 + ";" + 0,
        '31',
        '33'
    ];
    Logger.level_browser_colours = [
        '#666',
        '#0c0',
        '#333',
        "#ff6600",
        '#c00',
        '33'
    ];
    Logger.instances = {};
    Logger.level = LogLevel.NONE;
    return Logger;
}());
exports.Logger = Logger;
//# sourceMappingURL=logger.js.map