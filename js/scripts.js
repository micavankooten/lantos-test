/*!
 * Start Bootstrap - Grayscale v6.0.3 (https://startbootstrap.com/theme/grayscale)
 * Copyright 2013-2020 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
 */
(function ($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html, body").animate(
          {
            scrollTop: target.offset().top - 70,
          },
          1000,
          "easeInOutExpo"
        );
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $(".js-scroll-trigger").click(function () {
    $(".navbar-collapse").collapse("hide");
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $("body").scrollspy({
    target: "#mainNav",
    offset: 100,
  });

  // Collapse Navbar
  var navbarCollapse = function () {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
      $("#bars").attr("src","assets/img/fa-bars-black.svg");
      
    } else {
      $("#mainNav").removeClass("navbar-shrink");
      $("#bars").attr("src","assets/img/fa-bars.svg");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);
})(jQuery); // End of use strict

$( "#open-menu" ).click(function() {
  $('#modal-menu').modal('show');
});

$("#send_comment").submit((e) => {
  e.preventDefault();
  let valid = $("#send_comment").valid();
  if (valid) {
  }
});

$("#send_comment").validate({
  errorClass: "invalid",
  rules: {
    // simple rule, converted to {required:true}
    inputName: "required",
    inputLast: "required",
    // compound rule
    inputEmail: {
      required: true,
      email: true,
    },
    inputPhone: {
      required: true,
      number: true,
    },
    inputMessage: "required",
  },
  messages: {
    inputName: "Please specify your first name",
    inputLast: "Please specify your last name",
    inputEmail: {
      required: "We need your email address to contact you",
      email: "Your email address must be in the format of name@domain.com",
    },
    inputPhone: {
      required: "We need your Phone Number",
      email: "Your Phone Number be a number",
    },
    inputMessage: "Please write a message",
  },
});
