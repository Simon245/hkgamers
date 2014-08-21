if (Posts.find().count() === 0 ) {

  Posts.insert({
    userId: 0001,
    _postId: "01",
    title: "Gaming Collection",
    description: "I am selling all my gaming gear.",
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
  });

  Posts.insert({
    userId: 0002,
    _postId: "0010",
    title: "Gears of War",
    description: "Selling all the Gears of War games",
    views: 9,
    locationId: "Wan Chai",
    dateCreated: "dateStamp",
    active: true,
    itemsForSale: [
      {
        imageUrls: ["Gears.jpg"],

        name: "Gears of War",
        description: "disc is a little scratched but still works",
        catagory: ["Xbox"],
        dateSold: "dateStamp",
        condition: "ok",
        price: 1000,
        currency: "HK",
        status: "available",
      },
      {
        imageUrls: ["Gears2.jpg"],

        name: "Gears of War 2",
        description: "",
        catagory: ["Xbox"],
        dateSold: "dateStamp",
        condition: "good",
        price: 10000000,
        currency: "HK",
        status: "available",
      },
      {
        imageUrls: ["Gears3.jpg"],

        name: "Gears of War 3",
        description: "",
        catagory: ["Xbox"],
        dateSold: "dateStamp",
        condition: "Excellent",
        price: 100000,
        currency: "HK",
        status: "available/sold/pending",
      },
    ],
  });

  Posts.insert({
    userId: 0003,
    _postId: "0103",
    title: "Playstation 4",
    description: "Selling my PS4 with 1 game",
    views: 20,
    locationId: "Causeway Bay",
    dateCreated: "dateStamp",
    active: true,
    itemsForSale: [
      {
        imageUrls: ["ps41.jpg",
                    "ps42.jpg"],

        name: "PS3",
        description: "bought it a few months ago, selling because I want an xbox one ",
        catagory: ["Playstation"],
        dateSold: "dateStamp",
        condition: "Excellent",
        price: 1000000,
        currency: "HK",
        status: "available",
      },
      {
        imageUrls: ["killzone.jpg"],

        name: "Killzone",
        description: "",
        catagory: ["Playstation"],
        dateSold: "dateStamp",
        condition: "Excellent",
        price: 10000,
        currency: "HK",
        status: "available",
      },
    ],
  });

}

