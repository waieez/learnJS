"use strict";

var app = angular.module("ToDoApp", ['ngResource','toDoFilter']);

app.factory('Tasks', function ($resource){
	return $resource('/api/tasks/:id', {id:"@id"}, { "update" : {method:'PUT'} } );
});

app.controller('ToDoCtrl', ["$scope", "Tasks", function ($scope, Tasks) {

	$scope.Tasks = Tasks.query();

	$scope.submit = function(task){
		if (task) {

			var newTask = new Tasks( {task: task, completed: false, edit: false} );
			newTask.$save();
			$scope.Tasks.push(newTask);
			$scope.task='';
		}
	}

	$scope.Active = [];

	$scope.editTask = function (task, $index){
		task.edit = true;

		//very bad way of dealing with multiple focus behavior
		$scope.Active.push($index);
		if ($scope.Active.length > 1) {
			var prev = $scope.Active.shift();
			if (prev != $index) $scope.Tasks[prev].edit = false;
		}
	}

	$scope.saveEdit = function(task){
		task.edit = false;
		Tasks.update({id: task["_id"]}, task);
		console.log('Updated');
	}

	$scope.cancelEdit = function (task){
		task.edit = false;
	}

	$scope.deleteTask = function (task, $index) {
		if ( confirm("Are you sure?") ) {
			task.$delete({ id: task["_id"] }, function (success){
				$scope.Tasks.splice($index, 1);
				console.log("Deleted");
			});
		}
	}

}]);