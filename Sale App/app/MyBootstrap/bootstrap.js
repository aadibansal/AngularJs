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
  })
  .when('/detail/:img/:name', {   
    templateUrl: 'MyBootstrap/template_detail.html',
    controller: 'detailCtrl',
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

.controller('detailCtrl', ['$routeParams', '$scope', 'LogOut', '$location', '$rootScope', 'checkLogIn', '$anchorScroll', function($routeParams, $scope, LogOut, $location, $rootScope, checkLogIn, $anchorScroll){
   $scope.objData = {};
   console.log($routeParams.img);
   $scope.objData.imgPath = $routeParams.img;
    $scope.objData.name = $routeParams.name;
      $location.hash("detailShow");
    $anchorScroll();
    $scope.logOut = function(){
            LogOut.save().$promise.then(function(){
                checkLogIn.set(false);
                $location.url('/');
            })
       };
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
       };
       $scope.detail = function(index){
            console.log($scope.bootData[index]);
            $location.url("/detail/"+$scope.bootData[index].imgPath+"/"+$scope.bootData[index].name);
       };
}]);