/* Новые тарифы */

$(".accordeon__trigger").click(function() {
  if ($(this).hasClass("accordeon__trigger--open")) {
    $(this).removeClass("accordeon__trigger--open");
    $(".rates__content--individual").slideUp();
  } else {
    $(this).addClass("accordeon__trigger--open");
    $(".rates__content--individual").slideDown();
  }
});

$(window).resize(function() {
  if (($(".container--rates").css("width") < "978px") && ($(".container--rates").css("width") > "360px")) {
    $(".rates__content-bottom .btn").addClass("btn--750");
  } else {
    $(".rates__content-bottom .btn").removeClass("btn--750");
  }
  if ($(".container--rates").css("width") >= "750px") {
    $(".rates__content tr > td:nth-child(2)").css("display", "table-cell");
    $(".rates__content tr > td:nth-child(3)").css("display", "table-cell");
    $(".rates__content tr > td:nth-child(4)").css("display", "table-cell");
  } else {
    $(".rates__content tr > td:nth-child(2)").css("display", "table-cell");
    $(".rates__content tr > td:nth-child(3)").css("display", "none");
    $(".rates__content tr > td:nth-child(4)").css("display", "none");
  }
});

$(document).ready(function() {
  if (($(".container--rates").css("width") < "978px") && ($(".container--rates").css("width") > "360px")) {
    $(".rates__content-bottom .btn").addClass("btn--750");
  } else {
    $(".rates__content-bottom .btn").removeClass("btn--750");
  }
});

$(".rates__arrow--right").click(function() {
  if ($(".rates__content tr > td:nth-child(2)").css("display") != "none") {
    $(".rates__content tr > td:nth-child(3)").css("display", "table-cell");
    $(".rates__content tr > td:nth-child(2)").css("display", "none");
  } else {
    $(".rates__content tr > td:nth-child(4)").css("display", "table-cell");
    $(".rates__content tr > td:nth-child(3)").css("display", "none");
  }
});

$(".rates__arrow--left").click(function() {
  if ($(".rates__content tr > td:nth-child(4)").css("display") != "none") {
    $(".rates__content tr > td:nth-child(3)").css("display", "table-cell");
    $(".rates__content tr > td:nth-child(4)").css("display", "none");
  } else {
    $(".rates__content tr > td:nth-child(2)").css("display", "table-cell");
    $(".rates__content tr > td:nth-child(3)").css("display", "none");
  }
});

/* Start-up */

$(".rates__content--individual .rates__content-middle tr:nth-child(2) td:nth-child(2)").mouseover(function() {
  $(".rates__content--individual .rates__content-middle tr:nth-child(2)").addClass("rates__content-bg--1");
});

$(".rates__content--individual .rates__content-middle tr:nth-child(3) td:nth-child(2)").mouseover(function() {
  $(".rates__content--individual .rates__content-middle tr:nth-child(3)").addClass("rates__content-bg--1");
});

$(".rates__content--individual .rates__content-middle tr:nth-child(4) td:nth-child(2)").mouseover(function() {
  $(".rates__content--individual .rates__content-middle tr:nth-child(4)").addClass("rates__content-bg--1");
});

$(".rates__content--individual .rates__content-middle tr:nth-child(2) td:nth-child(2)").mouseout(function() {
  $(".rates__content--individual .rates__content-middle tr:nth-child(2)").removeClass("rates__content-bg--1");
});

$(".rates__content--individual .rates__content-middle tr:nth-child(3) td:nth-child(2)").mouseout(function() {
  $(".rates__content--individual .rates__content-middle tr:nth-child(3)").removeClass("rates__content-bg--1");
});

$(".rates__content--individual .rates__content-middle tr:nth-child(4) td:nth-child(2)").mouseout(function() {
  $(".rates__content--individual .rates__content-middle tr:nth-child(4)").removeClass("rates__content-bg--1");
});

/* Business */

$(".rates__content--individual .rates__content-middle tr:nth-child(5) td:nth-child(3)").mouseover(function() {
  $(".rates__content--individual .rates__content-middle tr:nth-child(5)").addClass("rates__content-bg--2");
});

$(".rates__content--individual .rates__content-middle tr:nth-child(6) td:nth-child(3)").mouseover(function() {
  $(".rates__content--individual .rates__content-middle tr:nth-child(6)").addClass("rates__content-bg--2");
});

$(".rates__content--individual .rates__content-middle tr:nth-child(7) td:nth-child(3)").mouseover(function() {
  $(".rates__content--individual .rates__content-middle tr:nth-child(7)").addClass("rates__content-bg--2");
});

$(".rates__content--individual .rates__content-middle tr:nth-child(5) td:nth-child(3)").mouseout(function() {
  $(".rates__content--individual .rates__content-middle tr:nth-child(5)").removeClass("rates__content-bg--2");
});

$(".rates__content--individual .rates__content-middle tr:nth-child(6) td:nth-child(3)").mouseout(function() {
  $(".rates__content--individual .rates__content-middle tr:nth-child(6)").removeClass("rates__content-bg--2");
});

$(".rates__content--individual .rates__content-middle tr:nth-child(7) td:nth-child(3)").mouseout(function() {
  $(".rates__content--individual .rates__content-middle tr:nth-child(7)").removeClass("rates__content-bg--2");
});

/* VIP */

$(".rates__content--individual .rates__content-middle tr:nth-child(8) td:nth-child(4)").mouseover(function() {
  $(".rates__content--individual .rates__content-middle tr:nth-child(8)").addClass("rates__content-bg--3");
});

$(".rates__content--individual .rates__content-middle tr:nth-child(9) td:nth-child(4)").mouseover(function() {
  $(".rates__content--individual .rates__content-middle tr:nth-child(9)").addClass("rates__content-bg--3");
});

$(".rates__content--individual .rates__content-middle tr:nth-child(10) td:nth-child(4)").mouseover(function() {
  $(".rates__content--individual .rates__content-middle tr:nth-child(10)").addClass("rates__content-bg--3");
});

$(".rates__content--individual .rates__content-middle tr:nth-child(8) td:nth-child(4)").mouseout(function() {
  $(".rates__content--individual .rates__content-middle tr:nth-child(8)").removeClass("rates__content-bg--3");
});

$(".rates__content--individual .rates__content-middle tr:nth-child(9) td:nth-child(4)").mouseout(function() {
  $(".rates__content--individual .rates__content-middle tr:nth-child(9)").removeClass("rates__content-bg--3");
});

$(".rates__content--individual .rates__content-middle tr:nth-child(10) td:nth-child(4)").mouseout(function() {
  $(".rates__content--individual .rates__content-middle tr:nth-child(10)").removeClass("rates__content-bg--3");
});

/* END - Новые тарифы */