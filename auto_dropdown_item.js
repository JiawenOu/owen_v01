

var test = angular.module('MyApp', []);
test.controller('MyController', function($scope) {
	$scope.Fruits = [{
                Id: 1,
                Name: 'Apple'
            }, {
                Id: 2,
                Name: 'Mango'
            }, {
                Id: 3,
                Name: 'Orange'
            }, {
            	Id: 4,
            	Name: 'Strawberry'
            }];
});