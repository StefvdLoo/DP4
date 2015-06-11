// external js: masonry.pkgd.js

$(document).ready( function() {
	
});

$(window).resize(function(){

	var pixels = 100;
	var screenWidth = window.screen.width;
	var percentage = ( screenWidth - pixels ) / screenWidth ; // 0.92%

       if ($(window).width() >= 319 && <= 780 ) {  
	       $('.grid').masonry({
			    itemSelector: '.grid-item',
			    columnWidth: 33.33%,
			    isOriginTop: false
			});
              // is mobile device
       }

       else{
       	  $('.grid').masonry({
			    itemSelector: '.grid-item',
			    columnWidth: 25%,
			    isOriginTop: false
			});
       }

  /*     if ($(window).width() <= 550) {  
	       $('.grid').masonry({
			    itemSelector: '.grid-item',
			    columnWidth: 90,
			    isOriginTop: false
			});
              // is mobile device
       }

       if ($(window).width() <= 750) {  
	       $('.grid').masonry({
			    itemSelector: '.grid-item',
			    columnWidth: 100,
			    isOriginTop: false
			});
              // is mobile device
       }

       if ($(window).width() <= 1000) {  
	       $('.grid').masonry({
			    itemSelector: '.grid-item',
			    columnWidth: 320,
			    isOriginTop: false
			});
              // is mobile device
       }

       if ($(window).width() >= 1001) {  
	       $('.grid').masonry({
			    itemSelector: '.grid-item',
			    columnWidth: 350,
			    isOriginTop: false
			});
              // is mobile device
       }         
	*/
	});