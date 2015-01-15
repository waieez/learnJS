var app = angular.module("ToDoApp", ['ngResource','toDoFilter']);

app.factory('Tasks', function ($resource){
	return $resource('/api/tasks/:id', {id:"@id"}, { saveTask : {method:'POST', params: {saveTask:true} , isArray:true} });
});

app.controller('ToDoCtrl', ["$scope", "Tasks", function ($scope, Tasks) {
	$scope.submit = function(task){
		if (task) {

			var newTask = new Tasks( {task: task, completed: false, edit: false} );
			newTask.$save(); // want to get object from mongodb w/ id for edits
			$scope.Tasks.push(newTask); //is this $$hashkey == id?
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
		//call put
	}

	//ends up being the same thing.
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

	$scope.Active = [];
	$scope.Tasks = Tasks.query(function(){

	});

}]);