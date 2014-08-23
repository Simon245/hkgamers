Meteor.publish('adminContactMessages', function () {
  return AdminContactMessages.find();
});