/* CURRENTLY IN: javascript/main.js */



(function(){
	var formInput = $( '.deciderInput' );
	var Decision = $( '.answer' );
	formInput.on(
		'submit'
		, function( e ) {
			e.preventDefault();

			// grab the task in the input field
			var choice1 = $( '#one1' ).val();
			var choice2 =$( '#one2').val();

			// validate task
			if ( choice1 == "" || choice1 == " " ) {
				alert('You forgot to enter something, idiot!');
				// there is nothing left to do, so peace
				return;
			}
      
			if ( choice2== "" || choice2 == " " ) {
				alert('You forgot about the second box, idiot!!');
				// there is nothing left to do, so peace
				return;
			}

var rando = Math.random();
      
console.log( rando );
      
if(rando < 0.5) { var finalChoice = choice1;
} 
else {var finalChoice = choice2;
}
      
      

			// if we made it here, then task is valid 
			var div = $( '<div/>' );
			div.addClass( 'list-group-item' );
			div.text( finalChoice );

			// create the 'x' button
			

			Decision.append( div );
			$( '#my-task' ).val( '' );
		}
	);

	// bind a click event to all list items
Decision.on(
		'click'
		, '.list-group-item'
		, function( e ) {
			$( this ).toggleClass( 'task-complete')
		}
	);

	Decision.on(
		'click'
		, '.close'
		, function( e ) {
			$( this ).parent().remove();
		}
	);




$.fn.fullpage( {
	resize: true
} );

	$( 'h1' ).on('click', function() {
		$.fn.fullpage.moveSectionDown();
	})

})();
