$(document).ready(function() {

  //  $('main').hide(3000).delay(1000).show(500)
$('.portret img').mouseenter( function(){
  $(this).fadeTo(1000, 0);
}).mouseleave( function() {
  $(this).fadeTo(2000, 1);
}).click( function() {
  $(this).next().toggle(2000);
});

$('footer').click( function() {
  $(this).animate({
    top: '-=20px',
    opacity: '-=.2'
  }, 1000).dblclick( function() {


  $(this).animate({
    top: '0',
    opacity: '1'
  }, 3000);
});
})


}); //einde document ready
