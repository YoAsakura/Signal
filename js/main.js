
$(".aside-years__list").on("click","a", function (event) {
   event.preventDefault();
   var id  = $(this).attr('href'),
       top = $(id).offset().top;
   $('body,html').animate({scrollTop: top-200}, 800);
});