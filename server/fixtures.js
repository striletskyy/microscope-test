if(Posts.find().count() === 0) {
 var now = new Date().getTime();
 var tomId = Meteor.users.insert({
  profile: { name: 'Tom Coleman' }
 });
 var tom = Meteor.users.findOne(tomId);
 var sachaId = Meteor.users.insert({
  profile: { name: 'Sacha Greif' }
 });
 var sacha = Meteor.users.findOne(sachaId);

 var telescopeID = Posts.insert({
    title: 'Introducing Telescope',
    author: sacha.profile.name,
    userId: sacha._id,
    url: 'http://sachagrief.com/introducing-telescope',
    submitted: now - 7 * 3600 * 1000
  });
 Posts.insert({
    title: 'Meteor',
    author: 'Tom Coleman',
    url: 'http://meteor.com'
  });
 Posts.insert({
    title: 'The Meteor Book',
    author: 'Tom Coleman',
    url: 'http://themeteorbook.com'
  });

 Comments.insert({
  postId: telescopeId,
  userId: tom._id, 
  author: tom.profile.name,
  submitted: now - 5 * 3600 * 1000, 
  body: 'Inserting project Sacha, can I get involved ?'
 });

 Comments.insert({
  postId: telescopeId,
  userId: sacha._id,
  author: sacha.profile.name,
  submitted: now - 3 * 3600 * 1000,
  body: 'You sure Tom!'
 });
}
