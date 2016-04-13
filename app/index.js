var express = require('express');
var app = express();

app.get("/", function(request, response){
	response.send("Index page");
});

app.get("/about", function(request, response){
	response.send("About page");
});


module.exports = app;