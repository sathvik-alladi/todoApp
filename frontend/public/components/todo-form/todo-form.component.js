app.component("todoForm", {
    bindings: {
        onAdd: "&"
    },

    controller: todoFormSubmission,
    controllerAs: "vm",
    templateUrl: "components/todo-form/todo-form.component.html"
});

function todoFormSubmission() {
    var vm = this;
    vm.todo = {
        title: "",
        description: ""
    }

    vm.submitForm = function() {
        if(!vm.todo.title) {
            alert("title is required");
            return;
        };

        vm.onAdd({ todo: vm.todo });
            
        vm.todo = {
            title: "",
            description: ""
        };
    };
};