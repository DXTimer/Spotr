var brimApp = angular
  .module('brimApp', [ 'ngAnimate','ui.router','templates', 'satellizer', 'ngMap', 'ngMessages'
  ])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider, $authProvider) {

    // $authProvider.httpInterceptor = false;
    $authProvider.withCredentials = false;
    $authProvider.instagram({
      clientId: '94604331f352484ebaec0996c28ebc07',
      url: '/users/auth/instagram',
      redirectUri: 'http://localhost:3000/users/auth/instagram/callback'
    })

    $stateProvider
      .state('login', {
          url: '/login',
          templateUrl: 'login.html',
          controller: 'AuthController',
          data: {
            requireLogin: false
          }
      })
      .state('dashboard', {
          url: '/dashboard',
          templateUrl: 'dashboard.html',
          controller: 'DashboardController',
          data: {
            requireLogin: true
          }
      });

    $urlRouterProvider.otherwise('/dashboard');

    $locationProvider.html5Mode(true);

  })

  .directive('mapMarker', function () {
  return {
    restrict: 'E',
    controller: 'MapMarkerCtrl'
    }
  })

  .run(function ($rootScope, $state) {
    $rootScope.$on("$stateChangeStart", function(event, toState, toParams){
      var requireLogin = toState.data.requireLogin;

      if (requireLogin && typeof localStorage.username === 'undefined') {
        event.preventDefault();
        return $state.go('login');
      }
    });
  });
