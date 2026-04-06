const express = require('express')
const app = express();
const databaseService = require("./services/database_service.mjs");

app.get('/', (req, res) => {
    res.sendFile("default.html", {root: __dirname})
})

app.get('/simple', (req, res) => {
    res.send("Hello, World!")
})


app.get('/simplejson', (req, res) => {
    res.json("Hello, World!", )
})

app.get('/complexjson', (req, res) => {
    const record = {"name": "Jim-Bob", "role": "Software Developer", "department": "Software Delivery"}

    res.json(record)
})

app.post('/author/save', (req, res) => {
    const db = databaseService.open

    const result = databaseService.save

    res.send("Saved author");
})

app.post('/author/all', (req, res) => {
    const db = databaseService.open

    const result = db.get

    db.close();

    res.send("Saved author");
})

module.exports = app;