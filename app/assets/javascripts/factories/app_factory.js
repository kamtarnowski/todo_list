angular.module('ToDoList')
.factory('AppFactory', [
  function() {
    var o = [];

    o.get_url = function() {
      return o.url;
    }

    o.save = function() {
      o.url = [];
      return o.url = window.location.href;
    };

    o.delete_url = function() {
      o.url = [];
    };

    return o;
  }
]);
