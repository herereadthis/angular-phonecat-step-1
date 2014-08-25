'use strict';

/* Controllers */
/*
A controller is a constructor function that takes a $scope parameter
*/
var phonecatApp = angular.module('phonecatApp', []);
/*
The data model is an array of phones as an object literal, instantiated within
the PhoneListCtrl controller

We've declared a controller called PhoneListCtrl and registered it as an 
AngularJS module, phonecatApp

The controller allows us to to establish data-binding between the model and the
view.

The ngController directive <body ng-controller="PhoneListCtrl"> references the
name of the controller PhoneListCtrl

The PhoneListCtrl controller attaches phone data to the $scope that was injected
into the controller function. The $scope is a decendent of the root scope <html>
This controller scope is available to all bindings within <body>
*/

/*
$http service allows to make a HTTP request to web server, declared as a dependency
manageed by DI (dependency injection) subsystem
returns a promise object with a success method
*/
// must name the dependencies to allow for minification
phonecatApp.controller('PhoneListCtrl', ['$scope', '$http',
    function ($scope, $http) {
    $http.get('phones/phones.json').success(function(data) {
        // $scope.phones = data;
        // pre-process the result by limiting
        $scope.phones = data.splice(0, 5);
    });
    $scope.orderProp = 'age';
    $scope.name = "World";
}]);

// phonecatApp.controller('PhoneListCtrl', function ($scope) {
//     $scope.phones = [
//         {
//             'name': 'Nexus S',
//             'snippet': 'Fast just got faster with Nexus S.',
//             'age': 1
//         },
//         {
//             'name': 'Motorola XOOM™ with Wi-Fi',
//             'snippet': 'The Next, Next Generation tablet.',
//             'age': 2
//         },
//         {
//             'name': 'MOTOROLA XOOM™',
//             'snippet': 'The Next, Next Generation tablet.',
//             'age': 3
//         }
//     ];
//     $scope.name = "World";
//     // set the default value of orderProp by age. Otherwise, the filter would 
//     // remain uninitialized until the user selects an option.
//     $scope.orderProp = 'age';
// });

