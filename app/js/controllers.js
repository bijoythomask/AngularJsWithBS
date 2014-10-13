'use strict';

/* Controllers */

angular.module('myApp.controllers', [])

        .controller('MyCtrl1', ['$scope', function ($scope) {

            }])
        .controller('MyCtrl2', ['$scope','Phone', function ($scope,Phone) {
                $scope.phones = Phone.query();
                $scope.orderProp = 'age';
            }]);

     
