Errors = {
 collection: new Meteor.Collection(null),

 throw: function(message) {
  Errors.colection.insert({message: message, seen: false});
 },
 clearSeen: function() {
  Errors.collection.remove({ seen: true });
 }
};
