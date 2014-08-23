/*****************************************************************************/
/* Client and Server Routes */
/*****************************************************************************/
Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound',
  templateNameConverter: 'upperCamelCase',
  routeControllerNameConverter: 'upperCamelCase',
  waitOn: function(){
    return Meteor.subscribe('posts');
  }
});

Router.map(function () {
  /*
    Example:
      this.route('home', {path: '/'});
  */

  this.route('postsList', {
    path: '/',
  });

  this.route('showPost', {
    path: '/posts/_:id',
  });

  this.route('postSubmit', {
    path: '/posts/submit'
  });

  // this.route('profile', {
  //   path: '/profile'
  // });

// Router.map ->
//   @route 'home',
//     path: '/',
//     template: 'home'
//     data: ->
//       Meteor.user()

//   this.route('UserProfile', {

//   })

  this.route('editProfile', {
    path: '/profile/edit',
    data: function(){
      return Meteor.user();
    }
  });


});

Router.onBeforeAction('loading');