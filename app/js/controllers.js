'use strict';

/* Controllers */

angular.module('myApp.controllers', [])

        .controller('MyCtrl1', ['$scope', function ($scope ) {
                
            }])
        .controller('MyCtrl2', ['$scope','Customer', function ($scope,Customer) {
                
                $scope.testFn= function(){
                    console.log(Customer.query());
                    return 'Test';
                };
                
            }]);
        
        
       
     
