angular.module('ToDoList')
.controller('UserCtrl', [
  '$scope',
  'User',
  '$stateParams',
  function($scope, User, $stateParams) {
    User.get_user($stateParams.id).success(function(response) {
      $scope.user = response;
    });
    $scope.edit_button = true;
    // $scope.edit = function() {
    //   User.edit_user($scope.user.id, [$scope.user.email, $scope.user.username, $scope.user.password, $scope.user.password_confirmation]).success(function() {
    //     // $state.go('home');
    //     alertify.success('good');
    //   }).error(function() {
    //     // $state.go('home');
    //     alertify.error('żle');
    //   });
    // };
    $scope.edit = function() {
      var user = User.edit_user($scope.user.id).update({id: $scope.user.id, email: $scope.user.email, password: $scope.user.password, password_confirmation: $scope.user.password_confirmation, username: $scope.user.username},
        function() {
          alertify.success('good');
        },
        function() {
          alertify.error('zle');
        })
    }
  }
]);
