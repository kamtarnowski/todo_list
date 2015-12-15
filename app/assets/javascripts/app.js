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
        templateUrl: '/templates/_home.html',
        controller: 'MainCtrl'
      })
      .state('login', {
        url: '/login',
        templateUrl: '/templates/_login.html',
        controller: 'AuthCtrl',
        onEnter: ['$state', 'Auth', function($state, Auth) {
          Auth.currentUser().then(function (){
            $state.go('home');
          });
        }]
      })
      .state('register', {
        url: '/register',
        templateUrl: '/templates/_register.html',
        controller: 'AuthCtrl',
        onEnter: ['$state', 'Auth', function($state, Auth) {
          Auth.currentUser().then(function (){
            $state.go('home');
          });
        }]
      })
      .state('profile', {
        url: '/profile/:id',
        templateUrl: '/templates/_profile.html',
        controller: 'UserCtrl',
        resolve: {
          userPromise: ['user', function(user){
            return user.show();
          }]
        }
      });

    $urlRouterProvider.otherwise('home');
}])
;
