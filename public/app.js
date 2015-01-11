var app = angular.module("ToDoApp", ['toDoFilter']);

app.factory('Tasks', function (){
	return {}
});

app.controller('ToDoCtrl', ["$scope", "Tasks", function ($scope, Tasks) {
	$scope.submit = function(task){
		if (task) {
			$scope.Tasks.push( {task: task, completed: false, edit: false} );
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
	}

	//ends up being the same thing.
	$scope.cancelEdit = function (task){
		task.edit = false;
	}

	$scope.Tasks = [];
	$scope.Active = [];

}]);

