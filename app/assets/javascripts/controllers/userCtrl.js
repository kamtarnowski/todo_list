angular.module('ToDoList')
.controller('UserCtrl', [
  'AppFactory',
  '$scope',
  'User',
  '$stateParams',
  '$state',
  '$window',
  function(AppFactory, $scope, User, $stateParams, $state, $window) {
    User.get_user($stateParams.id).success(function(response) {
      $scope.user = response;
      $scope.staticUsername = $scope.user.username;
    });
    $scope.edit_button = true;
    $scope.edit = function() {
      var user = User.edit_user($scope.user.id).update({id: $scope.user.id, email: $scope.user.email, username: $scope.user.username},
        function() {
          if (AppFactory.get_url() != []) {
            $window.location.href = AppFactory.get_url();
          } else {
          $state.go('home');
          }
          alertify.success('User data has been succesfully changed.');
        },
        function() {
          alertify.error('Wrong data input.');
        })
    };
  }
]);
