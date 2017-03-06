$(document).ready(function(){
	$( ".circle" ).click(function() {
  $(".circle" ).parent().removeClass("circle2");
  $(this).parent().toggleClass("circle2");
  
   
});
});