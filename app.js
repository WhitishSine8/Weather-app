const express = require("express");
const https = require("https");
const app = express();

app.get("/", function(req, res) {
    const url = "api.openweathermap.org/data/2.5/weather?q=Monterrey&appid=f7d91cd930a3320ca6ca30bebd63a442&units=metric"
    https.get(url, function(response) {
        console.log(response);
    })
})

app.listen(3000, function() {
    console.log("server running on port 3000")
})