(function(){ // protect the lemmings!

	/*// if ptr in box, set label to yes
	$( '#box' ).on(
		'mouseenter'
		, function( e ) {
			$( '#label' ).text( 'YES' );
		}
	);

	//if ptr is not in box, set label to no
	$( '#box' ).on(
		'mouseleave'
		, function( e ) {
			$( '#label' ).text( 'NO' );
		}
	); */

	var box = $( '#box' )
		, label = $( '#label' );

	function enterLeave( box, label, evtStr, lbl ) {
		box.on(
			evtStr
			, function( e ) {
				label.text( lbl );
			}
		);
	

	enterLeave( box, label, 'mouseenter', 'YES');
	enterLeave( box, label, 'mouseleave', 'NO');

	var box = $( '#box2' )
		, label = $( '#label2' );
	enterLeave( box, label, 'mouseenter', 'YES_box2');
	enterLeave( box, label, 'mouseleave', 'NO_box2');
	}


	//enterLeave ('mousemove', 'MOVING');

})();