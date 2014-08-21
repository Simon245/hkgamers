Template.showPost.helpers({

  accountingPrice: function(price){
    var dividePrice = price / 100;
    var result = accounting.formatMoney(dividePrice);
    return result;
  },

  showPost: function() {
    var post = {
      userId: 0001,
      _postId: "01",
      title: "Gaming Collection",
      description: "I am selling all gaming gear.",
      views: 5,
      locationId: "central",
      dateCreated: "dateStamp",
      active: true,
      itemsForSale: [
        {
          imageUrls: ["cod4.jpg",
                      "l4d.jpg",
                      "heavyrain.jpg"],

          name: "",
          description: "mixed games for sale",
          catagory: ["xbox", "playstation"],
          dateSold: "dateStamp",
          condition: "excellent",
          price: 1000,
          currency: "HK",
          status: "available",
        },
        {
          imageUrls: ["xbox1.jpg",
                      "xbox2.jpg"],

          name: "xbox",
          description: "old gen 2 xbox, looks a bit old but runs fine",
          catagory: ["xbox"],
          dateSold: "dateStamp",
          condition: "ok",
          price: 10000000,
          currency: "HK$",
          status: "available",
        },
        {
          imageUrls: ["ps31.jpg",
                      "ps32.jpg"],

          name: "playstation",
          description: "5 year old ps3, a bit scratched but still runs",
          catagory: ["playstation"],
          dateSold: "dateStamp",
          condition: "poor",
          price: 100000,
          currency: "HK$",
          status: "sold",
        },
      ],
    };
    return post;
  },
});


