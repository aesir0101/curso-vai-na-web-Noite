    $(document).ready(function () {
      const toggleButton = $('#hamburger');
      const mobileMenu = $('#mobileMenu');
      const body = $('body');

      toggleButton.click(function () {
        mobileMenu.toggleClass('active');
        body.toggleClass('menu-open');
      });

      $('#mobileMenu a').click(function () {
        mobileMenu.removeClass('active');
        body.removeClass('menu-open');
      });

      $(window).on('scroll', function () {
        if ($(this).scrollTop() > 50) {
          $('.navbar').css('background', 'rgba(44, 44, 44, 0.6)');
        } else {
          $('.navbar').css('background', '#2c2c2c');
        }
      });
    });
