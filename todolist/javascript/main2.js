/* CURRENTLY IN: javascript/main.js */

(function(){	// protect the puffins!

	var todoForm = $( '.todo-list' );
	var tasksHolder = $( '.tasks' );
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

			// if we made it here, then task is valid 
			var div = $( '<div/>' );
			div.addClass( 'list-group-item' );
			div.text( task );

			// create the 'x' button
			var button = $( '<button/>' );
			button.addClass( 'close' );
			button.attr( 'type', 'button' );
			button.text( 'x' );

			div.append( button );

			tasksHolder.append( div );
			$( '#my-task' ).val( '' );
		}
	);

	// bind a click event to all list items
	tasksHolder.on(
		'click'
		, '.list-group-item'
		, function( e ) {
			$( this ).toggleClass( 'task-complete')
		}
	);

	tasksHolder.on(
		'click'
		, '.close'
		, function( e ) {
			$( this ).parent().remove();
		}
	);
})();


