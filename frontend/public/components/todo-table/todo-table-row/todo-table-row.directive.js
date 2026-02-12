app.directive('todoTableRow', function() {
    return {
        scope: {
            todo: '<',
            editingTodo: '<',
            onDelete: '&',
            onEdit: '&',
            onCancelEdit: '&'
        },
        templateUrl: 'components/todo-table/todo-table-row/todo-table-row.component.html'
    };
});