Template.contactForm.helpers({




});

Template.contactForm.events({

  'submit form': function(event){
    console.log("clicked");
    console.log(event);
    event.preventDefault();
    var contactMessage = {
      firstName: $('#firstName').val(),
      lastName: $('#lastName').val(),
      email: $('#email').val(),
      message: $('#message').val(),
    };

    AdminContactMessages.insert(contactMessage);
    Router.go('postsList');


// var groceriesId = Lists.insert({name: "Groceries"});
// Items.insert({list: groceriesId, name: "Watercress"});
// Items.insert({list: groceriesId, name: "Persimmons"});

  },


  'click #button1': function(){
    //DO something
  },

  'click #button2': function(){
    //Do something else
  },

  'hover #image1': function(){
    //animate something
  },

  'focus #textField8': function(){

  }

});



Template.contactForm.rendered = function(){



}