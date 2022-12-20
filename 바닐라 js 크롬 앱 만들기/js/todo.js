const todoForm = document.getElementById("todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.getElementById("todo-list");

const TODOS_KEY ="todos"

let toDos = [  ];

function saveTodos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function completeTodoList(event){
    event.target.closest('li').style.textDecoration = "line-through";
    // closest 가장 가까운 조상을 찾아줌
}
// function liidFilter(li){
//     return id !== saveTodos.id;
// } 

function deleteTodoList(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    saveTodos();
    
}

function paintTodo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    // const id = document.querySelector("span")  = ""  ==> span 안에 있는 li에 id를 넣으려고 시도했지만 이렇게 사용하는 것이 아님
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    const button1 = document.createElement("button");
    button.innerText = "O";
    button1.innerText = "X";
    button.addEventListener("click", completeTodoList);
    button1.addEventListener("click", deleteTodoList);
    li.appendChild(span);
    li.appendChild(button);
    li.appendChild(button1);
    todoList.appendChild(li);
}

function handleTodoSubmit(){
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value ="";
    const newTodoObj = {
        text : newTodo,
        id : Date.now(),
    };
    toDos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodos();
}

todoForm.addEventListener("submit", handleTodoSubmit);


const savedTodos = localStorage.getItem(TODOS_KEY);

if(savedTodos !== null){
    const parsedTOdos = JSON.parse(savedTodos);
    toDos = parsedTOdos;
    parsedTOdos.forEach(paintTodo);
}

