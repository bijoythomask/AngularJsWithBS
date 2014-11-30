'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
var customerServices = angular.module('myApp.services', ['ngResource'])
        .value('version', '0.1')

        .factory('Customer', ['$resource',
            function ($resource) {
                return $resource('http://localhost:8080/CustomerDB/webresources/com.rest.customer.customer/:customerId/DiscountCode/:discountCode',
                    {customerId:'@customerId',discountCode:'@discountCode'}, 
                    {query:{ method:'GET', isArray:true },
                    get: { method:'GET'},
                    save:{ method:'POST'},
                    update:{ method:'PUT'}
                });
            }])
        .factory('Customer2', ['$resource',
            function ($resource) {
                return $resource('http://localhost:8080/CustomerDB/webresources/com.rest.customer.customer/:id',
                    {id:'@customerId'}, 
                    {query:{ method:'GET', isArray:true },
                    get: { method:'GET'},
                    save:{ method:'POST'},
                    update:{ method:'PUT'}
                });
            }])
        .factory('Discounts', ['$resource',
            function ($resource) {
                return $resource('http://localhost:8080/CustomerDB/webresources/com.rest.customer.discountcode',{id:'@id'}, {
                    get : { method:'GET'},
                    query: { method:'GET', isArray:true },
                    save:{ method:'POST'}
                });
            }]);

            