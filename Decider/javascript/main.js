/* CURRENTLY IN: javascript/main.js */
/*(function(){

	var dInput = $( '.deciderInput' ); 

	dInput.on(
		'submit'
		, function(e){
			e.preventDefault();
			var formInput = $( '.form-inline' ).val(); //grab value of input and save to formInput
			//validate input
			if ( formInput == "" || formInput == " ") { //if nothing in task alert to fix
				alert( "enter something please!");
				//there is nothing left to do
				return;//stops function 
			}
	);
})();*/
$.fn.fullpage( {
	resize: true
} );

	$( 'h1' ).on('click', function() {
		$.fn.fullpage.moveSectionDown();
	})

      /*$.fn.scrollPath("getPath")
		// Move to 'start' element
		.moveTo(400, 50, {name: "start"})
		// Line to 'description' element
		.lineTo(400, 800, {name: "description"})*/
   