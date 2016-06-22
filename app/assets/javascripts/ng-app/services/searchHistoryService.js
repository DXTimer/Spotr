'use strict';

brimApp.service('SearchHistoryService', function($http, $window) {
		var home = $window.location.protocol + "//" + $window.location.host
		return {
			'get': function() {
				var request = home + '/api/users/'+ localStorage.getItem('id') + "/searches";
				return $http.get(request).then(function(response){
					console.log(response);
				})
      },
      'post': function() {
				var request = home + '/api/users/'+ localStorage.getItem('id') + "/searches";
        var params = JSON.stringify({id:1, uid: "2"});
        return $http.post(request, params).then(function(response){
          console.log(params)
          console.log(response);
				})
			}
		}
  })
