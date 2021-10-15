
/*var todos = [
    {todoText: 'Item 1' , Completed: false},
    {todoText: 'Item 2' , Completed: true}, 
    {todoText: 'Item 3' , Completed: false} 
  ]; */
  var todos = [];
  var toggleAllButton = document.getElementById('toggle-all');
  toggleAllButton.addEventListener('click', toggleAll);

  var mainFooter = document.getElementById('main-footer');

  var removeAllButton = document.getElementById('remove-all-button');
  removeAllButton.addEventListener('click' , removeAll);

  if(todos.length !==0){
    displayTodos();
  }
  else{
    toggleAllButton.nextElementSibling.style.display = "none";
  }
  

  
  function add(newTodoText){
    todos.push({ todoText: newTodoText , Completed : false});
    removeAllButton.disabled= true;
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
    var todoCheckbox = event.currentTarget;
    var toggleId = todoCheckbox.id;//toggle-i
    var position = toggleId.split('-')[1];

    if(todos[position].Completed === false){
      todos[position].Completed = true
      
    }
    else{
      todos[position].Completed = false

    }
    displayTodos();
  }

  function toggleAll(event){
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
      event.currentTarget.nextElementSibling.style.opacity = .5;
      removeAllButton.disabled= true;

    }
    else {
      console.log('toggleAll true');
      for(var i=0; i<todos.length; i++){
        todos[i].Completed = true;
      }
      event.currentTarget.nextElementSibling.style.opacity = 1;
      removeAllButton.disabled= false;

    }
    displayTodos(); 
  }
  function removeAll(){
    todos.splice(0, todos.length);
    displayTodos();
  }

  function displayTodos(){
    var toggleAllButton = document.getElementById('toggle-all');
    var todosUl = document.getElementById('todos-ul');
    todosUl.innerHTML = '';
    if(todos.length !==0){
      toggleAllButton.nextElementSibling.style.display = "block";
      mainFooter.className = "d-flex";
      for (var i = 0; i < todos.length; i++) {
        var todoLi = document.createElement('li');
        todoLi.className = 'list-group-item';
        todoLi.id= 'li-'+i;
        var todoView = document.createElement('div');
        todoView.className = 'view';
        var removeTodo = document.createElement('button');
        todoLi.addEventListener('mouseenter' ,function(event){
          event.currentTarget.firstChild.lastChild.style.display = "block";
          event.stopPropagation();
        }, false);
        todoLi.addEventListener('mouseleave' ,function(event){
          event.currentTarget.firstChild.lastChild.style.display ="none";
          event.stopPropagation();
        }, false);

        removeTodo.addEventListener('click' , remove);
        var todoCheckbox = document.createElement('input');
        todoCheckbox.type = 'checkbox';
        todoCheckbox.id = 'toggle-'+i;
        todoCheckbox.addEventListener('click' , toggle);

        removeTodo.id='remove-' +i;
        removeTodo.className = 'remove-todo';
        removeTodo.innerText = 'x';
        
         

        var todoLabelView = document.createElement('label');
        todoLabelView.innerText = todos[i].todoText;
        if(todos[i].Completed === true){
          todoCheckbox.checked = true  ;
          todoLabelView.style.textDecoration = 'line-through';
          todoLabelView.style.opacity=.2; 
        }
        else{
          todoCheckbox.checked = false  ;
          todoLabelView.style.textDecoration = 'none';
          todoLabelView.style.opacity=1; 


        }
        todoView.appendChild(todoCheckbox);
        todoView.appendChild(todoLabelView);
        todoView.append(removeTodo);
        todoLi.appendChild(todoView);
        todosUl.appendChild(todoLi);

        //todoLi.id= i;
      /* if(todos[i].Completed === true){
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
        */
      } 
      document.getElementById('count-todos').lastChild.innerText = todos.length;
      /*if(todos){
        var todoToggleAll = document.createElement('button');
        todoToggleAll.id = "toggle-all";
        todoToggleAll.innerText='❯';
        document.getElementById('main').appendChild(todoToggleAll);

      }*/
    }
    else{
      toggleAllButton.nextElementSibling.style.display = "none";
      mainFooter.className = "d-none";

    }
  }



var toggleAllButton = document.getElementById('toggle-all-button');
toggleAllButton.addEventListener('click', toggleAll);

var addInput = document.getElementById('add-input');
var addButton = document.getElementById('add-button');
addButton.addEventListener('click', add);

