brimApp.service('AuthService', function() {
  this.isAuthenticated = function isAuthenticated() {
    var currentUser = localStorage.getItem('username');
    if (typeof currentUser === 'undefined') {
      return false
    } else {
      return true
    }
  }
});