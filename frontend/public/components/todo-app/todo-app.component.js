app.component("todoApp", {
    controller: todoFunctions,
    controllerAs: "vm",

    templateUrl: "components/todo-app/todo-app.component.html"
});

todoFunctions.$inject = ["todoService"];

function todoFunctions(todoService) {
    var vm = this;
    vm.todos = [];
    vm.editingTodo = null;

    vm.$onInit = function() {
        vm.getAllTodos();
    };

    vm.getAllTodos = function() {
        return todoService.getAllTodos()
            .then(function(res) {
                vm.todos = res.data;

                vm.todos.forEach(function(todo) {
                    todo.isDeleted = false;
                });
            })
            .catch(function(err) {
                alert("Error fetching todos: " + err);
            });
    };

    vm.deleteAndRefresh = function () {
        vm.deleteMarkedTodos();
        vm.getAllTodos();
    }

    vm.toggleDelete = function(todo) {
        if(todo.isDeleted === true) {
            todo.isDeleted = false;
        } else {
            todo.isDeleted = true;
        }
    };

    vm.deleteMarkedTodos = function() {
        var todosToDelete = vm.todos.filter(function(todo) {
            return todo.isDeleted === true;
        });
                    
        var deletePromises = todosToDelete.map(function(todo) {
            return todoService.deleteTodo(todo.id);
        });
        
        return Promise.all(deletePromises);
    };

    vm.addTodo = function(todo) {
        return todoService.addTodo(todo.title, todo.description)
            .then(function(res) {
                vm.getAllTodos();
            })
            .catch(function(err) {
                alert("Error adding todo: " + err);
            });
    };

    vm.updateTodo = function(todo) {
        return todoService.updateTodo(todo.id, todo.title, todo.description, todo.is_completed)
            .then(function(res) {
                vm.editingTodo = null;
                vm.getAllTodos();
            })
            .catch(function(err) {
                alert("Error updating todo: " + err);
            });
    }

    vm.editTodo = function(todo) {
        vm.editingTodo = angular.copy(todo);
    }

    vm.cancelEdit = function() {
        vm.editingTodo = null;
    }

    vm.handleFormSubmission = function(todo) {
        if (vm.editingTodo) {
            todo.id = vm.editingTodo.id;
            vm.updateTodo(todo);
        } else {
            vm.addTodo(todo);
        }
    }
};