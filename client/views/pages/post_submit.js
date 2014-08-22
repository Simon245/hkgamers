Template.postSubmit.events({
  'submit form': function(e) {
    e.preventDefault();

    var postContents = {
      url: $(e.target).find('[name=url]').val(),
      title: $(e.target).find('[name=title]').val(),
      message: $(e.target).find('[name=message]').val()
    }

    var IDOfTheNewPost = Posts.insert(postContents);

    postContents.IDString = IDOfTheNewPost;

    Router.go('/show-post/' + postContents.IDString);
  }
});