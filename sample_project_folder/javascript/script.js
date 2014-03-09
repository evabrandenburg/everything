/* YOU ARE IN: sample_project_folder/javascript/script.js */
(function() { // protect the lemmings! 
	var images = [
		'http://placekitten.com/g/200/300'
		, 'http://placekitten.com/g/300/500'
		, 'http://placekitten.com/g/500/300'
		, 'http://placekitten.com/g/100/300'
		, 'http://placekitten.com/g/600/600'
	];

	var currPosition = 0;
	var imageEl = $( 'img' );

	var nextButton = $( '.next' );

	// this function will get called when the user clicks on the nextButton
	// functions that get called in response to an event occurance are classed
	// **callback functions**
	function nextButtonClick() {
		// update current position by one
		currPosition += 1; // the same as: currPosition = currPosition+1

		// IF WE REACHED THE END OF THE ARRAY, RESET 
		// currPosition TO ZERO
		if ( currPosition == images.length ) {
			currPosition = 0;
		}

		// grab the src of the new image 
		var newImageSrc = images[ currPosition ];
		console.log( newImageSrc, currPosition )
		// set imageEl src attribute to the new image src
		imageEl.attr( 'src', newImageSrc );
	}

	nextButton.click( nextButtonClick );

	function keyPressEvent( e ) {
		if ( e.which == 97 ) {
		nextButtonClick();
		}
	}

	$( document ).keypress( keyPressEvent );


})();

/**********

	nextButton.addClass( 'test-class' );

	var someClass = 'foo';
	nextButton.addClass( someClass );

		// nextButton.click(
	// 	function() {
	// 		alert();
	// 	}
	// );
**********/