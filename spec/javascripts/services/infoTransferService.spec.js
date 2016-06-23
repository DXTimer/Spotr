describe('infoTransferService', function(){

  beforeEach(module('brimApp'));

  var service;

  beforeEach(inject(function(infoTransferService){
    service = infoTransferService;
  }));


  it('should initiate with an empty array',function(){
    expect(service.info).toEqual([]);
  });

  it('should be able to store informaation',function(){
    service.addInfo({name:'john'});
    expect(service.info).toContain({name:'john'});
    expect(service.info[0].name).toEqual('john');
  });

  it('should be able to reset the info array to being empty', function(){
    service.addInfo({name:'john'});
    service.addInfo({name:'jack'});
    expect(service.info).toContain({name:'john'});
    expect(service.info).toContain({name:'jack'});
    service.resetInfo()
    expect(service.info).toEqual([]);
  });

});