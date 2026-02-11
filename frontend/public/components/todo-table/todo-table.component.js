app.component("todoTable", {
    bindings: {
        list: "<",
        onDelete: "&"
    },
    controllerAs: "vm",
    templateUrl: "components/todo-table/todo-table.component.html"
});