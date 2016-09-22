'use strict';

angular.module('myApp.login', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/login', {
    templateUrl: 'LogIn/login.html',
    controller: 'LoginCtrl'
  });
}])

.controller('LoginCtrl', ['LogIn','$scope', '$location', '$rootScope', 'checkLogIn', '$anchorScroll', 'displayName', function(LogIn, $scope, $location, $rootScope, checkLogIn, $anchorScroll, displayName) {
    $location.hash('login');
    $anchorScroll();
    $scope.check = false;
    $scope.submit = function(user){
        LogIn.save(user, function(response){
            displayName.set(response.uid);
            checkLogIn.set(true);
            $location.path("/bootstrap");
        }, function(response){
            $scope.check = true;
        });
    }
}]);
/*
$(function(){
    $('.button-checkbox').each(function(){
        var $widget = $(this),
            $button = $widget.find('button'),
            $checkbox = $widget.find('input:checkbox'),
            color = $button.data('color'),
            settings = {
                    on: {
                        icon: 'glyphicon glyphicon-check'
                    },
                    off: {
                        icon: 'glyphicon glyphicon-unchecked'
                    }
            };

        $button.on('click', function () {
            $checkbox.prop('checked', !$checkbox.is(':checked'));
            $checkbox.triggerHandler('change');
            updateDisplay();
        });

        $checkbox.on('change', function () {
            updateDisplay();
        });

        function updateDisplay() {
            var isChecked = $checkbox.is(':checked');
            // Set the button's state
            $button.data('state', (isChecked) ? "on" : "off");

            // Set the button's icon
            $button.find('.state-icon')
                .removeClass()
                .addClass('state-icon ' + settings[$button.data('state')].icon);

            // Update the button's color
            if (isChecked) {
                $button
                    .removeClass('btn-default')
                    .addClass('btn-' + color + ' active');
            }
            else
            {
                $button
                    .removeClass('btn-' + color + ' active')
                    .addClass('btn-default');
            }
        }
        function init() {
            updateDisplay();
            // Inject the icon if applicable
            if ($button.find('.state-icon').length == 0) {
                $button.prepend('<i class="state-icon ' + settings[$button.data('state')].icon + '"></i> ');
            }
        }
        init();
    });
});*/