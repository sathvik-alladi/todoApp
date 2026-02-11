app.service("todoService", function($http) {
    const basePath = "http://localhost:3000/todos/";

    this.getAllTodos = function() {
        return $http.get(basePath + "all");
    };
    
    this.deleteTodo = function(id) {
        return $http.delete(basePath + "delete/" + id);
    };

    //later, add image_path
    this.addTodo = function(title, description) {
        return $http.post(basePath + "add", {
            title,
            description
        });
    }

    //later, add image_path
    this.updateTodo = function(title, description, is_completed) {
        return $http.patch(basePath + "update", {
            title,
            description,
            is_completed
        });
    }
});