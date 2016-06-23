'use strict';

brimApp.service('GetTagsService', ['$http', function($http) {
		var base = "https://api.instagram.com/v1";
		var access_token = "&access_token=" + JSON.parse(localStorage.getItem('token'));

		return {
			'get': function(hashtag) {
				var request = '/tags/search?q=' + hashtag + access_token ;
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
