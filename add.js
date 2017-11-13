var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var errorHandler = require('errorhandler');
var methodOverride = require('method-override');
var hostname = process.env.HOSTNAME || 'localhost';
var port = 8080;


app.get("/add", function (req, res) {
	var a = req.query.a;
	var b = req.query.b;
	
	if(a == undefined || b == undefined) {
		res.send("Need to define a and b");
	}
	else {
		res.send((parseFloat(a) + parseFloat(b)).toString());
	}
});

app.get("/sub", function (req, res) {
	var a = req.query.a;
	var b = req.query.b;
	
	if(a == undefined || b == undefined) {
		res.send("Need to define a and b");
	}
	else {
		res.send((parseFloat(a) - parseFloat(b)).toString());
	}
});

app.get("/mult", function (req, res) {
	var a = req.query.a;
	var b = req.query.b;
	
	if(a == undefined || b == undefined) {
		res.send("Need to define a and b");
	}
	else {
		res.send((parseFloat(a) * parseFloat(b)).toString());
	}
});

app.get("/divide", function (req, res) {
	var a = req.query.a;
	var b = req.query.b;
	
	if(a == undefined || b == undefined) {
		res.send("Need to define a and b");
	}
	else {
		res.send((parseFloat(a) / parseFloat(b)).toString());
	}
});

app.use(methodOverride());
app.use(bodyParser());
app.use(express.static(__dirname + '/public'));
app.use(errorHandler());

console.log("Simple static server listening at http://" + hostname + ":" + port);
app.listen(port);