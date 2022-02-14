const form = document.querySelector('#add-todo-form');
const input = document.querySelector('#input-todo');
const todoList = document.querySelector('#todo-output');
const btnSubmit = document.querySelector('button');

form.addEventListener('submit', function (e) {
    e.preventDefault();
});

btnSubmit.addEventListener('click', function (e) {
    if (input.value === '') {
        alert('Error: Please enter a list item');
    } else {
        let todo = document.createElement('div');
        todo.classList.add('todo-item');
        todoList.appendChild(todo);
        todo.innerHTML = input.value;

        const taskAdd = input.value = '';

        todo.addEventListener('click', () => {
            todo.remove()
        });
    }
});