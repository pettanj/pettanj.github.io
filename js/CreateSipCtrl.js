angular.module('myApp').controller('CreateSipCtrl', function CreateSipCtrl($scope, $location){
    $scope.select = false;
    $scope.subSelect = false;
    $scope.edit = false;
    $scope.eventlog = false;

    $scope.pages = ['Info', 'Prepare Ip', 'Selection', 'Extraction', 'Manage Data', 'IP Approval', 'IP Management'];
    $scope.selectedPage = $scope.pages[0];

    $scope.toggleSelectView = function () {
        if($scope.select == false){
            $scope.select = true;
        } else {
            $scope.select = false;
        }
    };
    $scope.toggleSubSelectView = function () {
        if($scope.subSelect == false){
            $scope.subSelect = true;
        } else {
            $scope.subSelect = false;
        }
    };
    $scope.toggleEditView = function () {
        if($scope.edit == false){
            $scope.edit = true;
        } else {
            $scope.edit = false;
        }
    };
    $scope.toggleEventlogView = function() {
    if($scope.eventlog == false){
        $scope.eventlog = true;
    }else {
        $scope.eventlog = false;
    }
    }
});
