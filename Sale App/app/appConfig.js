'use strict';

angular.module('appConfig', ['ngResource'])
.value('logInSuccesfull','false')
.constant('userCol','http://localhost:2403/users/')
.constant('logIn','http://localhost:2403/users/login')
.constant('logOut','http://localhost:2403/users/logout')
.constant('myBootstrap','http://localhost:2403/my-bootstrap')
.factory('Users', ['$resource','userCol', function($resource, userCol) {
return $resource(userCol+":id", {id:'@id'}
);
}])
.factory('LogIn', ['$resource','logIn', function($resource, logIn) {
return $resource(logIn);
}])
.factory('LogOut', ['$resource','logOut', function($resource, logOut) {
return $resource(logOut);
}])
.factory('BootData', ['$resource','myBootstrap', function($resource, myBootstrap) {
return $resource(myBootstrap);
}])
.factory('checkLogIn', [function() {
var savedData = false;
 function set(data) {
   savedData = data;
 }
 function get() {
  return savedData;
 }

 return {
  set: set,
  get: get
 }
}])
.factory('displayName', [function() {
var name = "";
 function set(data) {
   name = data;
 }
 function get() {
  return name;
 }

 return {
  set: set,
  get: get
 }
}])
;