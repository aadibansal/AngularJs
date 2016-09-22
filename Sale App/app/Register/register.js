'use strict';

angular.module('myApp.register', ['ngRoute', 'appConfig'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/register', {
    templateUrl: 'Register/register.html',
    controller: 'RegisterCtrl'
  });
}])

.controller('RegisterCtrl', ['Users', 'checkLogIn', '$scope', '$anchorScroll', '$location', 'displayName', function(Users, checkLogIn, $scope, $anchorScroll, $location, displayName) {
    $scope.check = false;
    $location.hash('register');
    $anchorScroll();
    $scope.save = function(user){
        console.log(user);
        Users.save(user, function(response){
            displayName.set(response.uid);
            checkLogIn.set(true);
            $location.path("/bootstrap");
        }, function(response){
            $scope.check = true;
        });    
    }
}]);