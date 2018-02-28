var express = require("express");
var app = express();

app.use(express.static(__dirname + "/public"));

app.get("/", function (req, res) {
    res.render("index.ejs");
});
app.get("/*", function(req, res) {
    res.send("Page not exist");
});
app.listen(process.env.PORT, process.env.IP, function() {
    console.log("The server has started");
});