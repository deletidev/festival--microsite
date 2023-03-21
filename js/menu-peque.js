$(".iconos-ayc").on("click", function () {
  $(".menumov").toggleClass("menuabierto");
  $("#open").toggleClass("fuera");
  $("#close").toggleClass("dentro");
});

$(window).scroll(function () {
  if ($(".menumov").hasClass("menuabierto")) {
    $(".menumov").removeClass("menuabierto");
    $("#open").removeClass("fuera");
    $("#close").removeClass("dentro");
  }
});
