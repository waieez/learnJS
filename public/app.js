var app = angular.module("ToDoApp", []);

app.factory('Tasks', function (){
	return {}
});

app.controller('ToDoCtrl', ["$scope", "Tasks", function ($scope, Tasks) {
	$scope.submit = function(task){
		if (task) {
			$scope.Tasks.push( {task: task, edit: false } );
			$scope.task='';
		}
	}

	$scope.editTask = function (task){
		task.edit = true;
	}

	$scope.saveEdit = function(task){
		task.edit = false;
	}

	//ends up being the same thing.
	$scope.cancelEdit = function (task){
		task.edit = false;
	}

	$scope.Tasks = [];

}]);