// Dependencies
var express = require("express");
var exsHB = require("express-handlebars");

// Server set up
var PORT = process.env.PORT || 12000;

var app = express();

// Static content for the app from "public directory"
app.use(express.static("public"));

// Parse app body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars
app.engine("handlebars"), exsHB({ defaultLayout: "main" });
app.set("view engine", "handlebars");

// Import routes and allow server access to them
var routes = require("./controllers/burgers_controller.js");

app.use(routes);

// start server
app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
})