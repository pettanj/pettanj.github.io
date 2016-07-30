angular.module('myApp').controller('CreateSipCtrl', function ($scope, $location){
    var vm = this;

    // Archivist
    // Organisation
    vm.archivistOrganisationModel = {
        ArchivistOrganisation: "Sigtuna Kommun"
    };
    vm.archivistOrganisationFields = [
    {
        key: 'ArchivistOrganisation',
        type: 'select',
        templateOptions: {
            label: 'Archivist organisation',
            placeholder: 'ArchivistOrganisation',
            options: [
            {
                name: "Petrus", value: "Petrus"
            },
            {
                name: 'oskar', value: "oskar"
            },
            {
                name: "Sigtuna kommun", value: "Sigtuna kommun"
            }
            ]
        }
    },
    {
        key: 'ArchivistOrganisationIdentity',
        type: 'input',
        templateOptions: {
            label: 'Archivist organisation identity',
            placeholder: 'Archivist organisation identity'
        }
    },
    {
        key: 'ArchivistOrganisationSoftware',
        type: 'input',
        templateOptions: {
            label: 'Archivist organisation software',
            placeholder: 'Archivist organisation software'
        }
    },
    {
        key: 'ArchivistOrganisationSoftwareIdentity',
        type: 'input',
        templateOptions: {
            label: 'Archivist organisation software identity',
            placeholder: 'Archivist organisation software identity'
        }
    }
    ];

    // Creator
    // Organisation
    vm.creatorOrganisationModel = {
        creatorOrganisation: "Riksarkivet"
    };

    vm.creatorOrganisationFields = [
    {
        key: 'CreatorOrganisation',
        type: 'input',
        templateOptions: {
            label: 'Creator organisation',
            placeholder: 'Creator organisation'
        }
    },
    {
        key: 'CreatorOrganisationIdentity',
        type: 'input',
        templateOptions: {
            label: 'Creator organisation identity',
            placeholder: 'Creator organisation identity'
        }
    },
    {
        key: 'CreatorOrganisationSoftware',
        type: 'input',
        templateOptions: {
            label: 'Creator organisation software',
            placeholder: 'Creator organisation software'
        }
    },
    {
        key: 'CreatorOrganisationSoftwareIdentity',
        type: 'input',
        templateOptions: {
            label: 'Creator organisation software identity',
            placeholder: 'Creator organisation software identity'
        }
    }
    ];

    vm.onSubmit = function() {
        alert(JSON.stringify(vm.archivistOrganisationModel) + " " + JSON.stringify(vm.creatorOrganisationModel));
    }
    $scope.select = false;
    $scope.subSelect = false;
    $scope.edit = true;
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
