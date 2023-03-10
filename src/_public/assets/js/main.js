let scrollPosition = 0;
const $body = document.querySelector("body");
$(document).ready(function () {
  $(".c-pickup__slider").slick({
    speed: 700,
    infinite: true,
    autoplay: false,
    cssEase: "linear",
    arrows: true,
    dots: true,
    slidesToShow:5 ,
    centerMode: true,
    variableWidth: true,
    prevArrow: $('.c-pickup__prev'),
    nextArrow: $('.c-pickup__next'),
  });
  $(".c-mainvisual__slides").slick({
    speed: 1000,
    infinite: true,
    autoplay: true,
    fade: true,
    cssEase: "linear",
    arrows: false,
    dots: false,
    slidesToShow:1 ,
  });
});
