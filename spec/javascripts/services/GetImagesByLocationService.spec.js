// describe('GetTagsService', function(){

//   beforeEach(module('brimApp'));

//   var service;
//   var httpBackend;

//   var data = [{name: "cat"}];

//   beforeEach(inject(function(GetImageByLocationService,$httpBackend){
//     service = GetImageByLocationService;
//     httpBackend = $httpBackend;
//   }));

//   it('should return a promise of the data from the API',function(){
//     httpBackend.expect('JSONP','https://api.instagram.com/v1/tags/search?q=cat&access_token=3414423759.9460433.24ba738c23824cbd82e82201dc10dc57&callback=JSON_CALLBACK'
//   ).respond(data);
//     service.get('cat').then(function(response){
//       expect(response).toEqual(data)
//     });
//     httpBackend.flush();
//   });

// });