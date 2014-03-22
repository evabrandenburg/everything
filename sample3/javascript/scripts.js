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

		//cache the body selector
		var body = $( 'body' );

		if ( sunsetTime >= now ) {
			// it is NOT past sunset
			body.addClass( 'daytime' );
		}
		else {
			// it IS past sunset
			body.addClass( 'nighttime' );
		}
	}

	



})();