/*(function(){ // protect the lemmings!

	var __CONST_TIME__ = 20;

	var now = new Date().getHours();

	var isYes = 'NO';

	if ( now >= __CONST_TIME__ ) {
		isYes = 'YES';
	}

	var DOMEl = $( '.yesno' );
	DOMEl.text( isYes );

})();*/

 (function(){

 	var button1 = $( 'button' );

 	button1.click(
 		function() { 
 			var date = new Date();
 			var minute = date.getMinutes();
 			// PLAN: if minute < 10, pad with a '0'
 			if ( minute < 10 ) {
 				minute = '0'+minute;
 			 }
 			minute = padNum( minute, 10 );

			var minute = padNum( date.getMinutes(), 10 );

 			var hour = date.getHours();
 			if ( hour > 12 ) {
 				hour = hour - 12;
			}

 			 if ( hour < 12) {
 				hour = '0' + hour;
 			 }
 			hour = padNum( hour, 12 );
 			$( '.time' ).text ( hour + ':' + minute );
 		}

 	);

 	function padNum( varToPad, restriction ) {
 		if ( varToPad < restriction ) {
 			varToPad = '0' + varToPad;
 		}
 		return varToPad;
 	}

 	// check to see if it is past 8PM
 	var date = new Date();
 	var hour = date.getHours();

 	if ( hour == 22 && minute == 5 ) {
 		$( '.yesno').text ( 'MAKE A WISH' );
 	} else {
 		$( '.yesno').text ( 'NO' );
 	}

/*
		PLAN: perform an ajax request
		grab the data -> sunset time
		grab current time
		IF current time >= sunset time, it is NOT light out
		IF current time < sunset time, it IS light out
		profit
	*/

	function performAJAX( city, country ) {
		// BUILD THE URL
		var url = 
			'http://api.openweathermap.org/data/2.5/weather?q='+
			city +
			',%20' + // encoding for space in URL
			country;

		// PERFORM GET REQUEST
		$.get(
			url
			, ajaxSuccess
			, 'jsonp'
		);



	}

	function ajaxSuccess( data ) {

		var sunsetTime = data.sys.sunset;

		var d = new Date();
		var now = d.getTime()/1000;
		// can also be done as: $.now with jquery

		// cache the body selector, yo
		var body = $('body');

		if ( sunsetTime >= now ) {
			// it is NOT past sunset
			//body.addClass( 'daytime' );
			$( '.nighttime' ).remove();
		}
		else {
			// it IS past sunset
			//body.addClass( 'nighttime' );
			$( '.daytime' ).remove();
		}
		$(".panorama").panorama_viewer({
		    repeat: true              // The image will repeat when the user scroll reach the bounding box. The default value is false.
		              // Toggle this to false to hide the initial instruction overlay
		  });
	}

	performAJAX( 'nyc', 'us' );

	// var sliderOpts = {
	// 	mode: 'vertical'
	// };

	// $('.my-slider').bxSlider( sliderOpts );
console.log( $( '.panorama' ) );
	


	



})();