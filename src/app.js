const express = require('express')
const createError = require('http-errors');
const bodyParser = require("body-parser");
// const expressWinston = require('express-winston');
// const winston = require("winston");
const logger = require("./logger");
const app = express();

const authorRouter = require("./routes/authors.js");
const genreRouter = require("./routes/genres.js");
const bookRouter = require("./routes/books.js");

app.use(bodyParser.json());

// const logger = (expressWinston.logger({
//                     transports: [
//                         new winston.transports.Console(),
//                         new winston.transports.File({ filename: "./logs/log.log" })
//                     ],
//                     format: winston.format.combine(
//                         winston.format.colorize(),
//                         winston.format.json()
//                     )
//                 }));

// app.use(expressWinston.logger({
//     transports: [
//         new winston.transports.Console(),
//         new winston.transports.File({ filename: "./logs/log.log" })
//     ],
//     format: winston.format.combine(
//         winston.format.colorize(),
//         winston.format.json()
//     )
// }));

app.use(logger.logger);

app.use("/author", authorRouter);
app.use("/genre", genreRouter);
app.use("/book", bookRouter);

app.get('/', (req, res) => {
    res.sendFile("default.html", {root: __dirname})
})

app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
    logger.errorLogger(err.message);
});


// express-winston errorLogger makes sense AFTER the router.
// app.use(expressWinston.errorLogger({
//     transports: [
//         new winston.transports.Console()
//     ],
//     format: winston.format.combine(
//         winston.format.colorize(),
//         winston.format.json()
//     )
// }));

app.use(logger.errorLogger);

module.exports = app;