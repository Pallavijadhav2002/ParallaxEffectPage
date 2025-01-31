
(function($) {
    var $pMain = $("#parallax_main"),
      $pToolbar = $pMain.find("#toolbar_main"),
      $pTitle = $pToolbar.find("#title_main"),
      $pNavTrigger = $pMain.find("#nav-button"),
      alpha = 0,
      scale = 1,
      maxHeight = 350; // Define maxHeight initially
    $(window).scroll(function() {
      var st = $(window).scrollTop();
      if (st <= 0) {
        maxHeight = 350;
      } else if (st > 350) {
        alpha = 1;
        maxHeight = 70;
      } else {
        alpha = 0.0 + 1.2 * st / 350;
        scale = 1 - 0.20 * st / 350;
        maxHeight = 350 - 280 * (st / 350); // Calculate maxHeight based on scroll position
      }
      $pToolbar.css("background", "rgba(33,14,61," + alpha + ")");
      $pMain.css({
        'max-height': maxHeight + "px"
      });
      $pTitle.css('transform', 'scale(' + scale + ')');
    });
    $pNavTrigger.click(function() {
      $(this).toggleClass('active');
    });
    var scrollToTopBtn = $("#scrollToTopBtn");

  $(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
      scrollToTopBtn.fadeIn();
    } else {
      scrollToTopBtn.fadeOut();
    }
  });

  scrollToTopBtn.click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 800);
    return false;
  });
  })(jQuery);

  const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  origin: "bottom",
  distance: "50px",
  duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__btns", {
  ...scrollRevealOption,
  delay: 1500,
});

const banner = document.querySelector(".banner__container");

const bannerContent = Array.from(banner.children);

bannerContent.forEach((item) => {
  const duplicateNode = item.cloneNode(true);
  duplicateNode.setAttribute("aria-hidden", true);
  banner.appendChild(duplicateNode);
});

ScrollReveal().reveal(".arrival__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".sale__image img", {
  ...scrollRevealOption,
  origin: "left",
});
ScrollReveal().reveal(".sale__content h2", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".sale__content p", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".sale__content h4", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".sale__btn", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".favourite__card", {
  ...scrollRevealOption,
  interval: 500,
});


