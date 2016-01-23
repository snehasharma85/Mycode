/*angular.module("myApp").controller('AppCtrl', [ '$scope', function($scope) {
  $scope.message = 'Hello World!';  

  $scope.career=[
  	{ name: 'Doc', completed:true},
  	{ name: 'Engg', completed:false},
  	{ name: 'Nurse', completed:false},
  	{ name: 'Polices', completed:true},
  ];
}]);

*/

angular.module("myapp", ['ngRoute'])
  .controller('TodoController', ['$scope', function ($scope) {
    $scope.todos = [
      { name: 'Master HTML/CSS/Javascript', completed: true },
      { name: 'Learn AngularJS', completed: false },
      { name: 'Build NodeJS backend', completed: false },
      { name: 'Get started with ExpressJS', completed: false },
      { name: 'Setup MongoDB database', completed: false },
      { name: 'Be awesome!', completed: false },
    ];
  }]);