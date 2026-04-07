const express = require('express')
const app = express();
const databaseService = require("./services/database_service.js");

app.get('/', (req, res) => {
    res.sendFile("default.html", {root: __dirname})
})

app.get('/author/all',async (req, res) => {
    try {
        const result = await databaseService.getAuthors();
        res.json(result);
    } catch (e) {
        console.error(e);
        res.status(500).json({error: e});
    }
})

app.get('/genre/all',async (req, res) => {
    try {
        const result = await databaseService.getGenres();
        res.json(result);
    } catch (e) {
        console.error(e);
        res.status(500).json({error: e});
    }
})

app.get('/book/all',async (req, res) => {
    try {
        const result = await databaseService.getBooks();
        res.json(result);
    } catch (e) {
        console.error(e);
        res.status(500).json({error: e});
    }
})

module.exports = app;