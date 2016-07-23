angular.module('myApp', ['ngRoute', 'treeControl', 'ui.bootstrap']).config(function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'my_page.html'
    })
    .when('/create-SIP', {
        templateUrl: 'create_sip.html'
    })
    .when('/submit-SIP', {
        templateUrl: 'submit_sip.html'
    })
    .when('/recieve-SIP', {
        templateUrl: 'recieve_sip.html'
    })
    .otherwise({
        redirectTo: '/404'
    });
});

