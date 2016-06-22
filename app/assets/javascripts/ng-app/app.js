var brimApp = angular
    .module('brimApp', [ 'ngAnimate','ui.router','templates', 'satellizer', 'ngMap', 'ngMessages'
    ])
    .config(function ($stateProvider, $urlRouterProvider, $locationProvider, $authProvider) {

      $authProvider.instagram({
        clientId: '94604331f352484ebaec0996c28ebc07',
        url: '/users/auth/instagram',
        redirectUri: 'http://localhost:3000/users/auth/instagram/callback'
      })

      $stateProvider
        .state('login', {
            url: '/',
            templateUrl: 'login.html',
            controller: 'AuthController'
        })
        .state('dashboard', {
            url: '/',
            templateUrl: 'dashboard.html',
            controller: 'DashboardCtrl'
        });

      $urlRouterProvider.otherwise('/');

      $locationProvider.html5Mode(true);

    });
