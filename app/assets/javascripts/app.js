angular.module('ToDoList', ['ui.router', 'templates', 'Devise', 'ngResource'])

.controller('AppCtrl', ["$scope", function($scope) {
  $scope.$back = function() {
    window.history.back();
  }
}])

.config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: '/templates/_home.html'
      })
      .state('login', {
        url: '/login',
        templateUrl: '/templates/_login.html',
        controller: 'AuthCtrl',
        onEnter: ['$state', 'Auth', function($state, Auth) {
          Auth.currentUser().then(function (){
            $state.go('home');
            alertify.error('You are already signed in.');
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
            alertify.error('You are already signed in.');
          });
        }]
      })
      .state('profile', {
        url: '/profile/:id',
        templateUrl: '/templates/_profile.html',
        controller: 'UserCtrl'
      })
      .state('tasks', {
        url: '/tasks',
        templateUrl: '/templates/_tasks.html',
        controller: 'TasksCtrl'
      })
      .state('users', {
        url: '/users',
        templateUrl: '/templates/_users.html',
        controller: 'UsersCtrl'
      })
      .state('edit_user', {
        url: '/edit_user/:id',
        templateUrl: 'templates/_edit_user.html',
        controller: 'UserCtrl'
      })
      state('edit_task', {
        url: '/edit_task/:id',
        templateUrl: 'templates/_edit_task.html',
        controller: 'TasksCtrl'
      });

    $urlRouterProvider.otherwise('home');
}])
;
