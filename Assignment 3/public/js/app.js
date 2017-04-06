angular.module('jgalindo', ['ui.router', 'jgalindo.controllers', 'jgalindo.services'])

.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider

    // Views and Routes
    .state('home', {
        url: '/home',
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
    })
    .state('results', {
        url: '/results',
        templateUrl: 'templates/results.html',
        controller: 'resultsCtrl'
    })
    .state('details', {
        url: '/details',
        templateUrl: 'templates/details.html',
        controller: 'detailsCtrl'
    });

    $urlRouterProvider.otherwise('/home')
});
