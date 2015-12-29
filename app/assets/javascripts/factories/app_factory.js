angular.module('ToDoList')
.factory('AppFactory', [
  function() {
    var o = {
      url: []
    };

    o.get_url = function() {
      return o.url;
    }

    o.save = function() {
      o.url = [];
      return o.url = window.location.href;
    };

    return o;
  }
]);
