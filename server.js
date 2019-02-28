// Dependencies
var express = require("express");
var exphbs = require("express-handlebars");
var routes = require("./controllers/burgers_controller.js");

// Server set up
var PORT = process.env.PORT || 12120;

var app = express();

// Static content for the app from "public directory"
app.use(express.static("public"));

// Parse app body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and allow server access to them
app.use(routes);

// start server
app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
})