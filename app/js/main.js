(function() {
    'use strict';
    require.config({
        paths: {
            'angular': '../bower_components/angular/angular',
            'AngularRoute': '../bower_components/angular-route/angular-route',
            'App': 'app',
            'Controllers': 'controllers'
        }
    });
    require(['angular', 'App', 'Controllers'], function(angular, App, Controllers) {
        angular.bootstrap(document, ['phonecatApp']);
    });
}).call(this);
