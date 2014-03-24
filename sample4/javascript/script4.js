(function() {	// protect the queen!
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
	// set the board
	var cards = $( '.card' ); //save class of card as a variable

	cards.each(
		function( i, element ) { //function takes index of array and elemnt that is current card
			var currentCard = $( element ); //current card is html element
			currentCard
				.addClass( arr[ i ] )			// add class for which card
				.attr( 'data-cv', arr[ i ] );	// add data-attr to find easily
		}
	);

	//flip card
	var numFlippedOver = 0; //start off with zero cards flipped over
	cards.on( //click on cards
		'click' //click event
		, function( e ) { //run this function when clicked
			e.preventDefault();//
			var me = $( this ); //store what happened on click

			checkNumberClicks();
		numFlippedOver++;// we want to update after we check if 2 

		//'this' keywork tells us which div in collection was clicked
		$( this ).addClass( 'flipped' );//show back side of card by adding class flipped

		}
	);

	function checkNumberClicks() {
		// check to see if numFlippedOver is > 2, if so, remove stuff
		//alert( numFlippedOver );
		if ( numFlippedOver == 2 ) { //run if two cards flipped over 
			var flippeds = $( '.flipped' ) //save class to var
				, first = $( flippeds[ 0 ] ).attr( 'data-cv')//see what data attr (aka card) first click showed
				, second = $( flippeds[ 1 ] ).attr( 'data-cv' )//see what card second click showed
			if ( first == second ) { //if first care = second 
				flippeds.addClass( 'matched' ); //keep cards by adding class matched
			}
			cards.removeClass( 'flipped' );//inf not take away class flipped
			numFlippedOver = 0; //zero cards are now flipped over
		}
	}
})();
