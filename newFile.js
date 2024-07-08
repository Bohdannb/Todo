let input = document.querySelector('.main');
let addBtn = document.querySelector('.addbtn');
let tasks = document.querySelector('.tasks');

addBtn.addEventListener ('click', ()=>{
    if(input.value.trim().lenght == '')
        return;


    const itemTodo = document.createElement ('div');
    itemTodo.classList.add('item-todo');

    tasks.appendChild(itemTodo);

    const todoList = document.createElement ('p');
   todoList.id = 'todo-list';
   todoList.innerText = input.value;

   itemTodo.appendChild(todoList);


   const editbtn = document.createElement ('button');
   editbtn.id = 'edit-btn';
   itemTodo.appendChild(editbtn);
   editbtn.addEventListener('click', () =>{
    input.value = todoList.innerText;
    const parent = editbtn.parentElement;
    parent.parentElement.removeChild(parent);
   });

   const deletebtn = document.createElement ('button');
   deletebtn.id = 'delete-btn';
   itemTodo.appendChild(deletebtn);

   deletebtn.addEventListener('click', () =>{
    const parent = deletebtn.parentElement;
    parent.parentElement.removeChild(parent);
   });






   input.value = "";

});





