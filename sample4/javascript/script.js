/* YOU ARE IN: sample_projec-t_folder/javasc-ript/sc-ript.js */
(function() {// protect the queen!


	var arr = [ 
		'c-1'
		, 'c-'
		, 'c-3'
		, 'c-4'
		, 'c-5'
		, 'c-6'
		, 'c-7'
		, 'c-8'
		, 'c-9'
		, 'c-10'
		, 'c-11'
		, 'c-12'
		, 'c-13' 
		, 'c-1'
		, 'c-2'
		, 'c-3'
		, 'c-4'
		, 'c-5'
		, 'c-6'
		, 'c-7'
		, 'c-8'
		, 'c-9'
		, 'c-10'
		, 'c-11'
		, 'c-12'
		, 'c-13'
	];

	//add class .flipped to 
	//each .card class as it is clicked
	//stimulus = when you click a card
	//response = adding the class 
	//.flipped to card clicked

	var cards = $( '.card' );

	var what = function( e ){ //
			var cardClicked = $(this); // store whatever happened in cardClicked
				if ( cardClicked.hasClass( 'flipped' ) == false){ // next we check if clicked card has class.flipped 1st time is false 2nd time true
					var item = arr.pop(); //store last rank in array in item
					cardClicked.addClass( item ); // add rank to card that was clicked
					}
				cardClicked.addClass( 'flipped' );//add flipped to card that was clicked 2nd time = Idempotence same as if only done once
		};

	cards.click( what );


	//!$ also means not

	//pick an item from array
	//store item in var
	//remove item that was picked
	//add class to the card





	//for ( var i = 0; i < cards.length; i = i + 1) {
		//$( cards[ i ] )
			//.addClass( arr[ i ])
	
})();