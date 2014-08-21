Template.showPost.helpers({

  accountingPrice: function(price){
    var dividePrice = price / 100;
    var result = accounting.formatMoney(dividePrice);
    return result;
  },

  showPost: function() {
    var post = Posts.find().fetch()[1];
    return post;
  },
});


