/* CURRENTLY IN: javascript/main.js */

(function(){ 

	var todoForm =$( '.todo-list'); // form
	var tasks = $( '.tasks' );//container to keep tasks in 
	todoForm.on(
		'submit'
		, function(e){
			e.preventDefault();
			//grab the task in the input field
			var task = $( '#my-task' ).val(); //grab value of task and save to task
			//validate task
			if ( task == "" || task == " ") { //if nothing in task alert to fix
				alert( "enter a task please!");
				//there is nothing left to do
				return;//stops function 
			}

		//if made it here task is valid
			var div = $( '<div/>' );// shorthand for <div></div> create div for task
			div.addClass( 'list-group-item'); // class list group item
			div.text( task ); //add text to div

			tasks.append( div ); // after you append to div 
			$( '#my-task' ).val( '' );// make value of task input nothing
		}
	);
})();

// || = or