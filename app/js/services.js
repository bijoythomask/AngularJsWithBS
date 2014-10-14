'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
var customerServices = angular.module('myApp.services', ['ngResource'])
        .value('version', '0.1')

        .factory('Customer', ['$resource',
            function ($resource) {
                return $resource('http://localhost:8080/CustomerDB/webresources/com.rest.customer.customer',{}, {
                    get: {method: 'GET',
                          params:{}
                      }
                });
            }]);
