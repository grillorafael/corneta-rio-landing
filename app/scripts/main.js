$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});


$(function() {
        $('#linkFunciona').mouseenter(function() {
            $('#iconeCog').addClass('fa-spin');
        });
});

$(function() {
        $('#linkFunciona').mouseleave(function() {
            $('#iconeCog').removeClass('fa-spin');
        });
});


jQuery(".responsive_headline").fitText(1.2, { minFontSize: '20px', maxFontSize: '70px' })

new WOW().init();
