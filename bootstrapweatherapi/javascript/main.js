/* CURRENTLY IN: javascript/main.js */

(function(){	// protect the climate!

	// make the request
	// once we get data, do something

	/*********************
	
		var API = 'http://api.openweathermap.org/data/2.5/weather';
		var myData;
		$('.weather-req').on('submit', function( data ) { myData = data } );
		$('.weather-req1').on('submit', function( data ) { myData = data } );
		$('.weather-req2').on('submit', function( data ) { myData = data } );
		console.log( myData );	

	*********************/

	var API = 'http://api.openweathermap.org/data/2.5/weather'
	// $('.weather-req').on(
	// 	'submit'
	// 	, function( e ) {
	// 		e.preventDefault();

	// 		$.get(
	// 			API
	// 			, {
	// 				q: $('#select').val()
	// 			}
	// 			, function( data ) {
	// 				// THIS WILL ONLY GET CALLED *IF* api.openweathermap.org 
	// 				// DECIDES TO GIVE US INFO
	// 				console.log( data );
	// 				$( '.col-lg-6' )
	// 					.empty()
	// 					.append('<h1>'+data.name+'</h1>');

	// 			}
	// 			, "jsonp"
	// 		);
	// 	}
	// );

	$.listen('parsley:form:validated', function( formInstance ) {
		// the formInstance object that parsely gives us
		// has ONE property that stores where the form has validated or not
		// store that here
		var isValid = formInstance.validationResult;

		formInstance.submitEvent.preventDefault();

		// If form IS valid, THEN make GET request
		if ( isValid == true ) {
			// if we are here, form is valid, let's make our GET request
			$.get(
				API
				, {
					q: $('#select').val()
				}
				, function( data ) {
					// THIS WILL ONLY GET CALLED *IF* api.openweathermap.org 
					// DECIDES TO GIVE US INFO
					console.log( data );
					$( '.col-lg-6' )
						.empty()
						.append('<h1>'+data.name+'</h1>');

				}
				, "jsonp"
			);
		}

		
	});

})();

//js event driven