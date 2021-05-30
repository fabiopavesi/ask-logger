import {Logger, LogLevel} from "../../lib/index";

const logger = Logger.getLogger('Main program')

logger.set_level(LogLevel.DEBUG)

logger.error('This is an example', 123, {
    name: 'Joe',
    age: 25
})
