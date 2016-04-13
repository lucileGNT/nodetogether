var express = require('express');
var app = express();

const motivations = require('motivations');
const pickOne = require('pick-one');

app.get("/", function(request, response){
	response.send(pickOne(motivations));
});

app.get("/about", function(request, response){
	response.send("About page");
});

module.exports = app;