Posts = new Meteor.Collection('posts');

Posts.allow({
 update: ownsDocument,
 remove: ownsDocument
});

Posts.deny({
 update: function(userId, post, fieldNames) {
  return (_.without(fieldNames, 'url', 'title').length > 0);
 } 
});

Meteor.methods({
 post: function(postAttributes) {
  var user = Meteor.user(),
  postWithSameLink = Posts.findeOne({ url: postAttributes.url });
  if(!user){
   throw new Mateor.Error(401, "You need to login to post new stories");
  }
  if(!postAttributes.title){
   throw new Mateor.Error(422, 'PLease fill in a headline'); 
  }
  if(postAttributes.url && postWithSameLink){
   throw new Meteor.Error(302, 'This link has already been posted', postWithSameLink._id);
  }

  var post = _.extend(_.pick(postAttributes, 'url', 'title', 'message'), {
   userId: user._id,
   author: user.username,
   submitted: new Date().getTime()
  });

  var postId = Posts.insert(post);
  
  return postId;
 }
});
