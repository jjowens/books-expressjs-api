let express = require('express');
let router = express.Router();
const databaseService = require("../services/database_service.js");

router.get('/all',async (req, res) => {
    try {
        const result = await databaseService.getBooks();
        res.json(result);
    } catch (e) {
        throw e;
    }
})

module.exports = router;