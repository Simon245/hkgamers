Template.showPost.helpers({

  accountingPrice: function(price){
    var dividePrice = price / 100;
    var result = accounting.formatMoney(dividePrice);
    return result;
  },

  showPost: function() {
    var post = {
      userId: 0001,
      _postId: "afj48laejsf",
      title: "Gaming gear for sale",
      description: "I am selling all these items and I will ship all via FedEx.",
      views: 5,
      locationId: "central",
      dateCreated: "dateStamp",
      active: true,
      itemsForSale: [
        {
          imageUrls: ["sadfaervq3rv.jpg",
                      "wdq34d.jpg",
                      "sadveroc2h4io3f.jpg"],

          name: "games",
          description: "mixed games for sale",
          catagory: ["xbox", "playstation"],
          dateSold: "dateStamp",
          condition: "excellent",
          price: 1000,
          currency: "HK",
          status: "available/sold/pending",
        },
        {
          imageUrls: ["sadfaer.jpg",
                      "wdq3.jpg",
                      "sadve.jpg"],

          name: "xbox",
          description: "old gen 2 xbox",
          catagory: ["xbox"],
          dateSold: "dateStamp",
          condition: "ok",
          price: 10000000,
          currency: "HK$",
          status: "available/sold/pending",
        },
        {
          imageUrls: ["sad.jpg",
                      "wdq34.jpg",
                      "sadvero.jpg"],

          name: "playstation",
          description: "5 year old ps3",
          catagory: ["playstation"],
          dateSold: "dateStamp",
          condition: "poor",
          price: 100000,
          currency: "HK$",
          status: "available/sold/pending",
        },
      ]
    };
    return post;
  },
});


