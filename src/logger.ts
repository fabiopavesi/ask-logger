export enum LogLevel {
    LOG,
    DEBUG,
    INFO,
    WARN,
    ERROR,
    NONE
}
export class Logger {
    private static level_names = [
        'LOG',
        'DEBUG',
        'INFO',
        'WARN',
        'ERROR',
        'NONE'
    ]
    private static level_terminal_colours = [
        `38;2;${0x99};${0x99};${0x99}`,
        '34',
        '38',
        `38;2;${0xff};${0x66};${0}`,
        '31',
        '33'
    ]
    private static level_browser_colours = [
        '#666',
        '#0c0',
        '#333',
        `#ff6600`,
        '#c00',
        '33'
    ]
    private static instances: { [name: string]: Logger } = {}
    private static level: LogLevel = LogLevel.NONE
    private constructor(private context: string) {
    }

    static getLogger(context: string) {
        if (!this.instances[context]) this.instances[context] = new Logger(context)
        return this.instances[context]
    }

    set_level(level: LogLevel) {
        Logger.level = level
    }

    private do_log(level: LogLevel, messages: any[]) {
        if (level >= Logger.level) {
            // messages.splice(0, 1)
            if (typeof window !== 'undefined') {
                const message = `%c${new Date().toLocaleString()} - ${Logger.level_names[level]} - ${this.context} - `
                console.log(`${message}`, `color: ${Logger.level_browser_colours[level]}`, ...messages)
            } else {
                const message = `\x1b[${Logger.level_terminal_colours[level]}m${new Date().toLocaleString()} - ${Logger.level_names[level]} - ${this.context} - \x1b[0m - `
                console.log(message, ...messages)
            }
        }
    }

    log(...messages: any) {
        this.do_log(LogLevel.LOG, messages)
    }
    debug(...messages: any) {
        this.do_log(LogLevel.DEBUG, messages)
    }
    info(...messages: any) {
        this.do_log(LogLevel.INFO, messages)
    }
    warn(...messages: any) {
        this.do_log(LogLevel.WARN, messages)
    }
    error(...messages: any) {
        this.do_log(LogLevel.ERROR, messages)
    }
}
