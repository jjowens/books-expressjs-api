const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.sendFile("default.html", {root: __dirname})
})

app.post('/author/save', (req, res) => {
    res.send("Saved author");
})

app.listen(port, () => {
    //console.log(`Example app listening on port ${port}`)
})