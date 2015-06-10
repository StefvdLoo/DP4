// external js: masonry.pkgd.js

$(document).ready( function() {
	
});

$(window).resize(function(){

       if ($(window).width() <= 400) {  
	       $('.grid').masonry({
			    itemSelector: '.grid-item',
			    columnWidth: 80,
			    isOriginTop: false
			});
              // is mobile device
       }

       if ($(window).width() <= 550) {  
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

	});