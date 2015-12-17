angular.module('ToDoList')
.factory('user', [
  '$http',
  '$stateParams',
  function($http, $stateParams) {
    var o = [];
    o.show = function() {
      return $http.get('/users/' + $stateParams.id).success(function(data){
        angular.copy(data, o.user);
      });
    };
  }
]);
