/* YOU ARE IN: sample_projec-t_folder/javasc-ript/sc-ript.js */
(function() {// protect the queen!


	var arr = [ 
		'c-1'
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

	//var previous = null;

	//var compare = function(){
	//	if ( current == previous ) // save previous = current
	//};

	//null = var = to nothing


	var card_set = $( '.card-wrapper' );
	var what = function( e ){ 
			var cardClicked = $(this); // store whatever happened in cardClicked
			var index = $( ".card" ).index(this);
			cardClicked.addClass( arr[index] ); // add rank to card that was clicked
			cardClicked.attr( 'data' , arr[index]);
			if (card_set.find( '.card' ).hasClass( 'second' ) == true){
				card_set.find( '.card' ).removeClass( 'first second' );
				cardClicked.addClass( 'first' );

			}

			else if (card_set.find( '.card' ).hasClass( 'first' ) == true){
				cardClicked.addClass( 'second' );
				if (cardClicked.attr( 'data' ) != $( '.first' ).attr( 'data' )){
					card_set.find( '.card' ).removeClass( 'flipped' );
					card_set.find( '.card' ).addClass( 'done' );
				//else(cardClicked.attr( 'data' ) == $( '.first' ).attr( 'data' )){
					//card_set.find( ',card' ).addClass( 'flipped' );
			}

			}
			else if (card_set.find( '.card' ).hasClass('first') == false){
				cardClicked.addClass( 'first' );
			}			
				if ( cardClicked.hasClass( 'flipped' ) == false){ // next we check if clicked card has class.flipped 1st time is false 2nd time true
					//var current = arr.pop(); //store last rank in array in item
					cardClicked.addClass( arr[index] ); // add rank to card that was clicked
					cardClicked.attr( 'data' , arr[index]);
					}
				cardClicked.addClass( 'flipped' );//add flipped to card that was clicked 2nd time = Idempotence same as if only done once

		};	

		//if card.class first = card.class = second 


		// add matched class and don't flip over those that have it

		//data attributes




		cards.click( what );

	//add class 1st to 1st version of card clicked, class 2nd to 2nd version of card clicked
	//only keep card flipped if class = 
	// of previous card flipped
	// if not change class back to .card




	//!$ also means not

	//pick an item from array
	//store item in var
	//remove item that was picked
	//add class to the card





	//for ( var i = 0; i < cards.length; i = i + 1) {
		//$( cards[ i ] )
			//.addClass( arr[ i ])

})();