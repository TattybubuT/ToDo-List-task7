const form = document.querySelector('#add-todo-form');
const todoInput = document.querySelector("#input-todo");
const todoOutput = document.querySelector("#output-todo");
const addBtn = document.querySelector("button");
const todoList = document.querySelector(".todo-list");


form.addEventListener('submit', (e) => {
    e.preventDefault();

});

addBtn.addEventListener('click', (e) => {
    if (todoInput.value === "") {
        alert("Error: You must enter a todo!");
    } else {
        let ul = document.createElement('ul');
        let li = document.createElement('li');
        todoList.appendChild(ul);
        ul.appendChild(li);
        li.innerHTML = todoInput.value;

        todoInput.value = "";
        li.addEventListener('click', () => {
            li.remove();
        });
    }
});