angular.module('ToDoList')
.controller('CategoryCtrl', [
  "$scope",
  'Category',
  'Auth',
  function($scope, Category, Auth) {
    Auth.currentUser().then(function() {
      $scope.visible = true;
    }, function(error) {
      $scope.visible = false;
      $state.go('home');
      alertify.error('You are not authorized.');
    });
    $scope.index = function() {
      Category.index().success(function(response) {
        $scope.categories = response;
      })
      .error(function() {
        $scope.categories = [];
      });
    };
  }
]);
