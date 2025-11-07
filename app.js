

let addTask = document.getElementById('addTask');
let task = document.getElementById('task');
let list = document.getElementById('list');

addTask.addEventListener('click', () => {

    list.innerHTML += `<div class= "main"> <li>${task.value}</li> 
           <button id = "btn" onclick ="btn(this)" >Edit</button>
            <button id = "del" >delete</button></div>`

    task.value = '';
})

function btn(element) {
    let btn = document.getElementById("btn")
    element.addEventListener("click", () => {
        console.log(element.parentNode.children);

    })

}
