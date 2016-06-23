'use strict';

brimApp.service('GetImageByLocationService', ['$http', function($http) {
    var base = "https://api.instagram.com/v1";
    var access_token = 'access_token=3414423759.9460433.24ba738c23824cbd82e82201dc10dc57';

    self = this

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
        var returnData = []
        return $http.jsonp(idUrl, config).then(function(response){
          response.data.data.forEach(function(location){
            if(location.id!=='0'){
              var imageRequest = "/locations/" + location.id + "/media/recent?" + access_token
              var imageUrl = base + imageRequest

              $http.jsonp(imageUrl, config).then(function(response){
                returnData.push(response.data.data)
              });
            }
          });
          return returnData;
        });
      }
    };

    //     // Hampton Court
    //     // var lat = "51.4036535"+"&";
    //     // var lng = "-0.3493859"+"&";



  }
]);