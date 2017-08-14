var angular = require('angular');

var app = angular.module('myApp', [ ]);

var	msg = "Message from Angular App";

app.controller('myController', function($scope) {
		$scope.message = msg;
});
