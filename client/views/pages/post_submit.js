Template.postSubmit.events({
  'submit form': function(e) {
    e.preventDefault();

    var postContents = {
      url: $(e.target).find('[name=url]').val(),
      title: $(e.target).find('[name=title]').val(),
      message: $(e.target).find('[name=message]').val()
    }

    console.log("These are the postContents from jQuery");
    console.log(postContents);

    var id = Posts.insert(postContents); // When insert is successful, the _id of the newly-created document is returned back

    postContents._id = id;

    console.log("These are the postContents after successful .insert into Posts collection:");
    console.log(postContents);


    Router.go('showPost', postContents);
  }
});