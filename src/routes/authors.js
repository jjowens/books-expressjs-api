let express = require('express');
let router = express.Router();
const databaseService = require("../services/database_service.js");

router.get('/all',async (req, res) => {
    try {
        const result = await databaseService.getAuthors();
        res.json(result);
    } catch (e) {
        throw e;
    }
})

router.post('/save',async (req, res) => {
    try {
        const firstName = req.body.first_name;
        const lastName   = req.body.last_name;
        const result = await databaseService.saveAuthorDetails(firstName, lastName);
        res.json(result);
    } catch (e) {
        throw e;
    }
})

module.exports = router;