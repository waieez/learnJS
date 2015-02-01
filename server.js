"use strict";
var express = require('express'),
	app = express();

var bodyParser = require('body-parser');

var tasksRouter = require('./routes/tasksRoute');

app.use(express.static('projects'));

app.use(express.static('todo_app'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// parse application/vnd.api+json as json <- not sure what this is for.
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

app.use("/", tasksRouter);

app.listen(3000, function(){
	console.log('listening @ port 3000');
});	

module.exports = app;