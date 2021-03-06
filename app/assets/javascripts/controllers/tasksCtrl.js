angular.module('ToDoList')
.controller('TasksCtrl', [
  '$scope',
  'Task',
  '$stateParams',
  'User',
  '$state',
  'AppFactory',
  "Auth",
  'Category',
  function($scope, Task, $stateParams, User, $state, AppFactory, Auth, Category) {
    Auth.currentUser().then(function() {
      $scope.visible = true;
    }, function(error) {
      $scope.visible = false;
      $state.go('home');
      alertify.error('You are not authorized.');
    });
    $scope.tasks = function() {
      AppFactory.save();
      Task.index().success(function(response) {
        $scope.tasks = response;
      }).error(function() {
        alertify.error("Error has occured.")
      });
    };
    $scope.search_task = function() {
      Task.find($stateParams.id).success(function(response) {
        $scope.task = response[0];
        $scope.user = response[1];
        $scope.fixed_title = $scope.task.title;
        $scope.fixed_user = response[1];
        $scope.fixed_category = response[2];
      }).error(function() {
        alertify.error("Error has occured.");
      });
    };
    $scope.users = function() {
      User.index().success(function(response) {
        $scope.users = response;
      })
      .error(function() {
        $scope.users = [];
      });
    };
    $scope.selected = function() {
      $scope.user_id = $scope.task.user_id.id;
    };
    $scope.edit = function() {
      Task.edit($scope.task.id).update({
                                        title: $scope.task.title,
                                        description: $scope.task.description,
                                        completed: $scope.task.completed,
                                        user_id: $scope.task.user.id,
                                        category_id: $scope.task.category.id
        },
        function() {
          $state.go('tasks');
          alertify.success('Task data has been succesfully changed.');
        },
        function() {
          alertify.error('Wrong data input.');
        })
    };
    $scope.destroy = function(task, index) {
      if (confirm("Are you sure you want to delete this task?")){
      Task.destroy(task.id).success(function() {
        $scope.tasks.splice(index, 1);
        alertify.success('Task has been deleted.');
      })
      .error(function() {
        alertify.error('Task has not been deleted.')
      });
    };
    };
    $scope.drag_and_drop = function() {
      $scope.$on('$dropletReady', function whenDropletReady() {
        $scope.interface.allowedExtensions(['png', 'jpg', 'bmp', 'gif']);
      });
    };
    $scope.new = function() {
      Task.new({title: $scope.task.title,
                description: $scope.task.description,
                completed: $scope.task.completed,
                user_id: $scope.task.user.id,
                category_id: $scope.task.category.id})
      .success(function() {
        $scope.interface.uploadFiles();
        $state.go('tasks');
        alertify.success('Task has been succesfully created.')
      })
      .error(function() {
        alertify.error('There was a problem with new task.')
      });
    };
    $scope.show = function() {
      $scope.back_url = AppFactory.get_url();
      AppFactory.delete_url();
      Task.show($stateParams.id).success(function(response) {
        $scope.task = response[0];
        $scope.user = response[1];
        $scope.user_tasks = response[2];
        $scope.category = response[3];
      }).error(function() {
        alertify.error("Error has occured.");
      });
    };
    $scope.categories = function() {
      Category.index().success(function(response) {
        $scope.categories = response;
      })
      .error(function() {
        $scope.categories = [];
      });
    };
  }
]);
