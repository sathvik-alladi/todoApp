// app.component("todoTable", {
//     bindings: {
//         todo: '<',
//         onDelete: '&',
//         onEdit: '&',
//         onCancelEdit: '&'
//     },
//     controllerAs: "vm",
//     templateUrl: "components/todo-table/todo-table.component.html"
// });

app.component("todoTable", {
    bindings: {
        list: '<',
        editingTodo: '<',
        onDelete: '&',
        onEdit: '&',
        onCancelEdit: '&'
    },
    controllerAs: "vm",
    templateUrl: "components/todo-table/todo-table.component.html"
});