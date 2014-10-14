'use strict';

/* Controllers */

angular.module('myApp.controllers', [])

        

        .controller('MyCtrl1', ['$scope', function ($scope ) {
                
            }])
        .controller('MyCtrl2', ['$scope','Customer', function ($scope,Customer) {
                
                $scope.customers = Customer.get();
               
                $scope.testFn= function(){
                    
                    $scope.customers = Customer.get();
                    console.log('inside get method');
                    
                };
                
            }]);
        
        
       
     
