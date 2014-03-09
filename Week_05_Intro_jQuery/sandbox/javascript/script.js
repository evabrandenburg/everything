/* YOU ARE IN: sample_project_folder/javascript/script.js */

var h1 = $( 'h1' );
var spans = $( 'span' );
var one = $( '.one' );
var two = $( '#two' );

console.log( h1 );
console.log( spans );
console.log( one );
console.log( two );

// =======================

// I want to take all items with
// clss="main-content" and add a 
// class called "found" to it. 

var main = $( '.main-content' );

// spaces in between words assumes multiple classes
main.addClass( 'found one two three' );
// removeClass takes the classes that must be removed
//main.removeClass( 'two' );
//main.removeClass( 'one three' );
//maine.removeClass(); // this will remove ALL classes

main.css( 'color', 'green' );

// METHOD 1
/*
main.css( 'background-color', 'blue');
main.css( 'border', 'red' );
main.css( 'font-size', '100px' );
*/

// METHOD 2 
main.css(
	{
		'background-color': 'blue'
		, 'border': 'red'
		, 'font-size': '100px'
	}
);


// var cssOpt = {
// 	'background-color': 'blue'
// 	, 'border': 'red'
// 	, 'font-size': '100px'
// }

// main.css( cssOpt );







/*var tfof = [ 718, 52, 136, 14];
var sum = 0;
for ( var i = 0; i <= tfof.length-1; i = i + 1) {
	sum = tfof[ i ] + sum;
	console.log( 'THE ITERATION IS: ' + i );
	console.log('THE SUM IS: ' + sum);
}

console.log( 'DONE' );
console.log( sum );

//

var Table = {};
Table.legs = 4;
Table.material = 'wood';
Table.dimensions = [ 10, 10 ];
Table.price = 'expensive';

var Child = {
	age: 3
	, weigth: 20
	, speak: function() {
		alert( 'math' );
	}
};

console.log( Table, Child );*/