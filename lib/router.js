Router.configure({
 layoutTemplate: 'layout',
 loadingTemplate: 'loading',
 waitOn: function() { 
  return [Meteor.subscribe('posts'), Meteor.subscribe('comments')]; 
 }
});

Router.map(function() {
 this.route('postsList', {path: '/'});
 
 this.route('postPage', {
  path: '/posts/:_id',
  data: function() { return Posts.findOne(this.params._id); }
 });

 this.route('postSubmit', {
  path: '/submit'
 });

 this.route('postEdit', {
  path: '/posts/:_id/edit',
  data: function() { return Posts.findOne(this.params._is); }
 });
});

var requireLogin = function() {
  if(!Meteor.user()) {
   if(Meteor.loggingIn()){
    this.render(this.loadingTemplate);
   } else {
    this.render('accessDenied');
   }
   this.pause();
 }
};
Router.onBeforeAction(requireLogin, {only: 'postSubmit' });
Router.onBeforeAction(function() { clear.Errors(); });
