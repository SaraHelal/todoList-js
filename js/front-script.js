
var todoInputAddHeader = document.getElementById('todo-input-header');
todoInputAddHeader.addEventListener('keyup' , function(event){

  if (event.code === "Enter") {
    event.preventDefault();
    
    if(todoInputAddHeader){
      var newTodoText = todoInputAddHeader.value;
      add(newTodoText);
      todoInputAddHeader.value= '';
    }
  }
});


