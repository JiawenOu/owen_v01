

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
	$scope.rooms = [{
					Id: 1,
					Name: 'One',
					Num: 'rn1',
				},  {
					Id: 2,
					Name: 'Two',
					Num: 'rn2',
				},  {
					Id: 3,
					Name: 'Three',
					Num: 'rn3',
				}, 	{
					Id: 4,
					Name: 'Four',
					Num: 'rn4',
				}];
});