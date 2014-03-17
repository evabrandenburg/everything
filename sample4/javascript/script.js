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

	var what = function( e ){
			//var cardClicked = $(e.currentTarget);
			var cardClicked = $(this);
			cardClicked.addClass( 'flipped' );
		};

	cards.click( what );


	/*for ( var i = 0; i < cards.length; i = i + 1) {
		$( cards[ i ] )
			.addClass( arr[ i ]`)*/
	
})();