describe("InstagramController", function() {

  beforeEach(module("brimApp"));

  // var ctrl;
  // var httpBackend, scope;
  // var data = [{name: 'cat'}, {name: 'catamaran'}, {name: 'catnip'}];
  // var response1 = {
  //   meta: {code: 400, error_message: "Bad Request"},
  //   data: ''
  // }
  // var response2 = {
  //   meta: {code: 200},
  //   data: [{name: 'cat'}, {name: 'catamaran'}, {name: 'catnip'}]
  // }
  // var response3 = {
  //   meta: {code: 200},
  //   data: ''
  // }
  //
  // beforeEach(inject(function($rootScope, $controller, GetTagsService, GetImagesByTagService, $httpBackend, infoTransferService){
  //   scope = $rootScope.$new();
  //   tagservice = GetTagsService;
  //   imageservice = GetImagesByTagService;
  //   ctrl = $controller('InstagramController', {
  //       $scope: scope,
  //       GetTagsService: tagservice,
  //       GetImagesByTagService: imageservice
  //   });
  //   httpBackend = $httpBackend;
  // }));
  //
  // describe('getResponseSuccess', function() {
  //   it("returns an error if the server didn't respond with a success", function() {
  //     ctrl.getResponseSuccess(scope, response1);
  //     expect(scope.error).toEqual("Bad Request");
  //   })
  //
  //   it("returns an error if the search tag returns no results from the server", function() {
  //     ctrl.getResponseSuccess(scope, response3, "This hashtag has returned no results");
  //     expect(scope.error).toEqual("This hashtag has returned no results");
  //   })
  // })
  //
  // describe ('getTags', function () {
  //   it('gets all tags associated with a given tag', function() {
  //     httpBackend.expect('JSONP','https://api.instagram.com/v1/tags/search?q=cat&access_token=3414423759.9460433.24ba738c23824cbd82e82201dc10dc57&callback=JSON_CALLBACK').respond(response2);
  //     spyOn(ctrl,'getResponseSuccess').and.returnValue();
  //     ctrl.getTags('cat');
  //     httpBackend.flush();
  //     expect(ctrl.tags).toEqual(data);
  //   })
  // })
  it("should find the home page title - dummy test for Travis setup", function() {
   browser.get('/');
   expect(browser.getTitle()).toEqual('BrimFinal');
  });
  // describe ('getImagesByTag(s)', function () {
  //   beforeEach(function(){
  //     httpBackend.expect('JSONP','https://api.instagram.com/v1/tags/cat/media/recent?access_token=3414423759.9460433.24ba738c23824cbd82e82201dc10dc57&callback=JSON_CALLBACK').respond(response2);
  //     spyOn(ctrl,'getResponseSuccess').and.returnValue();
  //   });

  //   it('gets all images associated with a given tag', function() {
  //     ctrl.getImagesByTag('cat');
  //     httpBackend.flush();
  //     expect(ctrl.images).toEqual(data);
  //   });
  // });
});
