var PlaylistEntryView = Backbone.View.extend({
  
  tagName: "tr",

  events: {
  	"click": "removeFromQueue"
  },

  template: _.template("<td>(<%= artist %>)</td><td><%= title %></td><td><div class='remove'>X</div></td>"),

  render: function(){
  	return this.$el.html(this.template(this.model.attributes));
  },



  removeFromQueue: function() {


    this.model.unset("queuedAt");
  	
    // this.model.set("queuedAt", undefined);
  
  }

});

