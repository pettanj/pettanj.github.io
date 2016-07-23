angular.module('myApp', []).controller('myCtrl', function myCtrl($scope) {
    $scope.people = [
    { name: "Joachim",
        age: 22
    },
    {  name: "Elias",
        age: 22
    },
    {
        name: "Petrus",
        age: 23
    }
    ];
});
