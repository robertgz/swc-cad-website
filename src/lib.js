$(document).ready(function() {
  var offsetHeight = 31;

  $("body").scrollspy({
    target: ".spyon",
    offset: offsetHeight
  });  

});

var scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true
});

$('.navbar-collapse a').click(function (e) {
    if($('.navbar-toggle').css('display') == 'block' && !$(this).siblings().length){
        $('.navbar-collapse').collapse('toggle');
    }
});