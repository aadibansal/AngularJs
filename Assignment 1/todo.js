angular.module('todoApp', [])
  .controller('TodoListController', function() {
    var todoList = this;
    todoList.todos = [];
 
    todoList.addTodo = function() {
      todoList.todos.push(todoList.todoText);
      todoList.todoText = '';
    };
 });