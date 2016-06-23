brimApp.controller('AuthController', function($interval, $http, $scope, $window, $location, $rootScope, $auth, $http, SearchHistoryService, AuthService) {
  var jsonResponse;
  var pollInterval;
  $scope.handlePopupAuthentication = function handlePopupAuthentication(network, account) {
    $scope.$apply(function() {
      $scope.applyNetwork(network, account);
    });
  }

  $scope.authNetwork = function authNetwork(network) {
    var openUrl = 'http://localhost:3000/users/auth/' + network + '?client_id=' + "94604331f352484ebaec0996c28ebc07" + "&redirect_uri=" + "http://localhost:3000/users/auth/instagram/callback" + "&response_type=code";
    window.$windowScope = $scope;
    var popup = window.open(openUrl, 'Authenticate Account', "width=500, height=500");

    var poll = $interval(function() {
      jsonResponse = JSON.parse(popup.document.getElementsByTagName('PRE')[0].firstChild.data);
      if (jsonResponse.data.username) {
        console.log(jsonResponse);
        localStorage.setItem('username', JSON.stringify(jsonResponse.data.username));
        localStorage.setItem('id', JSON.stringify(jsonResponse.data.id));
        localStorage.setItem('token', JSON.stringify(jsonResponse.data.token));
        if(AuthService.isAuthenticated()) {
          console.log(SearchHistoryService.get())
          console.log(SearchHistoryService.post())
        }
        $interval.cancel(poll);
        popup.close();
      };
      }, 20)
  };
});
