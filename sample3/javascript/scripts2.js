main();

/*function main() {
	var city = getURLParameter( 'city' );
	var country = getURLParameter( 'country' );

	if ( 
		city == "" 
		|| typeof city == "undefined" 
		|| city === null 
		|| city == 'null' 
	) city = 'nyc';

	if ( 
		country == "" 
		|| typeof country == "undefined"  
		|| country === null 
		|| country == 'null' 
	) country = 'us';

	var url = 'http://api.openweathermap.org/data/2.5/weather?q='+city+',%20'+country;

	$.ajax( 
		{
			url: url
			, dataType: 'jsonp'
			, success: function( data ) {
				// get temp in Kelvin
				var temp = data.main.temp;
				
				// get celcius
				var inCel = temp - 273.15;

				// get DOM ref
				var ans = $( '.ans' );
				var cont = $( '.container' );
				var footer = $( '.footer' );*/
				(function(){

	var button1 = $( 'button' );

	button1.click(function() { 
		var eva = new Date();
		$( '.time' ).text ( eva );

	}
		);
				cont.fadeOut( 
					function() {
						// test if inCel above or below 0 and handle
						if ( time = 0 ) ans.find('.yes').addClass('display');
						else ans.find('.no').addClass('display');			

						footer.addClass( 'display' );
					}
				);
			}
		}
	);
}

// get url apram
function getURLParameter(name) {
	return decodeURI(
		(RegExp(name + '=' + '(.+?)(&|$)').exec(location.search)||[,null])[1]
	);
}