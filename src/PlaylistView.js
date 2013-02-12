var PlaylistView = Backbone.View.extend({

  queuedSongs: [],

  tagName: "table",

  initialize: function(){
  	// this.subviews = this.collection.map(function(song){
  	//   return new LibraryEntryView({model: song});
  	// });

  	this.collection.bind("change", this.render, this);

  },

  render: function(){
    if(this.collection.queued().length === 0){
      this.$el.html("/click on something/")
    } else {
      this.$el.html("")
    }

  	this.queuedSongs = this.collection.queued();

  	    console.log(this.queuedSongs)


    this.subviews = this.queuedSongs.map(function(song){
  		return new PlaylistEntryView({model: song});


  	})


   var that = this;
    _.each(this.subviews, function(subview){
      that.$el.append(subview.render());
    })
  
  return this.$el;
  }
});

