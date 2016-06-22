brimApp.controller('AuthController', function($interval, $http, $scope, $window, $location, $rootScope, $auth, $http) {

  $scope.handlePopupAuthentication = function handlePopupAuthentication(network, account) {
    $scope.$apply(function() {
      $scope.applyNetwork(network, account);
    });
  }
})
