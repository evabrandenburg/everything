/* YOU ARE IN: sample_project_folder/javascript/script.js */
(function(){	// protect the lemmings

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

	performAJAX( 'nyc', 'us' ); 
	$('.my-slider').bxSlider();

})();