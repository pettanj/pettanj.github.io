angular.module('myApp', ['abn_tree', 'ui-bootstrap']).controller('AbnTreeCtrl', function ($scope) {
    $scope.my_data = [{
        label: 'Languages',
        children: ['Jade','Less','Coffeescript'],
        classes: ["special", "red"]
    }]
});
