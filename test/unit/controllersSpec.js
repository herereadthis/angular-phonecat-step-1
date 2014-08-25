'use strict';

/* jasmine specs for controllers go here */
describe('PhoneCat controllers', function() {
    describe('PhoneListCtrl', function(){
        // from angular mocks
        var scope, ctrl, $httpBackend;
        // before each test , tell Angular to load the phonecatApp module
        beforeEach(module('phonecatApp'));

        // The injector ignores leading and trailing underscores here (i.e. _$httpBackend_).
        // This allows us to inject a service but then attach it to a variable
        // with the same name as the service in order to avoid a name conflict.
        // use inject helper method to inject instances of $rootscope, $controller, 
        // and $httpBackend into Jasmine's beforeEach function
        // mock service allows to write tests without having to deal with native APIs
        beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
            $httpBackend = _$httpBackend_;
            // tell $httpBackend service  to expect an incoming HTTP request
            $httpBackend.expectGET('phones/phones.json').
            respond([{name: 'Nexus S'}, {name: 'Motorola DROID'}]);

            // new scope for our controller called $rootScope
            scope = $rootScope.$new();
            ctrl = $controller('PhoneListCtrl', {$scope: scope});
        }));
        it('should create "phones" model with 2 phones fetched from xhr', function() {
            expect(scope.phones).toBeUndefined();
            $httpBackend.flush();

            expect(scope.phones).toEqual([
                    {name: 'Nexus S'},
                    {name: 'Motorola DROID'}
                ]
            );
        });
        it('should set the default value of orderProp model', function() {
            expect(scope.orderProp).toBe('age');
        });
        // from earlier hard-coded data
        // beforeEach(inject(function($controller) {
        //     scope = {};
        //     // We use $controller to create an instance of the PhoneListCtrl
        //     ctrl = $controller('PhoneListCtrl', {$scope:scope});
        // }));
        // // We ask Angular to inject the $controller service into our test function
        // it('should create "phones" model with 3 phones', function() {

        //     expect(scope.phones.length).toBe(3);
        //     expect(scope.name).toBe('World');
        // });

        // it('should set the default value of orderProp model', function() {
        //     expect(scope.orderProp).toBe('age');
        // });
    });
});