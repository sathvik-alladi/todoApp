app.directive('todoTableRow', function() {
    return {
        scope: {
            todo: '<',
            onDelete: '&'
        },
        templateUrl: 'components/todo-table/todo-table-row/todo-table-row.component.html'
    };
});