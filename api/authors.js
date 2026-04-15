var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/author/', function(req, res, next) {
    let apiVersion = { "section": "authors", "version": 1, "description": "THe API for saving and retrieving authors" };

    res.status(200).json(apiVersion);
});

router.get('/author/all', function(req, res, next) {
    let data = [
        { "firstname": "First", "lastname": "Last" },
        { "firstname": "John", "lastname": "Smith" },
        { "firstname": "Jane", "lastname": "Bloggs" }
        ];

    res.status(200).json(data);
});

router.get('/author/save', function(req, res, next) {
    let data = { "status": "success", "authorid": 1 };

    res.status(200).json(data);
});

module.exports = router;