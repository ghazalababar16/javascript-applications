


let addTask = document.getElementById('addTask');
let task = document.getElementById('task');
let list = document.getElementById('list');

addTask.addEventListener('click', () => {
    if (addTask.innerHTML == "Add Task") {

        list.innerHTML += `<div class= "main"> <li>${task.value}</li> <div> <button id = "edit" onclick ="edit(this)" >Edit</button>
            <button id = "del" >Delete</button></div></div>`

        task.value = '';
    }
    else {
        let updatedTodo = task.value;
        let element = document.querySelector(".main").firstElementChild;
       
        
        let  userTodo = element.innerHTML;
        
       userTodo = task.value;
        // userTodo.innerText = updatedTodo

    }
})

function edit(element) {
    element.addEventListener("click", () => {

        task.value = element.parentNode.parentNode.firstElementChild.innerText;

        addTask.innerHTML = "save"
    })

}
