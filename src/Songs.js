var Songs = Backbone.Collection.extend({
  // return queued songs
  queued: function(){
    // chain, filter, sortBy, and value are from underscore
    return this
    		.chain()
    		.filter(function(song){
      		  return !!song.attributes.queuedAt;
    		})
    		.sortBy(function(song){
      		  return song.attributes.queuedAt;
    		})
    		.value();
  }
});


// [
//  {name:'hello'}
//  {queuedAt: 1},
//  {queuedAt: 3},
//  {queuedAt: 2},
// ]


// [
//  {queuedAt: 1},
//  {queuedAt: 3},
//  {queuedAt: 2},
// ]

// [
//  {queuedAt: 1},
//  {queuedAt: 2},
//  {queuedAt: 3},
// ]


// 1
// "hello"
// false
// true

// !!(new Date())

// !true == false
// !false == true

// !!true == !(!true)
// !false
// true

//  "hello" == true

// ""

// "fafa"


// object
// 	.something()
// 	.somethingmore()
// 	....
