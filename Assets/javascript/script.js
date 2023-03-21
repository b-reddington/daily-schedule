// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// NOTE: This outside function stays. It readys your program when the document is fully loaded.
$(function () {
  $("header").css("text-align", "center"); // Centers text in header
  // Extensions of DayJS
  dayjs.extend(window.dayjs_plugin_advancedFormat);
  dayjs.extend(window.dayjs_plugin_utc); // This plugin adds support for UTC mode
  dayjs.extend(window.dayjs_plugin_timezone); // This plugin adds support for time zones

  // Display Time in header
  updateTime();
  setInterval(updateTime, 1000); // Updates every 1 second

  function updateTime() {
    var today = dayjs().tz("America/Los_Angeles");
    $("#currentDay").text(today.format("dddd, MMMM Do h:mm A"));
  }

});
