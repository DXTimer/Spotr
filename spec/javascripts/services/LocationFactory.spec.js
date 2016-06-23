describe('locationFactory', function() {
  beforeEach(module('brimApp'));

  var result;

  beforeEach(inject(function(locationFactory) {
    loc = new locationFactory("user", "caption", "lat", "lng", "url");
  }));

  it('is stores information to attributes', function(){
    expect(loc.name).toEqual("user");
    expect(loc.caption).toEqual("caption");
    expect(loc.lat).toEqual("lat");
    expect(loc.lng).toEqual("lng");
    expect(loc.url).toEqual("url");
  });

});
