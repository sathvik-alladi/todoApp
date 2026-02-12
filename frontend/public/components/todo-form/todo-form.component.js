app.component("todoForm", {
    bindings: {
        editingTodo: '<',
        onSubmit: "&",
        onCancel: "&"
    },

    controller: todoFormSubmission,
    controllerAs: "vm",
    templateUrl: "components/todo-form/todo-form.component.html"
});

function todoFormSubmission() {
    var vm = this;
    
    vm.todo = {
        title: "",
        description: "",
        is_completed: false
    };

    vm.$onChanges = function(changes) {
        if(changes.editingTodo && changes.editingTodo.currentValue) {
            vm.todo = {
                title: vm.editingTodo.title,
                description: vm.editingTodo.description,
                is_completed: vm.editingTodo.is_completed
            };
        } else if(changes.editingTodo && !changes.editingTodo.currentValue) {
            vm.todo = {
                title: "",
                description: "",
                is_completed: false
            };
        }
    };

    vm.submitForm = function() {
        if(!vm.todo.title) {
            alert("title is required");
            return;
        }

        vm.onSubmit({ todo: vm.todo });
        
        vm.todo = {
            title: "",
            description: "",
            is_completed: false
        };
    };

    vm.cancelEdit = function() {
        vm.todo = {
            title: "",
            description: "",
            is_completed: false
        };

        vm.onCancel();
    };
}