describe("PlaylistEntryView", function() {
  var view, model;

  beforeEach(function() {
    model = new Backbone.Model({
      artist: "Fakey McFakerson",
      title: "Never Gonna Mock You Up",
    });
    view = new PlaylistEntryView({model: model});
    view.render();
  });

  it("should set the song model's 'queuedAt' property when you click on it", function(){
    expect(model.attributes.queuedAt).toBeFalsy();
    view.$el.children().first().click();
    expect(model.attributes.queuedAt).toMatch(jasmine.any(Date));
  });
  
  it("should add a remove button to each item in playlist", function(){
   tag = view.render();
    // expect(tag.find('remove')).toMatch('.remove');
    
    expect(tag.find('.remove').length).toEqual(1);
  });

  it("should remove the song from playlist when x is clicked", function(){
    


  });

});