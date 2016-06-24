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
				if(window.Prototype) {
					 delete Object.prototype.toJSON;
					 delete Array.prototype.toJSON;
					 delete Hash.prototype.toJSON;
					 delete String.prototype.toJSON;
				}
				var params = JSON.stringify({search: {id: localStorage.getItem('id'), tags: localStorage.getItem('tags')}});
        return $http.post(request, params).catch(function(error) {
				})
			}
		}
  })
