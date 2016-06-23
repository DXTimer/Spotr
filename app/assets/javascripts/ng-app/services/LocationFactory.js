angular.module("brimApp")
.factory('locationFactory', function() {

  var location = function(name, caption, lat, lng, url) {
    this.name = name,
    this.caption = caption,
    this.lat = lat,
    this.lng = lng,
    this.url = url
  };

  return location

});