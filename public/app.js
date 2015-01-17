"use strict";

var app = angular.module("ToDoApp", ['ngResource','toDoFilter']);

app.factory('Tasks', function ($resource){
	return $resource('/api/tasks/:id', {id:"@id"}, { "update" : {method:'PUT'}, 'updateAll': {method: 'PUT'} ,"deleteMulti" : { method:'DELETE'} } );
});

app.controller('ToDoCtrl', ["$scope", "Tasks", "$filter", function ($scope, Tasks, $filter) {

	$scope.Tasks = Tasks.query(function(){
		if ($scope.Tasks.length > 0) resetToggle();
	});

	function resetToggle(){
		
		$scope.numTasks = $scope.Tasks.length;
		$scope.numComplete = $filter('completedTasksIds')($scope.Tasks, false).length;
	 	$scope.toggle = {status: $scope.numTasks === $scope.numComplete };
	}

	$scope.submit = function(task){

		if (task) {

			var newTask = new Tasks( {task: task, completed: false, edit: false} );
			newTask.$save();
			$scope.Tasks.push(newTask);

			$scope.task='';
			resetToggle();
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

	$scope.setCompleted = function(task){

		resetToggle();
		$scope.saveEdit(task);
	}

	$scope.saveEdit = function(task){

		task.edit = false;
		Tasks.update({id: task["_id"]}, task);
		console.log('Updated');
	}

	$scope.cancelEdit = function (task){ task.edit = false; }

	$scope.deleteTask = function (task, $index) {

		if ( confirm("Are you sure?") ) {
			task.$delete({ id: task["_id"] }, function (success){
				$scope.Tasks.splice($index, 1);
				console.log("Deleted");
			});
		}

		resetToggle();
	}

	$scope.toggleAll = function () {

		var status = $scope.toggle.status
		$scope.Tasks.forEach(function (task){ task.completed = status; });

		var ids = $filter('completedTasksIds')($scope.Tasks);
		Tasks.updateAll({ids: ids}, {completed: status});

		console.log('Updated All!');
	}

	$scope.clearCompleted = function (){

		var ids = $filter('completedTasksIds')($scope.Tasks);

		if ( confirm('Are you sure?') ){
			Tasks.deleteMulti({ids: ids}, function (success){
				$scope.Tasks = $filter('taskCompleted')($scope.Tasks, true);
				console.log("Deleted multi!")
			});
		}

		resetToggle();
	}

}]);