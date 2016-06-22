angular
    .module('brimApp', [
        'ngAnimate',
        'ui.router',
        'templates'
    ])
    .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

      $stateProvider
        .state('dashboard', {
            url: '/',
            templateUrl: 'dashboard.html',
            controller: 'DashboardCtrl'
        });

      $urlRouterProvider.otherwise('/');

      $locationProvider.html5Mode(true);

    });
