var postsData = [
  {
    title: 'Introducing Telescope',
    author: 'Sacha Greif',
    url: 'http://sachagrief.com/introducing-telescope'
  },
  {
    title: 'Meteor',
    author: 'Tom Coleman',
    url: 'http://meteor.com'
  },
  {
    title: 'The Meteor Book',
    author: 'Tom Coleman',
    url: 'http://themeteorbook.com'
  }
];
Template.postsList.helpers({
  posts: function() {
   return Posts.find();
  }
});
