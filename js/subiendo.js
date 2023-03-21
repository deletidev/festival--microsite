$(document).ready(function () {
  $(".subiendo").click(function (e) {
    e.preventDefault();
    //Id del elemento cliqueable
    $("html, body").animate({ scrollTop: 0 }, 1500);
    return false;
  });
  $(window).scroll(function (e) {
    e.preventDefault();
    if ($(this).scrollTop() > 300) {
      $(".subiendo").css("opacity", "1");
    } else {
      $(".subiendo").css("opacity", "0");
    }
  });
});
