'use strict';

/* Controllers */

angular.module('myApp.controllers', [])

        .controller('MyCtrl1', ['$scope','Customer', function ($scope,Customer ) {
                $scope.customers = Customer.get();
            }])
        
        .controller('MyCtrl2', ['$scope','Customer',function ($scope,Customer) {
                
                $scope.save = function(){                  
                    console.log('hi'+ $scope.customer.city);
                    $scope.customer.zip = 
                    Customer.save({'discountCode':'M','zip':'95051'},$scope.customer);
                };
                
                
            }]);
        
        
        
        
       
     
