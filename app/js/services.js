'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
var customerServices = angular.module('myApp.services', []).
        value('version', '0.1');

customerServices.factory('Phone', ['$resource',
    function ($resource) {
        return $resource('http://localhost:8080/CustomerDB/webresources/com.rest.customer.customer.json', {}, {
            query: {method: 'GET', params: {phoneId: 'phones'}, isArray: true}
        });
    }]);
