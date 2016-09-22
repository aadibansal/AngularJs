angular.module('HeaderApp', [])
.directive("header", function(){
	return {
		restrict: 'E',
		templateUrl : 'headerpart.html' 
	}
});