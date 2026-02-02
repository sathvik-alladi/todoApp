app.service("todoService", function($http) {
    this.getAllTodos = function() {
        return $http.get("http://localhost:3000/todos/all");
    };
    
    this.deleteTodo = function(id) {
        return $http.delete("http://localhost:3000/todos/delete/" + id);
    };
});