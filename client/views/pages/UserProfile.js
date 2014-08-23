Template.userProfile.helpers({
  name: function() {
    if (this && this.profile && this.profile.firstName && this.profile.lastName) {
      return "" + this.profile.firstName + " " + this.profile.lastName;
    } else {
      return "";
    }
  },
  subhead: function() {
    if (this && this.profile) {
      if (this.profile.organization && this.profile.location) {
        return [this.profile.organization, this.profile.location].join(' - ');
      } else {
        if (this.profile.organization) {
          return this.profile.organization;
        }
        if (this.profile.location) {
          return this.profile.location;
        }
      }
    }
  },
  bio: function() {
    if (this && this.profile) {
      return this.profile.bio;
    }
  },
  url: function() {
    if (this && this.profile) {
      return this.profile.url;
    }
  },
  googlePlusUrl: function() {
    if (this && this.profile) {
      return this.profile.googlePlusUrl;
    }
  },
  twitterHandle: function() {
    if (this && this.profile) {
      return this.profile.twitterHandle;
    }
  }
});
