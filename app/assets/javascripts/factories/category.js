angular.module('ToDoList')
.factory('Category', [
  '$http',
  function($http) {
    c = [];

    c.index = function() {
      return $http.get('/categories.json', {});
    };

    c.delete = function(id) {
      return $http.delete('/categories/' + id + ".json", {});
    };

    c.create = function(category_params) {
      return $http.post('/categories.json', {category: category_params});
    };

    return c;
  }
]);
