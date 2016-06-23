angular.module("brimApp")
.controller("geolocationController", function(NgMap) {
  var self = this;

  self.pointers = [
    {"latitude": 51.2, "longitude": -0.1}, {"latitude": 51.29, "longitude": -0.1}
  ];

  self.customIcon = {
    "scaledSize": [32,32],
    "url": "https://cdn0.iconfinder.com/data/icons/weboo-2/512/pin.png",
    "class": ".polaroids"
  }
  
  self.message = 'You can not hide. :)';

  self.callbackFunc = function(param) {
    console.log(map);
    console.log('I know where' + param + 'are.' + self.message);
    console.log('You are at' + map.getCenter());
  };

});