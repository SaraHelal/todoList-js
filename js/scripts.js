
var todos = [
    {todoText: 'Item 1' , Completed: false},
    {todoText: 'Item 2' , Completed: false}, 
    {todoText: 'Item 3' , Completed: false} 
  ];
  
  displayTodos();
  
  function add(){
    var initialTodoText = addInput.value; 
    todos.push({ todoText: initialTodoText , Completed : false});
    addInput.value='';
    displayTodos();
  }

  function edit(event){
    var position = event.currentTarget.id.split('-')[1];
    var newTodoText = window.prompt('Edit todo: ' , todos[position].todoText);
    if(newTodoText){
      todos[position].todoText= newTodoText;
    }
    displayTodos();
  }
  
  function remove(event){
    var position = event.currentTarget.id.split('-')[1];
    todos.splice(position, 1);
    
    displayTodos();
  }
  
  function toggle(event){

    var toggleId = event.currentTarget.id;//toggle-i
    var position = toggleId.split('-')[1];

    if(todos[position].Completed === false){
      todos[position].Completed = true
    }
    else{
      todos[position].Completed = false
    }
    displayTodos();
  }

  function toggleAll(){
    var completedTodos = 0;

    for(var i=0; i<todos.length; i++){
      if(todos[i].Completed === true){
        completedTodos++;
      }
    }
    if(completedTodos === todos.length){
      console.log('toggleAll false');
      for(var i=0; i<todos.length; i++){
        todos[i].Completed = false;
      }
    }
    else {
      console.log('toggleAll true');
      for(var i=0; i<todos.length; i++){
        todos[i].Completed = true;
      }
    }
    displayTodos();
  }

  function displayTodos(){

    var todosUl = document.getElementById('todos-ul');
    todosUl.innerHTML = '';
    for (var i = 0; i < todos.length; i++) {
      var todoLi = document.createElement('li');
      
      //todoLi.id= i;
      if(todos[i].Completed === true){
        todoLi.innerText= '[x] ' + todos[i].todoText  ;
      }
      else{
        todoLi.innerText= '[ ] ' + todos[i].todoText  ;
      }

      var toggleButton = document.createElement('button');
      toggleButton.id= 'toggle-'+i;
      toggleButton.innerText = "Toggle";

      var editButton = document.createElement('button');
      editButton.innerText= "Edit";
      editButton.id= 'edit-'+i;

      var removeButton = document.createElement('button');
      removeButton.id= 'remove-'+i;
      removeButton.innerText= 'Remove';
      
      toggleButton.addEventListener('click' , toggle);
      editButton.addEventListener('click', edit);
      removeButton.addEventListener('click', remove);
      
      todoLi.appendChild(toggleButton);
      todoLi.appendChild(editButton);
      todoLi.appendChild(removeButton); 
      todosUl.appendChild(todoLi);

    } 
  }



var toggleAllButton = document.getElementById('toggle-all-button');
toggleAllButton.addEventListener('click', toggleAll);

var addInput = document.getElementById('add-input');
var addButton = document.getElementById('add-button');
addButton.addEventListener('click', add);

