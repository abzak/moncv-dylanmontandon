console.log('\'Allo \'Allo!'); // eslint-disable-line no-console
$(document).ready(function(){
	'use strict';
	$('a').smoothScroll();
	
  function wResize() {
        var winW = $(window).width();
        
        if ( winW < '1500') {
            $("#getFixed").hide(); 
        }
        else {
            $("#getFixed").show(); 
        }         
            
    }
   
   $(window).resize(function() {
       wResize();
   });
  
  $("#diplome").nanoGallery({
        itemsBaseURL:'./images',
		paginationMaxLinesPerPage: 1,
		thumbnailWidth: 165,
        thumbnailHeight: 110,
  });
});
