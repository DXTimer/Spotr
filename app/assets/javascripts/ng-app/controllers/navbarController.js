brimApp.controller('NavBarController', function($state, $scope, $rootScope) {

    $rootScope.logged_in = Boolean(localStorage.getItem('id'));

    $scope.logOut = function logOut() {
      console.log($rootScope.logged_in = false)
      localStorage.clear();
      return $state.go('login');
   }
   $scope.username = JSON.parse(localStorage.getItem('username'))
   $scope.profile_picture = JSON.parse(localStorage.getItem('profile_picture'))
});
