angular.module('ToDoList')
.controller('UsersCtrl', [
  '$scope',
  'User',
  'AppFactory',
  '$state',
  function($scope, User, AppFactory, $state) {
    AppFactory.save();
    User.index().success(function(response) {
      $scope.users = response;
    })
    .error(function() {
      alertify.error("Error has occured.")
    });

    $scope.edit = function(id, email, username) {
      var user = User.edit_user(id).update({id: id, email: email, username: username},
        function() {
          alertify.success('User data has been succesfully changed.');
        },
        function() {
          alertify.error('Wrong data input.');
        })
    };
    $scope.destroy = function(id) {
      User.destroy(id).success(function() {
        $state.go('users');
        alertify.success('User has been deleted.')
      })
      .error(function() {
        alertify.error('User has not been deleted.')
      })
    };
  }
]);
