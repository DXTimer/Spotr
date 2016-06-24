'use strict';

brimApp.service('GetImageByLocationService', ['$http', function($http) {
    var base = "https://api.instagram.com/v1";
    var access_token = "&access_token=" + JSON.parse(localStorage.getItem('token'));

    return {
      'get': function(lat,lng) {
        var lat = lat+"&";
        var lng = lng+"&";

        var idRequest = "/locations/search?lat="+ lat + "lng=" + lng + access_token ;
        var idUrl = base + idRequest;
        var config = {
          'params': {
            'callback': 'JSON_CALLBACK'
          }
        };
        return $http.jsonp(idUrl, config).then(function(response){
          var imageRequest = "/locations/" + response.data.data[0].id + "/media/recent?" + access_token
          var imageUrl = base + imageRequest
          return $http.jsonp(imageUrl, config)
        });
      }
    };

  }
]);
