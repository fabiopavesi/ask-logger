export declare enum LogLevel {
    LOG = 0,
    DEBUG = 1,
    INFO = 2,
    WARN = 3,
    ERROR = 4,
    NONE = 5
}
export declare class Logger {
    private context;
    private static level_names;
    private static level_terminal_colours;
    private static level_browser_colours;
    private static instances;
    private static level;
    private constructor();
    static getLogger(context: string): Logger;
    set_level(level: LogLevel): void;
    private do_log;
    log(...messages: any): void;
    debug(...messages: any): void;
    info(...messages: any): void;
    warn(...messages: any): void;
    error(...messages: any): void;
}
//# sourceMappingURL=logger.d.ts.map