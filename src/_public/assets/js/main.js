let scrollPosition = 0;
const $body = document.querySelector("body");
$(document).ready(function () {
  $(".c-pickup__slider").slick({
    speed: 1100,
    infinite: true,
    autoplay: false,
    cssEase: "linear",
    arrows: true,
    dots: true,
    slidesToShow:5 ,
    centerMode: true,
    variableWidth: true,
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
