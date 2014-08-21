
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
});





