'use strict';

/* Controllers */

angular.module('myApp.controllers', [])

        .controller('MyCtrl1', ['$scope','Customer', function ($scope,Customer ) {
                $scope.customers = Customer.query();
        
                console.log($scope.customers);
            }])
        
        .controller('MyCtrl2', ['$scope','$location','Customer','Discounts',function ($scope,$location,Customer,Discounts) {
                
                $scope.discountCodes = Discounts.query();
        
                console.log($scope.discountCodes);
        
                $scope.save = function(){                  
                    console.log('hi'+ $scope.customer.city);
                    $scope.customer.zip = 
                    Customer.save({'discountCode':'M','zip':'95051'},$scope.customer);
                };
                
                $scope.cancel = function(){
                    $location.path('/view1');
               };               
                
            }])
        
        .controller('MyCtrl3', ['$scope','$routeParams','$location','Customer2',function ($scope,$routeParams,$location,Customer) {
                
               var custId  = $routeParams.id;
               $scope.customer = Customer.get({'id':custId});
               $scope.update = function(){
                   Customer.update($scope.customer,function(status){
                       console.log("Success" +  status);
                   },function(error){
                       console.log("Failed" + error);
                   });                   
                   $location.path('/view1');
               };
               
               $scope.cancel = function(){
                    $location.path('/view1');
               };
               
            }]);
        
        
        
        
       
     
