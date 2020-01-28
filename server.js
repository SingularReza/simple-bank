var express = require("express")
var DB = require("./db.js")

var app = express()
var HTTP_PORT = 8000

app.get("/search", (req, res) => {
    // send request params in the form of {name: 'bankname', city: 'cityname'}
    console.log(req.query)
    DB.getBanksList(req.query.name, req.query.city, function(list) {
        res.send(list)
    })
});

app.listen(HTTP_PORT, () => {
    console.log("Server running on port %PORT%".replace("%PORT%", HTTP_PORT))
});