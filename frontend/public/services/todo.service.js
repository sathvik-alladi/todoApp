app.service("todoService", function($http) {
    const baseUrl = "http://localhost:3000/todos/";

    this.getAllTodos = function() {
        return $http.get(baseUrl + "all");
    };
    
    this.deleteTodo = function(id) {
        return $http.delete(baseUrl + "delete/" + id);
    };

    this.addTodo = function(title, description) {
        return $http.post(baseUrl + "add", {
            title: title,
            description: description
        });
    };

    this.updateTodo = function(id, title, description, is_completed) {
        return $http.patch(baseUrl + "update/" + id, {
            title: title,
            description: description,
            is_completed: is_completed
        });
    };
});