Template.editProfile.rendered = function() {
  return $('#bio').keydown(function(event) {
    if (event.keyCode === 13) {
      return $('#bio').blur();
    }
  });
};

Template.editProfile.helpers({
  email: function() {
    if (Meteor.user() && (Meteor.user().emails != null)) {
      return Meteor.user().emails[0].address;
    }
  },
  firstName: function() {
    if (Meteor.user()) {
      return Meteor.user().profile.firstName;
    }
  },
  lastName: function() {
    if (Meteor.user()) {
      return Meteor.user().profile.lastName;
    }
  },
  organization: function() {
    if (Meteor.user()) {
      return Meteor.user().profile.organization;
    }
  },
  location: function() {
    if (Meteor.user()) {
      return Meteor.user().profile.location;
    }
  },
  bio: function() {
    if (Meteor.user()) {
      return Meteor.user().profile.bio;
    }
  },
  url: function() {
    if (Meteor.user()) {
      return Meteor.user().profile.url;
    }
  },
  googlePlusUrl: function() {
    if (Meteor.user()) {
      return Meteor.user().profile.googlePlusUrl;
    }
  },
  twitterHandle: function() {
    if (Meteor.user()) {
      return Meteor.user().profile.twitterHandle;
    }
  }
});

Template.editProfile.events({
  'click .done': function() {
    if (Meteor.user().profile.firstName) {
      return Router.go('/');
    } else {
      return $('.errors').text('First name is required.');
    }
  },
  'change #email': function(event) {
    return Meteor.call('changeEmail', Meteor.userId(), $(event.target).val());
  },
  'change #firstName': function(event) {
    return Meteor.users.update(Meteor.userId(), { $set: { 'profile.firstName': $(event.target).val() }} );
  },
  'change #lastName': function(event) {
    return Meteor.users.update(Meteor.userId(), {
      $set: {
        'profile.lastName': $(event.target).val()
      }
    });
  },
  'change #organization': function(event) {
    return Meteor.users.update(Meteor.userId(), {
      $set: {
        'profile.organization': $(event.target).val()
      }
    });
  },
  'change #location': function(event) {
    return Meteor.users.update(Meteor.userId(), {
      $set: {
        'profile.location': $(event.target).val()
      }
    });
  },
  'change #bio': function(event) {
    return Meteor.users.update(Meteor.userId(), {
      $set: {
        'profile.bio': $(event.target).val()
      }
    });
  },
  'change #url': function(event) {
    var url;
    url = $(event.target).val();
    if (!url.match(/^http/) && !url.match(/^https/) && url !== '') {
      url = 'http://' + url;
    }
    return Meteor.users.update(Meteor.userId(), {
      $set: {
        'profile.url': url
      }
    });
  },
  'change #googlePlusUrl': function(event) {
    var url;
    url = $(event.target).val();
    if (!url.match(/^http/) && !url.match(/^https/) && url !== '') {
      url = 'http://' + url;
    }
    return Meteor.users.update(Meteor.userId(), {
      $set: {
        'profile.googlePlusUrl': url
      }
    });
  },
  'change #twitterHandle': function(event) {
    return Meteor.users.update(Meteor.userId(), {
      $set: {
        'profile.twitterHandle': $(event.target).val()
      }
    });
  }
});
