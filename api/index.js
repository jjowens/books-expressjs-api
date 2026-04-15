var express = require('express');
var router = express.Router();

let authorRouter = require('./authors');

/* GET home page. */
router.get('/', function(req, res, next) {
  let apiVersion = { version: '1.0', datepublished: new Date("2026-03-15") };

  res.status(200).json(apiVersion);
});

// ADD AUTHORS
router.use(authorRouter);

module.exports = router;
