var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    let apiVersion = { "section": "authors", "version": 1, "description": "THe API for saving and retrieving authors" };

    res.status(200).json(apiVersion);
});

router.get('/all', function(req, res, next) {
    let data = [
            { "genreid": 1, "genrename": "Fiction" },
            { "genreid": 2, "genrename": "Non-fiction" },
            { "genreid": 3, "genrename": "Science Fiction" },
            { "genreid": 4, "genrename": "Horror" },
            { "genreid": 5, "genrename": "Business" },
            { "genreid": 6, "genrename": "History" },
            { "genreid": 7, "genrename": "Crime" }
        ];

    res.status(200).json(data);
});

router.post('/save', function(req, res, next) {
    let data = { "status": "success", "genreid": 1 };

    res.status(200).json(data);
});

module.exports = router;