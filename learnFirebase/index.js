var app = angular.module('FirebaseApp', ['firebase']);

app.controller('FirebaseController', ['$scope', '$firebase', function ($scope, $firebase) {

	var ref = new Firebase("https://boiling-torch-2275.firebaseio.com/");

	$scope.Messages = $firebase(ref).$asArray();

	$scope.sendMessage = function (message) {
		$scope.Messages.$add( {message: message} );
		$scope.fb.message = '';
	}

}]);