'use strict';

describe("brimApp", function() {

  // let photos = element(by.css('#map')).$$('map-marker');
  // let listItems = element(by.css('#photo-list')).$$('li');
  // var mock = require('protractor-http-mock');
  // var data = [{name: 'cat'}, {name: 'catamaran'}, {name: 'catnip'}];
  //
  // beforeEach(function(){
  //   mock([{
  //     request: {
  //       path: 'https://api.instagram.com/v1/tags/search?q=cat&access_token=3414423759.9460433.24ba738c23824cbd82e82201dc10dc57&callback=JSON_CALLBACK',
  //       method: 'JSONP'
  //     },
  //     response: {
  //       data: data
  //     }
  //   }]);
  // });
  //
  // afterEach(function(){
  //   mock.teardown();
  // });

  it("should find the home page title - dummy test for Travis setup", function() {
   browser.get('/');
   expect(browser.getTitle()).toEqual('BrimFinal');
  });
  // it("should render a map on the page", function() {
  //   browser.get('/');
  //   browser.findElement(by.css('#map'));
  // });

  // it("should render at least one pin as a photo on the map", function() {
  //   browser.get('/');
  //   browser.findElement(by.css('map-marker'));
  // });

  // it("should print a list of photos below the map", function() {
  //   browser.get('/');
  //   browser.findElement(by.css('li'));
  // });

  // it('should allow you to search for hashtags', function(){
  //   browser.get('/')
  //   $('#searchTags').sendKeys('cat')
  //   $('#searchTagSubmit').click()
  //   var tags = $$('#relatedTags');
  //   expect(tags.first().getText()).toMatch('cat')
  //   expect(tags.last().getText()).toMatch('cat')
  // })
});
