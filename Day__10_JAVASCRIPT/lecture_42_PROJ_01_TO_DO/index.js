
//"gym","music","coding","revise"
let todos = [
  {
    id: Date.now() +1 ,
    text: "Go to gym",
    isCompleted: false
  },
  {
    id: Date.now()+2,
    text: "Coding",
    isCompleted: false
  },
  {
    id: Date.now() +3,
    text: "Go to college",
    isCompleted: false
  }
]

const todoForm = document.querySelector("#todo-form")
const todoInput = document.querySelector("#todo-input")
const todoList = document.querySelector("#todo-list")

todoForm.addEventListener('submit', (e) => {
  e.preventDefault()
  const todoValue = todoInput.value
  todos.push(todoValue)

  let newTodo = {
    id: Date.now(),
    text: todoValue,
    isCompleted: false
  }
  addTodo(newTodo)
  //renderTodo() // jb koi naya todo add hoga first updated todos render ho jayega
  
})

function renderTodo() {
  todos.forEach(function (todo) {
    addTodo(todo)    
  })
}

renderTodo(); // jb first time file execute hogi tb existing todos render ho jayegi


function addTodo(todo) {
  const li = document.createElement("li") // <li></li>
  li.className=`flex gap-3 border border-slate-300 p-4 rounded-xl`
  li.innerHTML =
  `
      <input data-id=${todo.id} type="checkbox">
      <p class="flex-1">${todo.text}</p>
      <div class="flex gap-2">
        <button data-action="edit" data-id=${todo.id}>Edit</button>
        <button data-action="delete" data-id=${todo.id}>Delete</button>
      </div>
    </li>
  `
  todoList.append(li) // ul --> li
}


//event delegation--- sb pr na lgake parent pe lga do

todoList.addEventListener('click', (e) => {
  
  let btn = e.target.closest("button")
  let action = btn?.dataset.action;
  let id = btn?.dataset?.id
  
   
  if (action === "edit") {
    // edit wala part
  }

  if (action === "delete") {
    // delete wala part
    deleteTodo(e,id)
  }
})

function deleteTodo(e, id) {
  e.target.closest("li").remove(); // remove from UI

  todos = todos.filter((todo) => {
    if (todo.id !== Number(id)) {
      return todo
    }
  })
}