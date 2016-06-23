brimApp.directive('serverError', function() {
  return {
    restrict: 'A',
    require: 'ngModel',
    link: function(scope, element, attr, ctrl) {
      element.on('keydown', function() {
        ctrl.$setValidity('server', true)
      });
    }
  }
});