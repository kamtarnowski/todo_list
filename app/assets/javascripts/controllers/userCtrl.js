// angular.module('ToDoList')
// .controller('UserCtrl', [
//   '$scope',
//
//   function($scope) {
//     $scope.
//   }
// ]);

angular.module('ToDoList')
.controller('UserCtrl', [
  '$scope',
  'User',
  '$stateParams',
  function($scope, User, $stateParams) {
    $scope.user = User.get_user($stateParams.id);
  }
]);
