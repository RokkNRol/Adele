const menuFour = document.querySelector('.menuFour');


function addClassFunFour() {
   this.classList.toggle("clickMenuFour");
}
menuFour.addEventListener('click', addClassFunFour);
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

   $(".top--to-go").on("click", "a", function (event) {
      //отменяем стандартную обработку нажатия по ссылке
      event.preventDefault();

      //забираем идентификатор бока с атрибута href
      var id = $(this).attr('href'),

         //узнаем высоту от начала страницы до блока на который ссылается якорь
         top = $(id).offset().top;

      //анимируем переход на расстояние - top за 1500 мс
      $('body,html').animate({
         scrollTop: top
      }, 900);
   });


});
