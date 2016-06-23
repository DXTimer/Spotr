describe('GetImagesByTagService', function(){

  beforeEach(module('brimApp'));

  var service;
  var httpBackend;

  var data = [{image: {"low_resolution": {"url": "https://scontent.cdninstagram.com/t51.2885-15/s320x320/e35/13381369_530803277105896_1391620371_n.jpg?ig_cache_key=MTI3MzA1MzM1ODY0NjI4MDg3Ng%3D%3D.2", "width": 320, "height": 320}}}];

  beforeEach(inject(function(GetImagesByTagService,$httpBackend){
    service = GetImagesByTagService;
    httpBackend = $httpBackend;
  }));

  it('should return a promise of the data from the API',function(){
    httpBackend.expect('JSONP','https://api.instagram.com/v1/tags/cat/media/recent?access_token=3414423759.9460433.24ba738c23824cbd82e82201dc10dc57&callback=JSON_CALLBACK'
  ).respond(data);
    service.get('cat').then(function(response){
      expect(response).toEqual(data)
    });
    httpBackend.flush();
  });

});
