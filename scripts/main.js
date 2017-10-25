/* Новые тарифы */

$(".accordeon__trigger").click(function() {
  if ($(this).hasClass("accordeon__trigger--close")) {
    $(this).removeClass("accordeon__trigger--close");
    $(".rates__content--individual").slideDown();
  } else {
    $(this).addClass("accordeon__trigger--close");
    $(".rates__content--individual").slideUp();
  }
});

/* END - Новые тарифы */