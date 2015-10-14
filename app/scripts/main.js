console.log('\'Allo \'Allo!'); // eslint-disable-line no-console
$(document).ready(function(){
	'use strict';
	$('a').smoothScroll();
	
	
	function fixDiv() {
    var $cache = $('#getFixed');
    if ($(window).scrollTop() > 100)
      $cache.css({
        'position': 'fixed',
        'top': '10px'
      });
    else
      $cache.css({
        'position': 'fixed',
        'top': 'auto'
      });
  }
  
  $(window).scroll(fixDiv);
  
  function wResize() {
         
             var winW = $(window).width();
         
         if ( winW < '1500') {
             $("#getFixed").hide(); 
         }
         else {
             $("#getFixed").show(); 
         }         
             
     }
    
     wResize();
    
    $(window).resize(function() {
        wResize();
    });
  
});
