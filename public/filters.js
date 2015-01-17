var app = angular.module("toDoFilter", []);

app.filter("taskCompleted", function (){

	return function (input, status) {
		var arr = [];

		for (var i = 0; i < input.length; i++) {
			if( input[i].completed !== status ) arr.push(input[i]);
		};
		
		return arr;
	}
});

//not very dry.. but cleaner
app.filter("completedTasksIds", function (){

	return function (input) {
		var arr = [];

		for (var i = 0; i < input.length; i++) {
			if( input[i].completed == true ) arr.push(input[i]["_id"]);
		};
		
		return arr;
	}
});