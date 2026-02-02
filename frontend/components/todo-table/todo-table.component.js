app.component("todoTable", {
    bindings: {
        list: "<",
        onDelete: "&"
    },
    templateUrl: "todo-table.component.html"
});