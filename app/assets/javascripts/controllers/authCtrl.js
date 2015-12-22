angular.module('ToDoList')
.controller('AuthCtrl', [
  '$scope',
  '$state',
  'Auth',
  function($scope, $state, Auth){
    $scope.login = function() {
      Auth.login($scope.user).then(function() {
        $state.go('home');
        alertify.success('Authentication succeeded.');
      }, function(error) {
        $state.go('login');
        alertify.error('Authentication failed.');
      });
    };

    $scope.register = function() {
      Auth.register($scope.user).then(function() {
        $state.go('home');
        alertify.success('Registration succeeded.');
      }, function(error) {
        $state.go('register');
        alertify.error('Registration failed.');
      });
    };
  }
]);
