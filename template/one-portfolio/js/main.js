$(document).ready(function() {
  // to animate gif when you hover over it
  $('.hover-gif').hover(
    function() {
      $('img', this).attr('src', $('img', this).attr('src').replace('static.gif', 'animated.gif'));
    },
    function() {
      $('img', this).attr('src', $('img', this).attr('src').replace('animated.gif', 'static.gif'));
    }
  );
});
