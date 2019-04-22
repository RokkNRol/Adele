const menuFour = document.querySelector('.menuFour');


function addClassFunFour() {
   this.classList.toggle("clickMenuFour");
}
menuFour.addEventListener('click', addClassFunFour);

// Slider slick
$(function () {

   $('.top-slider').slick({
      dots: true,
      autoplay: true,
      autoplaySpeed: 3000,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3
   });

   $('.menu--btn').click(function () {
      $('.header--menu-list').slideToggle();
   });

});
//end slider
