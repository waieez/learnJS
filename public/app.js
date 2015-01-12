var app = angular.module("ToDoApp", ['ngResource','toDoFilter']);

app.factory('Tasks', function ($resource){
	return $resource('/api/tasks/:id', {}, { saveTask : {method:'POST', params: {saveTask:true} , isArray:true} });
});

app.controller('ToDoCtrl', ["$scope", "Tasks", function ($scope, Tasks) {
	$scope.submit = function(task){
		if (task) {

			var newTask = new Tasks( {task: task, completed: false, edit: false} );
			newTask.$save();
			$scope.Tasks.push(newTask);
			$scope.task='';
		}
	}

	$scope.editTask = function (task, $index){
		task.edit = true;

		//very bad way of dealing with multiple focus behavior
		$scope.Active.push($index);
		if ($scope.Active.length > 1) {
			var prev = $scope.Active.shift();
			$scope.Tasks[prev].edit = false;
		}
	}

	$scope.saveEdit = function(task){
		task.edit = false;
		//put resource here.
	}

	//ends up being the same thing.
	$scope.cancelEdit = function (task){
		task.edit = false;
	}

	$scope.Active = [];
	$scope.Tasks = Tasks.query(function(){

	});


}]);

