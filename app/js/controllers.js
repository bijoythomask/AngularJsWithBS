'use strict';

/* Controllers */

angular.module('myApp.controllers', [])

        .controller('MyCtrl1', ['$scope','Customer', function ($scope,Customer ) {
                $scope.customers = Customer.get();
            }])
        .controller('MyCtrl2', ['$scope', function ($scope) {
                
                
            }]);
        
        
       
     
