angular.module('ToDoList', ['ui.router', 'templates', 'Devise'])

.controller('MainCtrl', [
  '$scope',
  function($scope){
    $scope.home = 'Hello world!';
}])
.config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'templates/_home.html',
        controller: 'MainCtrl'
      });

    $urlRouterProvider.otherwise('home');
}])
;
