

'use strict';

/* App Module */

var phonecatApp = angular.module('phonecatApp', [
    // lists the modules that phonecatApp depends on
    'ngRoute',
    'phonecatControllers'
]);
phonecatApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        // phone list view will be shown when URL has fragment is /phones
        when('/phones', {
            templateUrl: 'partials/phone-list.html',
            controller: 'PhoneListCtrl'
        }).
        // show phone-detail if fragment is /phones/:phoneId
        when('/phones/:phoneId', {
            templateUrl: 'partials/phone-detail.html',
            controller: 'PhoneDetailCtrl'
        }).
        // if it can't match, just go to /phones
        otherwise({
            redirectTo: '/phones'
        });
    }
]);