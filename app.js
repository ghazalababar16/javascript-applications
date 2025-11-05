let listContainer = document.getElementById('list-container');
let inputBox = document.getElementById('input-box');
function addTask() {
    if (inputBox.value === '') {
        alert('Add your Task')
    }
    else {
        let task = document.createElement('li');
        task.textContent = inputBox.value
        listContainer.appendChild(task)

         let sapn = document.createElement('span');
            span.textContent = '\u00d7';
            task.appendChild(span)
    

         
    }
    inputBox.value = '';
}