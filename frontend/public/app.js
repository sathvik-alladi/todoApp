var app = angular.module("app", []);

// app.controller("authController", function ($scope, $http) {

//     $scope.checkLoginDetails = function (username, password) {
//         $http.post("http://localhost:3000/auth/login", {
//             username: username,
//             password: password
//         })
//         .then(function (res) {
//             $scope.token = res.data;
//             console.log("Success:", res.data);
//         })
//         .catch(function () {
//             alert("Error logging in");
//         });
//     };

//     $scope.registerUser = function (username, password) {
//         $http.post("http://localhost:3000/auth/register", {
//             username: username,
//             password: password
//         })
//         .then(function (res) {

//         })
//         .catch(function () {
//             alert("Error registering");
//         });
//     };
// });

app.controller("todoController", function ($scope, $http) {

    $scope.todos = [];

    $scope.getAllTodos = function () {
        $http.get("http://localhost:3000/todos/all")
            .then(function (res) {
                $scope.todos = res.data;
            })
            .catch(function () {
                alert("Error fetching todos");
            });
    };

    $scope.getAllTodos();

    $scope.deleteTodo = function (id) {
        $http.delete("http://localhost:3000/todos/delete/" + id)
            .catch(function () {
                alert("Error deleting todo");
            });
    };
});

app.component("todoHeader", {
    template: `<h2>Todo App</h2>`
});

app.component('refreshButton', {
    bindings: { onRefresh: '&' },
    template: `<button ng-click="$ctrl.onRefresh()">Refresh</button>`
});

app.component('todoTable', {
    bindings: {
        list: '<',
        onDelete: '&'
    },
    template: 
        `<table border="1" ng-if="$ctrl.list.length">
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Completed</th>
                    <th>Action</th>
                </tr>
                <tr ng-repeat="todo in $ctrl.list" on-delete="$ctrl.onDelete({id: todo.id})">
                    <td>{{ todo.id }}</td>
                    <td>{{ todo.title }}</td>
                    <td>{{ todo.description }}</td>
                    <td>{{ todo.is_completed }}</td>
                    <td>
                        <button ng-click="$ctrl.onDelete({id: todo.id})">Delete</button>
                    </td>
                </tr>
        </table>`
});