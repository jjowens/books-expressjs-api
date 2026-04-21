var express = require('express');
var router = express.Router();

let authorRouter = require('./authors');
let genreRouter = require('./genres');
let bookRouter = require('./books');

// ADD AUTHORS
router.use("/author", authorRouter);
router.use("/genre", genreRouter);
router.use("/books", bookRouter);

/* GET home page. */
router.get('/', function(req, res, next) {
  let apiVersion = { version: '1.0', datepublished: new Date("2026-03-15") };

  res.status(200).json(apiVersion);
});


module.exports = router;
