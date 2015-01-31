var firebase = new Firebase("https://boiling-torch-2275.firebaseio.com/");

var app = angular.module('FirebaseApp', []);

app.controller('FirebaseController', ['$scope', function ($scope) {

	$scope.Messages = [];

	$scope.sendMessage = function (message) {
		var msg = {message: message}
		firebase.push( msg );

		$scope.fb.message = '';
	}

	firebase.on('child_added', function (snapshot) {
		var message = snapshot.val();

		$scope.Messages.push(message);
	});

}]);