const todoList = document.getElementById('todo-list');
const todoInput = document.getElementById('todo-input');
const addTodoBtn = document.getElementById('add-todo-btn');


addTodoBtn.addEventListener('click', addTodo);

function addTodo() {
  const todoText = todoInput.value.trim();
  if (todoText) {
    const newTodo = document.createElement('li');
    newTodo.textContent = todoText;
    todoList.appendChild(newTodo);
    todoInput.value = '';
  }
}

