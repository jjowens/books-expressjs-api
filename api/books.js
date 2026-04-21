var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    let apiVersion = { "section": "authors", "version": 1, "description": "THe API for saving and retrieving authors" };

    res.status(200).json(apiVersion);
});

router.get('/all', function(req, res, next) {
    let data = [
            { "bookid": 1, "title": "Book-Title", "price": 8.99, "authorid": 1, "firstname": "First", "lastname": "Last" },
            { "bookid": 2, "title": "Book-Title", "price": 8.99, "authorid": 2, "firstname": "John", "lastname": "Smith" },
            { "bookid": 3, "title": "Book-Title", "price": 8.99, "authorid": 3, "firstname": "Jane", "lastname": "Bloggs" }
        ];

    res.status(200).json(data);
});

router.get('/save', function(req, res, next) {
    let data = { "status": "success", "bookid": 1 };

    res.status(200).json(data);
});

module.exports = router;