"use strict";

var express = require('express'),
	router = express.Router(),
	Task = require('.././models/tasksModel');

router.route("/api/tasks/:id")
	.get(function (req,res,next){ console.log('not doing nothing here...')})
	.put(function (req, res, next){
		console.log("PUT")
		Task.findByIdAndUpdate(req.params.id, {task: req.body.task, completed: req.body.completed}, function (err, task) {
			if (err) res.send(err);
			res.json(task);
		});
	})
	.delete(function (req, res, next){
		console.log("DELETE");
		Task.remove({_id: req.params.id}, function (err, success) {
			if (err) res.send(err);
			res.json(success);
		});
	});

router.route('/api/tasks')
	.get(function (req, res, next){
		console.log("GET");
		Task.find(function(err, tasks){
			if (err) return console.error(err);
			res.json(tasks);
		});
	})
	.post(function (req, res, next){
		console.log("POST")
		Task.create(req.body, function (err, task) {
			if (err) res.send(err);
			res.json(task);
		});
	});

router.route("/")
	.get(function (req, res, next){
		res.render('index.html.ejs');
	});


module.exports = router;