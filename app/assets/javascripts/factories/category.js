angular.module('ToDoList')
.factory('Category', [
  '$http',
  function($http) {
    c = [];

    c.index = function() {
      return $http.get('/categories.json', {});
    };

    return c;
  }
]);
