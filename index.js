"use strict";
var express = require('express'),
	app = express();

var mongoose = require('mongoose'),
	db = mongoose.connection;

var bodyParser = require('body-parser');

db.on('error', console.error);

// need to separate model into module
db.once('open', function(){

	var taskSchema = mongoose.Schema({
		task: String,
		completed: Boolean,
		edit: Boolean
	})

	var Task = mongoose.model("Task", taskSchema);

	app.use(express.static('public'));

	// parse application/x-www-form-urlencoded
	app.use(bodyParser.urlencoded({ extended: false }));

	// parse application/json
	app.use(bodyParser.json());

	// parse application/vnd.api+json as json <- not sure what this is for.
	app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 

	app.get('/api/tasks', function (req, res){

		Task.find(function(err, tasks){
			if (err) return console.error(err);
			res.json(tasks);
		});
	})

	app.post('/api/tasks', function (req, res){

		Task.create(req.body, function (err, task) {
			if (err) res.send(err);
			res.json(task);
		});
	})

	app.get('*', function (req, res){
		res.render('index.html.ejs')
	});

	app.listen(3000, function(){
		console.log('listening @ port 3000');
	});	

});

mongoose.connect("mongodb://onepiece:luffylaw@ds063240.mongolab.com:63240/waieez");


module.exports = app;