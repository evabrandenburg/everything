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
		//randomize array
	].sort(function() {
  return .5 - Math.random();
});

	// set the board

	var cards = $( '.card' );
	//grab cards in html
	cards.each( 
		function( i, currentDivCard ) { // function needs item in array and the div of the card we're on aka first 2nd 3rd ... card
			var myClass = arr[ i ]; //save array item as var myClass
			$( currentDivCard ).addClass( myClass ); //add class aka what's behind card to each card
			$( currentDivCard ).attr( 'data-cv', myClass ); //give current card data attribute same as class
		}
	);

	var numTimesFlipped = 0; //start off game with nothing flipped... var keeps track of how many flips
	//set up the flip

	cards.on( //click function
		'click'
		, function ( e ) { //click event
		//code that responds to click
		e.preventDefault();

		checkIfFlippedOrMatched(); //run function 
		numTimesFlipped++;// we want to update after we check if 2 add 2 two number of clicks 

		//'this' keywork tells us which div in collection was clicked
		$( this ).addClass( 'flipped' );//add class flipped to flip card

		}
	);

	function checkIfFlippedOrMatched() {
		if ( numTimesFlipped == 2 ) { //run if 2 cards flipped

			var divsThatAreFlipped = $( '.flipped' ); //how many divs flipped?

			var flippedCardFirst = $( divsThatAreFlipped[ 0 ] ); //grab 0 array flipped
			var flippedCardSecond = $( divsThatAreFlipped[ 1 ] ); // grab 1 array flipped 
			//handle matched cards
			if ( 
				flippedCardFirst.attr( 'data-cv' ) == flippedCardSecond.attr( 'data-cv' ) //if 2 most recent cards have matching data attributes aka back of card
			) {
				divsThatAreFlipped.addClass( 'matched' ); //add class matched to keep em flipped
			}

			cards.removeClass( 'flipped' ); //if they don't match flip back over
			numTimesFlipped = 0; //change the counter of flips back to zero
		}

	}
	//alert('you win!' );





//$() return jquery object                                                                                                                                                                                                                                                  
})();