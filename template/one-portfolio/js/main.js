$(document).ready(function() {
  // preload images images
  $('.hover-gif img').each(
    function() {
      $('<img/>')[0].src = this.src.replace('.jpg', '_animated.gif');
    }
  );

  // animate gif when you hover over it
  $('.hover-gif').hover(
    function() {
      $('img', this).attr('src', $('img', this).attr('src').replace('.jpg', '_animated.gif'));
    },
    function() {
      $('img', this).attr('src', $('img', this).attr('src').replace('_animated.gif', '.jpg'));
    }
  );
  // animate gif when you hover touch it
  $('.hover-gif').on('touchstart',
    function() {
      $('img', this).attr('src', $('img', this).attr('src').replace('.jpg', '_animated.gif'));
    }
  );

  // open nav menu on small screen
  $('.navbar-toggler').click(
    function() {
      $('.menu-modal').toggleClass('active');
      $('span', this).toggleClass('fa-bars');
      $('span', this).toggleClass('fa-times');
      $('body').toggleClass('menu-active')
    }
  );
});
