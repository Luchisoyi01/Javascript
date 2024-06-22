const todoList = [{
 name:'make dinner',
 dueDate:'2023-07-19'
}, /*{
  name:'watch Youtube',
  dueDate:'17/07/2023'
}*/];
function renderTodolist(){
  let todoListHTML = ``;
  todoList.forEach((todoObject, index) =>{
    /*
     when passing a function into another function it is appt we use the arrow 
     function as see in the above senerio. from these [todoList.forEach(function(todoObject, insex){})]
     to [todoList.foreach((todoObject,index)=>{})]

    */
    const {name, dueDate} = todoObject;
    const html = `      
      <div>${name}</div>
      <div>${dueDate}</div>        
      <button class="delete_button">Delete</button>`
      ; //generating the html 
    todoListHTML += html;
  })
  document.querySelector('.js-todo-list').innerHTML = todoListHTML;

  document.querySelectorAll('.delete_button')
   .forEach((deletebutton, index) => {
    deletebutton.addEventListener('click', () =>{
      todoList.splice(index, 1);
      renderTodolist();
    });
   });
}

document.querySelector('.addTodo-button').addEventListener('click', ()=>{
  addTodo();
})

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