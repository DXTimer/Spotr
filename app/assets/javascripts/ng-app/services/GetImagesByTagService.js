'use strict';

brimApp.service('GetImagesByTagService', ['$http', function($http) {
    var base = "https://api.instagram.com/v1";
    var access_token = 'access_token=3414423759.9460433.24ba738c23824cbd82e82201dc10dc57';
    return {
      'get': function(hashtag) {
        var request = '/tags/'+hashtag+"/media/recent?"+access_token ;
        var url = base + request;
        var config = {
          'params': {
            'callback': 'JSON_CALLBACK'
          }
        };
        return $http.jsonp(url, config).then(function(response){
					return response.data;
				});
      }
    };
  }
]);
