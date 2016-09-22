'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.login',
  'myApp.register',
  'myApp.bootstrap',
  'HeaderApp'
])
.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider
  .when('/',{
  	templateUrl: 'centerData.html'
  })
  .when('/about',{
  	templateUrl: 'about.html',
  	resolve : {
  		about:function($location, $anchorScroll){
  			$location.hash('about');
  			$anchorScroll();
  		}
  	}
  })
  .when('/contact',{
  	templateUrl: 'contact.html',
  	resolve : {
  		contact:function($location, $anchorScroll){
  			$location.hash('contact');
  			$anchorScroll();
  		}
  	}	
  })
  .otherwise({redirectTo: '/'});
}]);
