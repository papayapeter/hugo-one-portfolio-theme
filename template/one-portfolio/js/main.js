$(document).ready(function() {
  // to animate gif when you hover over it
  $('.hover-gif').hover(
    function() {
      $('img', this).attr('src', $('img', this).attr('src').replace('.gif', '_animated.gif'));
    },
    function() {
      $('img', this).attr('src', $('img', this).attr('src').replace('_animated.gif', '.gif'));
    }
  );

  // to open nav menu on small screens
  $('.navbar-toggler').click(function() {
    $('.menu-modal').toggleClass('menu-active');
    $('span', this).toggleClass('fa-bars');
    $('span', this).toggleClass('fa-times');
    $('body').toggleClass('menu-active')
  });
});
