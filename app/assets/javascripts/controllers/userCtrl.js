angular.module('ToDoList')
.controller('UserCtrl', [
  'AppFactory',
  '$scope',
  'User',
  '$stateParams',
  '$state',
  '$window',
  'Task',
  function(AppFactory, $scope, User, $stateParams, $state, $window, Task) {
    $scope.edit_user = function() {
      User.get_user($stateParams.id).success(function(response) {
        $scope.user = response;
        $scope.staticUsername = $scope.user.username;
      })
      .error(function() {
        alertify.error('Error has occured.')
      });
    };
    $scope.edit_button = true;
    $scope.edit = function() {
      var user = User.edit_user($scope.user.id).update({id: $scope.user.id, email: $scope.user.email, username: $scope.user.username},
        function() {
          if (AppFactory.get_url() != []) {
            $window.location.href = AppFactory.get_url();
            AppFactory.delete_url();
          } else {
          $state.go('home');
          }
          alertify.success('User data has been succesfully changed.');
        },
        function() {
          alertify.error('Wrong data input.');
        })
    };
    $scope.find = function() {
      User.get_user($stateParams.id, 'tasks').success(function(response) {
        $scope.user = response[0];
        $scope.active_tasks = response[1];
        $scope.inactive_tasks = response[2];
        var data = [
            {
                value: $scope.active_tasks.length,
                color:"#F7464A",
                highlight: "#FF5A5E",
                label: "Active tasks"
            },
            {
                value: $scope.inactive_tasks.length,
                color: "#46BFBD",
                highlight: "#5AD3D1",
                label: "Finished tasks"
            }
        ]
        var ctx = document.getElementById("global_stats").getContext("2d");
        var myPieChart = new Chart(ctx).Pie(data);

        Task.active_stats($scope.user.id).success(function(response) {
          $scope.first_scope = response[0];
          $scope.second_scope = response[1];
          $scope.third_scope = response[2];
          $scope.fourth_scope = response[3];
          $scope.fifth_scope = response[4];

          var data = [
              {
                  value: $scope.first_scope,
                  color:"#ff0000",
                  highlight: "#ff6666",
                  label: "1-20%"
              },
              {
                  value: $scope.second_scope,
                  color: "#ff8000",
                  highlight: "#ffa64d",
                  label: "21-40%"
              },
              {
                  value: $scope.third_scope,
                  color: "#ffcc99",
                  highlight: "#ffe6cc",
                  label: "41-60%"
              },
              {
                  value: $scope.fourth_scope,
                  color: "#aaff00",
                  highlight: "#c3ff4d",
                  label: "61-80%"
              },
              {
                  value: $scope.fifth_scope,
                  color: "#00ff00",
                  highlight: "#66ff66",
                  label: "81-100%"
              }
          ]

          var ctx = document.getElementById("active_stats").getContext("2d");
          var myDoughnutChart = new Chart(ctx).Doughnut(data);
        });
      })
      .error(function() {
        alertify.error('Error has occured.');
      });
    };
    $scope.tab_active_tasks = function() {
      AppFactory.save();
      $('#active_tasks').addClass('active');
      $('#inactive_tasks').removeClass('active');
      $('#tab_inactive_tasks').fadeOut('medium', function() {
        $('#tab_active_tasks').fadeIn();
      });
    };
    $scope.tab_inactive_tasks = function() {
      $('#inactive_tasks').addClass('active');
      $('#active_tasks').removeClass('active');
      $('#tab_active_tasks').fadeOut('medium', function() {
        $('#tab_inactive_tasks').fadeIn();
      });
    };
  }
]);
