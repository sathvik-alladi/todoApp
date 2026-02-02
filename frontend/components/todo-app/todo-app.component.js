app.component("todoApp", {
    controller: function(todoService) {
        var ctrl = this;
        ctrl.todos = [];

        ctrl.getAllTodos = function() {
            todoService.getAllTodos()
                .then(function(res) {
                    ctrl.todos = res.data;
                })
                .catch(function(err) {
                    alert("Error fetching todos; " + err)
                });
        }
    }
});