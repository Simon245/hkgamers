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

  this.route('index', {
  	path: '/'
  });

  this.route('showPost', {
    path: 'show-post',
  });
});
