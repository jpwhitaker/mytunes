describe("LibraryView", function() {
  var view, collection, fakeSongs, fakeSubview;

  beforeEach(function() {
    fakeSongs = [
      {data: "data"},
      {data2: "data2"}
    ];
    collection = new Backbone.Collection();
    collection.reset(fakeSongs);

    fakeSubview = { render: jasmine.createSpy() };
    spyOn(window, 'LibraryEntryView').andReturn(fakeSubview);

    view = new LibraryView({collection: collection});
  });

  it("should create some subviews when you create it", function(){
    expect(LibraryEntryView.callCount).toEqual(fakeSongs.length);
  });

  it("should render its subviews when you render it", function(){
    view.render()
    expect(fakeSubview.render.callCount).toEqual(fakeSongs.length);
  });

  it("should have a header element", function(){
    var tag = view.render();
    expect(tag.find('h2').text()).toEqual('Library');
    expect(tag.find('h2').html()).toEqual('Library');
  });
});