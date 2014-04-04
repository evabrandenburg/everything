/* CURRENTLY IN: javascript/main.js */



(function(){
/*
	var todoForm = $( '.deciderinput' );
	todoForm.on(
		'submit'
		, function( e ) {
			e.preventDefault();

			// grab the task in the input field
			var task = $( '#one1' ).val();

			// validate task
			if ( task == "" || task == " " ) {
				alert('Enter a task, please!');
				// there is nothing left to do, so peace
				return;
			}

	);*/




$.fn.fullpage( {
	resize: true
} );

	$( 'h1' ).on('click', function() {
		$.fn.fullpage.moveSectionDown();
	})

})();
