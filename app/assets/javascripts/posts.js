$(document).ready(function() {
  $("#owl-partners").owlCarousel({
  nav: false
  })
});

$('#carousel_1').bind('slide.bs.carousel', function (e) {
    console.log('slide event!');
});

$('#carousel_1').bind('slid', function (e) {
    console.log("slid event!");
});
//////// carousel 2
$('#carousel_2').bind('slide.bs.carousel', function (e) {
    console.log('slide event!');
});

$('#carousel_2').bind('slid', function (e) {
    console.log("slid event!");
});
//////// carousel 3
$('#carousel_3').bind('slide.bs.carousel', function (e) {
    console.log('slide event!');
});

$('#carousel_3').bind('slid', function (e) {
    console.log("slid event!");
});