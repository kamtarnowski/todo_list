angular.module('ToDoList')
.controller('UsersCtrl', [
  '$scope',
  'User',
  'AppFactory',
  function($scope, User, AppFactory) {
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
  }
]);
