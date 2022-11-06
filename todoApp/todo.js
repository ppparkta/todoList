const $todoForm = document.querySelector("#todo-form");
const $todoInput = $todoForm.querySelector("input");
const $todoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";
let toDos = [];

function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(toDos));
}

function deleteTodo(event) {
    const li = event.target.parentElement;
    toDos=toDos.filter((toDo)=>toDo.id!==parseInt(li.id));
    li.remove();
    saveTodos();
}

function paintTodo(newTodo) {
    const li = document.createElement("li");
    li.id=newTodo.id;
    const button = document.createElement("button");
    const span = document.createElement("span");
    button.innerText = "X";
    button.addEventListener("click", deleteTodo);
    li.append(button);
    li.append(span);
    
    span.innerText = newTodo.text;
    $todoList.append(li);
}

function handleTodoSubmit(event) {
    event.preventDefault();
    const newTodo = $todoInput.value;
    $todoInput.value = "";
    const newTodoObj={
        text:newTodo,
        id:Date.now(),
    };
    toDos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodos();
}

$todoForm.addEventListener("submit", handleTodoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);
 
if (savedTodos !== null) {
    const parsedTodos = JSON.parse(savedTodos);
    toDos=parsedTodos;
    parsedTodos.forEach(paintTodo);
}