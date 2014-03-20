// YOU ARE IN: sample_project_folder/javascript/script.js */

(function(){ // protect the lemmings!


	// if ptr in the box, set label to yes
	// $( '#box' ).on(
	// 	'mouseenter'
	// 	, function( e ) {
	// 		$( '#label' ).text( 'YES' );
	// 	}
	// );

	// if ptr is NOT in the box, set label to no
	// $( '#box' ).on(
	// 	'mouseleave'
	// 	, function( e ) {
	// 		$( '#label' ).text( 'NO' );
	// 	}
	// );


	function enterLeave( boxElement, labelElement, evtStr, lbl ) {
		boxElement.on(
			evtStr
			, function( e ) {
				labelElement.text( lbl );
			}
		);
	}

	var box = $( '#box' )
		, label = $( '#label' );
	enterLeave( box, label, 'mouseenter', 'YES' );
	enterLeave( box, label, 'mouseleave', 'NO' );

	var box2 = $( '#box2' )
		, label2 = $( '#label2' );
	enterLeave( box2, label2, 'mouseenter', 'YES_box2' );
	enterLeave( box2, label2, 'mouseleave', 'NO_box2' );

	// function initBarsAndLabels() {
	// 	var box = $( '#box' )
	// 	, label = $( '#label' );

	// 	enterLeave( box, label, 'mouseenter', 'YES' );
	// 	enterLeave( box, label, 'mouseleave', 'NO' );

	// 	var box2 = $( '#box2' )
	// 		, label2 = $( '#label2' );
	// 	enterLeave( box2, label2, 'mouseenter', 'YES_box2' );
	// 	enterLeave( box2, label2, 'mouseleave', 'NO_box2' );
	// }

	// function main() {
	// 	initBarsAndLabels();
	// }


	function func1() {}

	function func2() {}

	function func3() {}

	/** GLOBALS **/
	var __GLOBAL_VAR_1__ = 'foo';
	var __GLOBAL_VAR_2__ = 'bar';
	function main() {

		func1();
		func2();
		func3();
	}
	main();









})();

/*

step1: ()()

step2: ( function() {} )()

step3: 
(function(){
	
})()

*/