$(document).ready(function () {
  //On screen size change the pages refreshes to change between ham icon
  //to normal menu if not visible
  $(window).resize(function () {
    location.reload();
    $(window).scrollTop(0);
  });

  // On page scroll menu background change color
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 100) {
      $("header").css({
        background: "linear-gradient(135deg, #ec008c 0%, #fc6767 100%)",
        borderBottom: "1px solid #ffffff00",
      });
    } else {
      $("header").css({
        background: "#00000000",
        borderBottom: "1px solid #ffffff50",
      });
    }
  });

  // Show and hide menu on mobile devices
  $("#hamburger-icon").click(function () {
    $(".menu-wrap").css("display", "block");
  });
  $("#close-icon, .menu-item").click(function () {
    if ($(window).width() <= 414) {
      $(".menu-wrap").css("display", "none");
    } else {
      $(".menu-wrap").css("display", "block");
    }
  });
});
