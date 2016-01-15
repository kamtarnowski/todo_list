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
    $scope.delete = function(category_id, index) {
      Category.delete(category_id).success(function() {
        $scope.categories.splice(index, 1);
        alertify.success('Category has been deleted.');
      })
      .error(function() {
        alertify.error('Category has not been deleted.');
      });
    };

    $scope.create = function() {
      Category.create({ name: $scope.category.name })
      .success(function(response) {
        $scope.categories.push(response);
        alertify.success('Category has been created.');
      })
      .error(function() {
        alertify.error('Category has not been created.');
      });
    };
  }
]);
