// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function () {
  $("header").css("text-align", "center"); // Centers text in header
  // Extensions of DayJS
  dayjs.extend(window.dayjs_plugin_advancedFormat);
  dayjs.extend(window.dayjs_plugin_utc); // This plugin adds support for UTC mode
  dayjs.extend(window.dayjs_plugin_timezone); // This plugin adds support for time zones

  // Display Time in header
  updateTime(); // Calls function to update time
  setInterval(updateTime, 1000); // Updates every 1 second

  function updateTime() {
    var today = dayjs().tz("America/Los_Angeles");
    $("#currentDay").text(today.format("dddd, MMMM Do h:mm A"));
  }

  //Code to update each time block style based on time of day
$(".time-block").each(function () {
  var hour = dayjs().tz("America/Los_Angeles").hour(); // Grabbed from dayJs documentation
  // grabs value of the id, splits it into an array, and converts the string into an integer
  var timeBlock = parseInt($(this).attr("id").split("-")[1]);

  if (timeBlock < hour) {
    $(this).removeClass("present future").addClass("past"); // if current time is past time-block id, add class past
  } else if (timeBlock === hour) {
    $(this).removeClass("past future").addClass("present"); // if current time is equal to time block id, add class present
  } else {
    $(this).removeClass("past present").addClass("future"); // if time is not currently equal or past time-block id, add class future
  }
});
});
