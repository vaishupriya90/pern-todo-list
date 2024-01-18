import { default as winston } from 'winston'

const log = winston.createLogger({
  level: `['info','error']`,
  format: winston.format.simple(),
  transports: [
    new winston.transports.Console(),
  ],
});
export default log
