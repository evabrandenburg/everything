/* CURRENTLY IN: javascript/main.js */

(function() {	// protect the queen!

	// set the board
	var classArray = [
		'c1'
		, 'c4'
		, 'c3'
		, 'c4'
		, 'c2'
		, 'c2'
		, 'c3'
		, 'c1'
	];

	// grab all the cards in the HTML
	var cards = $( '.card' );

	cards.each(
		function( i, currentDivCard ) {
			var myClass = classArray[ i ];
			$( currentDivCard ).addClass( myClass );
			$( currentDivCard ).attr( 'data-cv', myClass );
		}
	);

	var numTimesFlipped = 0;

	// set up the flip 
	cards.on(
		'click'
		, function( e ) {
			// this is the code that responds to the 'click', yo
			e.preventDefault();

			checkIfFlippedOrMatched();
			numTimesFlipped++;	// we want to update AFTER we check if equals 2
			console.log( numTimesFlipped );

			// 'this' keyword: tells us WHICH div in the collection was clicked
			$( this ).addClass( 'flipped' );
		}
	);

	function checkIfFlippedOrMatched() {
		if ( numTimesFlipped == 2 ) {

			var divsThatAreFlipped = $( '.flipped' );
			console.log( divsThatAreFlipped );

			var flippedCardFirst = $( divsThatAreFlipped[ 0 ] );
			var flippedCardSecond = $( divsThatAreFlipped[ 1 ] );

			if ( 
				flippedCardFirst.attr( 'data-cv' ) == flippedCardSecond.attr( 'data-cv' )
			) {
				divsThatAreFlipped.addClass( 'matched' );
			}

			cards.removeClass( 'flipped' );
			numTimesFlipped = 0;
		}
	}

	// handle matched cards case

})();















