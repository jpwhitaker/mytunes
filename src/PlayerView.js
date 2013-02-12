var PlayerView = Backbone.View.extend({

  initialize: function(){
    // set up an event listener on the songs collection
    this.collection.bind("change:queuedAt", this.handleQueueChange, this);
  },



  // templates are a nicer way to put js data into html strings
  template: _.template('<audio src="<%= url %>" controls autoplay></audio>'),


  render: function(){
    if(this.model){
      this.$el.html(this.template(this.model.attributes));
    }

    $('audio').on('ended', this.removeFromQueue.bind(this));

    return this.$el;
  },

  // event listener
  handleQueueChange: function(){
    debugger
    if(!this.model){
      this.model = this.collection.queued()[0]
      this.render();
    }
    return this
  }, 

  removeFromQueue: function () {
    var temp = this.model;
    this.model = undefined;
    temp.unset("queuedAt");



  }
});
 


// player = new PlayerView()

// player
//   .render()
//   .handleQueueChange()
//   .somethingCool()

