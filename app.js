var express = require("express");
var app = express();

app.use(express.static(__dirname + "/public"));

// handle main page request
app.get("/", function (req, res) {
    res.render("index.ejs");
});

// handle other requests
app.get("/*", function(req, res) {
    res.send("Page is not exist");
});

// listen config
app.listen(process.env.PORT, process.env.IP, function() {
    console.log("The server has started");
});