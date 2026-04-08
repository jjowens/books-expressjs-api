const expressWinston = require('express-winston');
const winston = require("winston");

const logger = (expressWinston.logger({
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: "./logs/log.log" })
    ],
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.json()
    )
}));

const errorLogger = (expressWinston.errorLogger({
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: "./logs/error-log.log" })
    ],
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.json()
    )
}));

module.exports = {
    logger: logger,
    errorLogger: errorLogger,
};