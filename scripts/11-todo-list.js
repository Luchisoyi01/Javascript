const todoList = [{
  name:'make dinner',
  dueDate:'2023-07-19'
}, /*{
  name:'watch Youtube',
  dueDate:'17/07/2023'
}*/];

function renderTodolist(){
  let todoListHTML = ``;
  for(let i = 0; i < todoList.length; i++){
    const todoObject = todoList[i];
    //const name = todoObject.name; // same as const {name}= todoObject the method is called destructuring
    //const dueDate = todoObject.dueDate;
    const {name, dueDate} = todoObject;
    const html = `      
      <div>${name}</div>
      <div>${dueDate}</div>        
      <button onclick ="
        todoList.splice(${i}, 1);
        renderTodolist();
      " class="delete_button">Delete</button>`
      ; //generating the html 
    todoListHTML += html;
  }
  //console.log(todoListHTML); 
  
  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

function addTodo(){
  const inputElement = document.querySelector('.todoList');
  const name =inputElement.value;

  const dateInputElement = document.querySelector('.dueDate')
  const dueDate = dateInputElement.value
  //console.log(name);
  todoList.push({
    /*name: name,
    dueDate:dueDate */
    // shorthand property
    name, 
    dueDate 
  });
  //console.log(todoList);
  inputElement.value='';
  dateInputElement.value ='';
  renderTodolist();
 // document.getElementById("demo").innerHTML=todoList;
}