import winston from 'winston';

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()
      ),
    defaultMeta: { service: 'user-service' },
    transports: [
        new winston.transports.File({ filename: 'src/logs/user/error.log', level: 'error' }),
        new winston.transports.File({ filename: 'src/logs/user/info.log', level: 'info' }),
        new winston.transports.File({ filename: 'src/logs/user/combined.log' }),

    ],
});


export default logger;