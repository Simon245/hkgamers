
var date = new Date()

Template.footer.helpers({

  currentYear: function() {
    var year = date.getFullYear();
    return year;
  },

  currentTime: function() {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    // var seconds = date.getSeconds();

    var time = hours + ":" + minutes
    return time;
  },

  car: function() {
   var audi = {
      wheels: 4,
      doors: 2,
      engine: "200hp",
      passengers: [
        {
          firstName: "Jim",
          lastName: "Bob"
        },
        {
          firstName: "Joe",
          lastName: "Bean"
        }
      ]

    };

    return audi;
  },
});





