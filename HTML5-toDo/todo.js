//Getting the list from localstorage.
function get_todos(){
    var todos = new Array;
    var todo_str = localStorage.getItem('todo');
    if(todo_str != null){
        todos = JSON.parse(todo_str);
    }

    return todos;
}

//Add todos to the localstorage
function add_todos(){    
    var getInputVal = document.getElementById('task').value;

    var todos = get_todos();
    if(getInputVal !== ""){
        todos.push(getInputVal);
    }
    
    localStorage.setItem('todo',  JSON.stringify(todos));

    show_todos();

    return false;
}

//Display current list(s) in the localStorage
function show_todos(){
    var todos = get_todos();
    var displayTodos = '<ul>';
    for(var i=0;i<todos.length; i++){
        displayTodos += '<li>' + todos[i] + '<button class="remove" id="'+i+'">x</button></li>';
    };
    displayTodos += '</ul>';
    document.getElementById('todos').innerHTML = displayTodos;

    //Remove button click event initialized
    var removeTodo = document.getElementsByClassName('remove');
    for (var i=0; i<removeTodo.length; i++){
        removeTodo[i].addEventListener('click', remove_todo);
    };

    //Add a "tick" when the list clicked
    document.querySelector('ul').addEventListener('click', function(e){
        if(e.target.tagName === 'LI'){
            e.target.classList.toggle('checked');
        }
    }, false);
}

//Remove Todo(s) from the localStorage
function remove_todo(){
    var getId = this.getAttribute('id');

    var todos = get_todos();
    todos.splice(getId, 1);
    localStorage.setItem('todo', JSON.stringify(todos));

    show_todos();

    return false;
}

document.getElementById('add').addEventListener('click', add_todos);
show_todos();