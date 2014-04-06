$(document).ready(function(){
    // this is chrome, consoles are cool
    console.log( 'hello, wrold' );
    $( '#the__todo-app' ).css( 'width', '500px' );

    // find all tasks from storage and display
    getTasks();
    // handle adding tasks
    addTask();
    // we must update storage and UI when toggling
    toggleComplete();
    // handle deleting items
    initCloseButton();
    // testing stuff
    chrome.storage.sync.set({'value': 'hello, wrold'}, function() {});
    chrome.storage.sync.get(function(items){ console.log( items ); } );
    chrome.storage.onChanged.addListener(function(changes, namespace){
        for( key in changes ) {
            var storageChange = changes[ key ];
            console.log( storageChange );
        }
    });
});

function garbageCollect() {
    // should never really be called except for big eff-ups
    chrome.storage.sync.get(function( items ) {
        tasks = items.tasks;
        console.log( tasks );
        var i = 0;
        var len = tasks.length;
        while ( i < tasks.length ) {
            var task = tasks[ i ];
            if ( typeof task.task == "undefined" ) {
                console.log( task );
            }
            i++;
        }

        chrome.storage.sync.set({'tasks': tasks}, function(){
            console.log( 'HER' );
        });
    });
}

function initCloseButton() {
    var tasks;
    chrome.storage.sync.get(function( items ) {
        if ( typeof items.tasks == "undefined" ) return false;
        tasks = items.tasks;

        var wrapper = $( '#the__todo-app' );
        wrapper.find('.tasks').on(
            'click'
            , '.close'
            , function( e ) {
                e.stopPropagation();
                var text = $( this ).parent().text();
                text = text.substring( 0, text.length - 1 );
                console.log( text );
                for ( var i = 0; i < tasks.length; i++ ) {
                    var task = tasks[ i ];
                    if ( task.task == text ) {
                        tasks.splice( i, 1 );
                        console.log( tasks );
                        chrome.storage.sync.set({'tasks': tasks}, function(){});
                        $( this ).parent().remove();
                    }
                }
        });
    });
}

function toggleComplete() {
    var wrapper = $( '#the__todo-app' );
    wrapper.find('.tasks').on(
        'click'
        , 'div'
        , function( e ) {
            var me = $( this );
            me.toggleClass( 'strike' );

            var isDone = 0;
            if ( me.hasClass( 'strike' ) ) {
                isDone = 1;
            } else {
                isDone = 0;
            }

            chrome.storage.sync.get(function( items ) {
                if ( typeof items.tasks == "undefined" ) return false;
                for ( var i = 0; i < items.tasks.length; i++ ) {
                    var task = items.tasks[ i ];
                    if ( task.task == me.text().substring( 0, me.text().length - 1 ) ) {
                        task.isDone = isDone;

                        chrome.storage.sync.set({'tasks': items.tasks}, function(){});
                        break;
                    }
                }
            });
        }
    );
}

function getTasks() {
    chrome.storage.sync.get(function( items ) {
        if ( typeof items.tasks == "undefined" ) return false;
        var tasks = $( '.tasks' );
        for ( var i = 0; i < items.tasks.length; i++ ) {
            var curr = $( '<div />' );
            var task = items.tasks[ i ];
            curr.text( task.task );
            curr.addClass( 'list-group-item' );
            if ( task.isDone ) curr.addClass( 'strike' );
            curr.append( '<button type="button" class="close">x</button>' );
            tasks.append( curr );
        }
    });
}
function addTask() {
    var button = $( '#the__todo-app .submit' );
    var input = $( '#the__todo-app .input' );
    button.on(
        'click'
        , function( e ) {
            e.preventDefault();
            console.log( '1' );
            var val = input.val();
            console.log( val );
            //if ( val == "" || " " ) return false;
            console.log( '2' );
            chrome.storage.sync.get(function( items ) {
                var tasks;
                console.log( '3' );
                if ( items.length == 0 || typeof items.tasks == "undefined" ) { tasks = []; }
                else { tasks = items.tasks; }
                console.log( items, tasks );
                tasks.push(
                    {
                        task: val
                        , isDone: 0
                    }
                );
                chrome.storage.sync.set({'tasks': tasks}, function(){
                    var tasks = $( '.tasks' );
                    tasks.append( '<div class="list-group-item">'+val+'<button type="button" class="close">x</button><div>' );
                    input.val( '' );
                });
            });
        }
    );
}
