'use strict';

var Place = function(name, country, city, notes, date, people) {
  this.name = name,
  this.country = country,
  this.city = city,
  this.notes = notes,
  this.date = new Date(date),
  this.people = people
}

$(function() {
  $("span#add-person").click(function() {
    $("div#people").append("<div class='form-group new-people'>" +
                            "<label for='new-person'>Person</label>" +
                            "<input type='text' class='form-control new-person'>" +
                          "</div>");
  });

  $("form#new-place").submit(function(event) {
    event.preventDefault();

    var name = $("input#new-name").val();
    var country = $("input#new-country").val();
    var city = $("input#new-city").val();
    var notes = $("input#new-notes").val();
    var date = $("input#new-date").val();

    var place = new Place(name, country, city, notes, date, []);
    var date = (place['date'].getMonth() + 1) + "/" + place['date'].getDate() + "/" + place['date'].getFullYear();
  debugger;
    $(".new-people").each(function() {
      var person = $(this).find("input.new-person").val();
      place['people'].push(person);
    });

    $("ul#places").append("<li><span class='place'>" + place['name'] + " " + date + "</span></li>");

    $(".place").last().click(function() {
      $("#show-place").show();

      $("#show-place h2").text(place['name'] + " " + date);
      $(".country").text(place['country']);
      $(".city").text(place['city']);
      $(".date").text(date);
      $(".notes").text(place['notes']);

      $("ul#people-list").text("");
      place["people"].forEach(function(person) {
        $("ul#people-list").append("<li>" + person + "</li>");
      });
    });
  });

});

module.exports = Place;
