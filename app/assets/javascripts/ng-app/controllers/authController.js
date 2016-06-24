brimApp.controller('AuthController', function($state, $interval, $http, $scope, $window, $location, $rootScope, $auth, $http, SearchHistoryService, AuthService) {
  var jsonResponse;
  var pollInterval;

  $scope.handlePopupAuthentication = function handlePopupAuthentication(network, account) {
    $scope.$apply(function() {
      $scope.applyNetwork(network, account);
    });
  }

  $scope.authNetwork = function authNetwork(network) {
    var home = $window.location.protocol + "//" + $window.location.host + "/users/auth/"
    var openUrl = home + network + '?client_id=' + "94604331f352484ebaec0996c28ebc07" + "&redirect_uri=" + home + "instagram/callback" + "&response_type=code";
    window.$windowScope = $scope;
    var popup = window.open(openUrl, 'Authenticate Account', "width=500, height=500");
    var poll = $interval(function() {
      if ($window.location.host === popup.location.host) {
        jsonResponse = JSON.parse(popup.document.getElementsByTagName('PRE')[0].firstChild.data);
        if (jsonResponse.data.username) {
          localStorage.setItem('username', JSON.stringify(jsonResponse.data.username));
          localStorage.setItem('id', JSON.stringify(jsonResponse.data.id));
          localStorage.setItem('token', JSON.stringify(jsonResponse.data.token));
          localStorage.setItem('profile_picture', JSON.stringify(jsonResponse.data.profile_picture));
          $rootScope.logged_in = true;
          if(AuthService.isAuthenticated()) {
            SearchHistoryService.get()
          }
          $interval.cancel(poll);
          popup.close();
          return $state.go('dashboard');
        }
      }
      }, 20)
  };

});
