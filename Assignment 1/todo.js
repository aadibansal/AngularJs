angular.module('todoApp', [])
  .controller('TodoListController', function() {
    var todoList = this;
    todoList.todos = [];
 
    todoList.addTodo = function() {
	  if(todoList.todoText.trim() == "")
		  return;
      todoList.todos.push(todoList.todoText);
      todoList.todoText = '';
    };
	
	todoList.remove = function(index) {
		console.log("jnkjn");
		console.log(index);
		todoList.todoText.splice(index,1);
	}
 });