(function(){

	// find element to add click event to
	var mobileButton = $( .'mobile-nav-button' );

	//save the mobile version of the nav to a variable as well 
	var mobileNav = $( '.mobile-nav-tree' );

	//wire up a click event

	mobileButton.on( 
		'click'
		, function( e ){
			e.preventDefault();
			mobileNav.slideToggle( 'fast' );
		}
	);

	//when ckick occurs, do something

})();