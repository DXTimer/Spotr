'use strict';

brimApp.service('SearchHistoryService', function($http, $window) {
		var home = $window.location.protocol + "//" + $window.location.host
		return {
			'get': function() {
				var request = home + '/api/users/'+ localStorage.getItem('id') + "/searches";
				return $http.get(request).then(function(response) {
          var tags = [];
          response.data.forEach(function(tag) {
            tags.push(tag.tag_name);
          })
					localStorage.setItem('tags', JSON.stringify(tags));
				}).catch(function(error) {
        })
      },
      'post': function() {
				var request = home + '/api/users/'+ localStorage.getItem('id') + "/searches";
        var params = JSON.stringify({search: {id:1, uid: 2, tags: ["ball", "cat"]}});
        return $http.post(request, params).catch(function(error) {
				})
			}
		}
  })
