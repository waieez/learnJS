var app = angular.module("ProjectsApp", ['ToDoApp', 'ngRoute']);

app.config(function($routeProvider){

	$routeProvider
		.when('/', {
			templateUrl:'_projects_view.html'
		})
});