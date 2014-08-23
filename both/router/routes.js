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

  this.route('contactForm', {
    path: '/contact'
  });

});

Router.onBeforeAction('loading');