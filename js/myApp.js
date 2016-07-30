angular.module('myApp', ['ngRoute', 'treeControl', 'ui.bootstrap', 'formly', 'formlyBootstrap']).config(function($routeProvider, formlyConfigProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'my_page.html'
        })
    .when('/create-SIP', {
        templateUrl: 'create_sip.html',
        controller: 'CreateSipCtrl as vm'
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

