brimApp.service('GetGeocodeService', ['$http', function($http) {


  var base = 'https://maps.googleapis.com/maps/api/geocode/json?address=';
  var key = '&key=AIzaSyDjqjD9OgS7NSMVGTIjBRcNYh5BAe4gXCY';
  return {
        'getGeocode': function(address) {

          var formatedAddress = address.split(' ').join('+');
          var request = formatedAddress + key ;
          var url = base + request;

          return $http.get(url).then(function(response){
            return response.data.results;
          });
        }
      };
}]);
