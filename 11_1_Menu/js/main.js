$(document).ready(function () {
  $(".menu-link").click(function () {
    $("menu").css({
      transform: "translateX(0px)",
      transition: "1s",
    });
  });

  $(".close-btn").click(function () {
    $("menu").css({
      transform: "translateX(-100%)",
      transition: "1s",
    });
  });

  var $links = $("ul li a");
  $links.click(function () {
    var $attr = $(this).attr("href");
    var $top = $($attr).offset().top; 
    $("html, body").animate(
        {
          scrollTop: $top,
        },
        700
      );
    $("menu").css({
        transform: "translateX(-100%)",
        transition: "1s",
      });
  });
});
