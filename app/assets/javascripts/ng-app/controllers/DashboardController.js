angular.module("brimApp")
.controller('DashboardController', function($q, $rootScope, $scope, $element, locationFactory, NgMap, mapMarkerService, GetGeocodeService, GetTagsService, GetImagesByTagService, GetImageByLocationService, locationFactory) {


  $scope.chosenTags = [];
  $scope.images = [];
  $scope.tags = [];

  $scope.andOr = 'or'

  $scope.testdata = [];

  $scope.locations = [];
  $scope.searchParam = [];




  // Instagram Controller

  $scope.getResponseSuccess = function(scope, res, err) {
    if (res.meta.code !== 200) {
      scope.error = res.meta.error_message;
      // scope.error = res.meta.error_type + ' | ' + res.meta.error_message;
      return;
    }
    if (res.data.length > 0) {
      return;
    } else {
      scope.error = err;
    }
  };

  // $scope.tester = function(lat,lng) {
  //   GetImageByLocationService.get(lat,lng).then(function(response) {
  //     return response
  //   }).then(function(response){
  //     response.forEach(function(array){
  //       $scope.testdata.push(array)
  //     })
  //   });
  // }

  $scope.setAndOr = function(arg){
    if(arg==='or'){
      $scope.andOr='or';
      $scope.searchParam = $scope.searchParam.replace(/\+/g,',');
    }
    if(arg==='and'){
      $scope.andOr='and';
      $scope.searchParam = $scope.searchParam.replace(/,/g,'+');
    }
  }

  $scope.setTagsOrLocation = function(arg){
    if(arg==='tag'){$scope.tagOrLocation = true}
    if(arg==='loc'){$scope.tagOrLocation = false}
  }

  $scope.tester = function() {
    $scope.images = [];
    var storage = [];
    var tags = $scope.searchParam.split("+")
    console.log(tags)
    GetImagesByTagService.get(tags[0]).then(function(response) {
      $scope.getResponseSuccess($scope, response, "This hashtag has returned no results" )
      response.data.forEach(function(image){
        var tagctr = 0;
        tags.forEach(function(tag) {
          if(image.tags.includes(tag)){
            tagctr++;
          }
        })
        if(tagctr === tags.length) {
          storage.push(image)
        }
      })
      console.log(storage)
    });
      $scope.images = storage
      $scope.transferInfo($scope.images)
  }


  $scope.getTags = function(tagsearch) {
    $scope.error = null;
    $scope.setTagsOrLocation('tag');
    GetTagsService.get(tagsearch).then(function(response) {
      $scope.getResponseSuccess($scope, response, "This hashtag has returned no results" )
      $scope.tags = response.data;
    });
  }

  $scope.searchByTags = function(tag) {
    $scope.error = null;
    if($scope.andOr==='or'){
      $scope.images = [];
      $scope.locations = [];
      var tags = $scope.searchParam.split(",");
      if(tags.length<2){
        $scope.searchOneTag(tag);
      }
      else {
        $scope.searchAllTags();
      };
    }
    if($scope.andOr==='and'){
      console.log('herp')
      $scope.images = [];
      $scope.locations = [];
      var tags = $scope.searchParam.split("+");
      console.log(tags)
      if(tags.length<2){
        $scope.searchOneTag(tag);
      }
      else {
        $scope.searchImagesWithEachTag();
      };
    }
  }

  $scope.searchImagesWithEachTag = function() {
    $scope.images = [];
    var storage = [];
    var tags = $scope.searchParam.split("+")
    console.log(tags)
    GetImagesByTagService.get(tags[0]).then(function(response) {
      $scope.getResponseSuccess($scope, response, "This hashtag has returned no results" )
      response.data.forEach(function(image){
        var tagctr = 0;
        tags.forEach(function(tag) {
          if(image.tags.includes(tag)){
            tagctr++;
          }
        })
        if(tagctr === tags.length) {
          storage.push(image)
        }
      })
      console.log(storage)
    });
      $scope.images = storage
      $scope.transferInfo($scope.images)
  }

  $scope.searchAllTags = function() {
    $scope.images = [];
    var storage = [], ctr = 0, tags = $scope.searchParam.split(",");
    tags.forEach(function(tag){
      GetImagesByTagService.get(tag).then(function(response){
        storage.push(response.data)
        $scope.images = [].concat.apply([],storage)
        ctr++
        if(ctr===tags.length){
          $scope.transferInfo($scope.images)
        }
      })
    })
  }

  $scope.searchOneTag = function(tag) {
    GetImagesByTagService.get(tag).then(function(response) {
      $scope.getResponseSuccess($scope, response, "This hashtag has returned no results" )
      $scope.images = response.data;
      $scope.transferInfo(response.data)
    });
  }

  $scope.saveTag = function(tag, el) {
    if(Array.isArray($scope.searchParam)) {
      var array = $scope.searchParam
      array.push(tag);
      $scope.searchParam = array.join(",")
    }
    else {
      var array = $scope.searchParam.split(',');
      array.push(tag);
      $scope.searchParam = array.join(',');
    }
    if($scope.searchParam[0]===','){$scope.searchParam=$scope.searchParam.slice(1,$scope.searchParam.length)}
  };

  $scope.searchMultipleTags = function(arg) {
    if(arg === 'or') {
      var tags = $scope.searchParam.split(",");
      tags.forEach(function(tag){
        $scope.getImagesByTags(tag)
      })
    }
    if(arg === 'and') {
      $scope.images = []
      GetImagesByTagService.get($scope.chosenTags[0]).then(function(response) {
      $scope.getResponseSuccess($scope, response, "This hashtag has returned no results" )
      response.data.forEach(function(image){
        var tagctr = 0;
        $scope.chosenTags.forEach(function(tag) {
          if(image.tags.includes(tag)){
            tagctr++;
          }
        })
        if(tagctr === $scope.chosenTags.length) {
          $scope.images.push(image)
        }
      })
    });
      $scope.transferInfo($scope.images)
    }
  };

  $scope.getImagesByTags = function(tag) {
    // $scope.images = []
    // $scope.locations = []
    GetImagesByTagService.get(tag).then(function(response) {
      $scope.getResponseSuccess($scope, response, "This hashtag has returned no results" )
      $scope.transferInfo(response.data)
      return response.data.forEach(function(object){
        $scope.images.push(object)
      })
    });
  }

  $scope.searchForLocations = function(address) {
    $scope.addressList = []
    $scope.setTagsOrLocation('loc')
    GetGeocodeService.getGeocode(address).then(function(response) {
      response.forEach(function(address) {
        $scope.addressList.push(address)
      })
    });
  };

  $scope.getImageByLocation = function(lat, lng) {
    $scope.images = []
    $scope.locations = []
    GetImageByLocationService.get(lat,lng).then(function(response){
      $scope.transferInfo(response.data)
      $scope.images = response.data
      response.forEach(function(object) {
        $scope.testdata.push(object)
      })
    });
  };

  $scope.searchTagsWithLocation = function(arg) {
    $scope.images = []
    GetImageByLocationService.get().then(function(response){
      response.data.forEach(function(image){
        var tagctr = 0;
        $scope.chosenTags.forEach(function(tag){
          if(image.tags.includes(tag)){
            if(arg === 'and'){
              tagctr++;
            }
            else {
              if($scope.images.includes(image)===false){$scope.images.push(image)}
            }
          }
        })
        if(tagctr === $scope.chosenTags.length) {
          $scope.images.push(image)
        }
      })
    })
  }

  $scope.transferInfo = function(data) {
    data.forEach(function(item){
      $scope.locations.push(new locationFactory(item.caption.from.username,
                                                      item.caption.text,
                                                      item.location.latitude,
                                                      item.location.longitude,
                                                      item.images.thumbnail.url))
    })
  }

// Map Controller & Location Controller
  var mapEl = $element.find('gmap')[0];
  var $main_color = '#2d313f',
  $saturation= -20,
  $brightness= 5;
  var style = [
    {
      //set saturation for the labels on the map
      elementType: "labels",
      stylers: [
        {saturation: $saturation}
      ]
    },
      { //poi stands for point of interest - don't show these lables on the map
      featureType: "poi",
      elementType: "labels",
      stylers: [
        {visibility: "off"}
      ]
    },
    {
      //don't show highways lables on the map
          featureType: 'road.highway',
          elementType: 'labels',
          stylers: [
              {visibility: "off"}
          ]
      },
    {
      //don't show local road lables on the map
      featureType: "road.local",
      elementType: "labels.icon",
      stylers: [
        {visibility: "off"}
      ]
    },
    {
      //don't show arterial road lables on the map
      featureType: "road.arterial",
      elementType: "labels.icon",
      stylers: [
        {visibility: "off"}
      ]
    },
    {
      //don't show road lables on the map
      featureType: "road",
      elementType: "geometry.stroke",
      stylers: [
        {visibility: "off"}
      ]
    },
    //style different elements on the map
    {
      featureType: "transit",
      elementType: "geometry.fill",
      stylers: [
        { hue: $main_color },
        { visibility: "on" },
        { lightness: $brightness },
        { saturation: $saturation }
      ]
    },
    {
      featureType: "poi",
      elementType: "geometry.fill",
      stylers: [
        { hue: $main_color },
        { visibility: "on" },
        { lightness: $brightness },
        { saturation: $saturation }
      ]
    },
    {
      featureType: "poi.government",
      elementType: "geometry.fill",
      stylers: [
        { hue: $main_color },
        { visibility: "on" },
        { lightness: $brightness },
        { saturation: $saturation }
      ]
    },
    {
      featureType: "poi.sport_complex",
      elementType: "geometry.fill",
      stylers: [
        { hue: $main_color },
        { visibility: "on" },
        { lightness: $brightness },
        { saturation: $saturation }
      ]
    },
    {
      featureType: "poi.attraction",
      elementType: "geometry.fill",
      stylers: [
        { hue: $main_color },
        { visibility: "on" },
        { lightness: $brightness },
        { saturation: $saturation }
      ]
    },
    {
      featureType: "poi.business",
      elementType: "geometry.fill",
      stylers: [
        { hue: $main_color },
        { visibility: "on" },
        { lightness: $brightness },
        { saturation: $saturation }
      ]
    },
    {
      featureType: "transit",
      elementType: "geometry.fill",
      stylers: [
        { hue: $main_color },
        { visibility: "on" },
        { lightness: $brightness },
        { saturation: $saturation }
      ]
    },
    {
      featureType: "transit.station",
      elementType: "geometry.fill",
      stylers: [
        { hue: $main_color },
        { visibility: "on" },
        { lightness: $brightness },
        { saturation: $saturation }
      ]
    },
    {
      featureType: "landscape",
      stylers: [
        { hue: $main_color },
        { visibility: "on" },
        { lightness: $brightness },
        { saturation: $saturation }
      ]

    },
    {
      featureType: "road",
      elementType: "geometry.fill",
      stylers: [
        { hue: $main_color },
        { visibility: "on" },
        { lightness: $brightness },
        { saturation: $saturation }
      ]
    },
    {
      featureType: "road.highway",
      elementType: "geometry.fill",
      stylers: [
        { hue: $main_color },
        { visibility: "on" },
        { lightness: $brightness },
        { saturation: $saturation }
      ]
    },
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [
        { hue: $main_color },
        { visibility: "on" },
        { lightness: $brightness },
        { saturation: $saturation }
      ]
    }
  ];

  var mapOptions = {
    zoom: 13,
    center: {lat: 51.5020,lng: -0.1281},
    enableHighAccuracy: true,
    styles: style
  };

  var gmap = new google.maps.Map(mapEl, mapOptions);
  $scope.gmap = gmap;

});

