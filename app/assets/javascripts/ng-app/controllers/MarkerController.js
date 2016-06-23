angular.module("brimApp")
.controller('MapMarkerCtrl', function($scope, $element, mapMarkerService){
  var latlng = new google.maps.LatLng($scope.location.lat, $scope.location.lng);
  var googleOverlayView = new mapMarkerService.GoogleOverlayView($element, latlng);
  googleOverlayView.setMap($scope.gmap);
})