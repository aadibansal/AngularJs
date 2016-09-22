'use strict';

angular.module('myApp.bootstrap', ['ngRoute', 'paypalButtonApp', 'appConfig'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/bootstrap', {   
    templateUrl: 'MyBootstrap/bootstrap.html',
    controller: 'bootCtrl',
    resolve: {
        check: function(checkLogIn, $location){
            var data = checkLogIn.get();   
            if(data!=true){
               $location.path('/');
            }
        }
    }
  });
}])

.controller('bootCtrl', ['BootData','$scope', 'LogOut', '$location', '$rootScope', 'checkLogIn', '$anchorScroll', 'displayName', 'Users', function(BootData, $scope, LogOut, $location, $rootScope, checkLogIn, $anchorScroll, displayName, Users) {
       $scope.bootData = BootData.query();
        $scope.dispName = "";
        var uid = displayName.get();   
        Users.get({id:uid}, function(response){
            $scope.dispName = response.displayname;
        }, function(response){

        });
       $scope.logOut = function(){
            LogOut.save().$promise.then(function(){
                checkLogIn.set(false);
                $location.url('/');
            })
       };
       $scope.top = function(){
            $location.hash("top");
            $anchorScroll();
       }
}]);