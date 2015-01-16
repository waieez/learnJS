var mongoose = require('mongoose'),
	db = mongoose.connection;

mongoose.connect("mongodb://onepiece:luffylaw@ds063240.mongolab.com:63240/waieez");

db.on('error', console.error);

var taskSchema = mongoose.Schema({
	task: String,
	completed: Boolean,
	edit: Boolean
})

var Task = mongoose.model("Task", taskSchema);

module.exports = Task;
