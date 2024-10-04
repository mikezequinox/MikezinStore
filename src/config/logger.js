import {createLogger, format, transports} from 'winston';

const LOGGER = createLogger({
    format: format.combine(
      format.timestamp({format: 'YYYY-MM-DD HH:mm:ss'}),
      format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`)
    ),
    transports:[new transports.File({filename: './src/logs/logs.txt', level: 'info'})]
  })

  export default LOGGER

