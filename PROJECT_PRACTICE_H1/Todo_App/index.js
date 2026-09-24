let todos = [
  {
    id: Date.now() + 1,
    text: "GO TO CODE",
    isCompleted: false,
  },
  {
    id: Date.now() + 2,
    text: "Go to Gym",
    isCompleted: false,
  },
];

const todoForm = document.querySelector("#todo-form");
const todosUl = document.querySelector("#todos-ul");
const formInput = document.querySelector("#form-input");
const formbtn = document.querySelector("#form-button");

let isEdit = ""; // false -------------------------- empty string

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const todoValue = formInput.value;
  //console.log(todoValue) // fine
  let todoNew = {
    id: Date.now(), // number--------------------------------------
    text: `${todoValue}`,
    isCompleted: false,
  };

  //console.log(todos) //fine
  if (isEdit) {
    // modify
    modifyDone();
    formbtn.textContent = "Add";
  } else {
    //add
    todos.push(todoNew);
  }

  addTodo(todoNew);
  renderUI();
  formInput.value = "";
});

function renderUI() {
  todosUl.innerHTML = "";
  todos.forEach((todo) => {
    //const id = todo.id
    addTodo(todo);
  });
}
renderUI();

// event delegation
todosUl.addEventListener("click", (e) => {
  e.stopPropagation();
  const li = e.target.closest("li");
  const btn = e.target.closest("button");
  let checkbox = e.target?.closest('input[type="checkbox"]');
  const id = li?.dataset.id; // string -----------------------------------
  const action = btn?.dataset.action;

  if (action === "edit") {
    // edit start
    editStart(id);
  }
  if (action === "delete") {
    // delete
    deleteTodo(id)
    renderUI();
  }
  if (checkbox) {
    todos = todos.map((todo) => {
      // map array ko mutate nhi krta blki yek new array banata hai----
      if (todo.id === Number(id)) {
        console.log("under");
        return {
          ...todo,
          isCompleted: !todo.isCompleted,
        };
      }
      return todo;
    });
    renderUI()
  }
  //console.log(todos) // fine
});

function addTodo(todo) {
  const li = document.createElement("li");
  li.classList =
    "flex gap-2 border border-white p-2 mb-4 text-white rounded-sm";
  li.dataset.id = `${todo.id}`;
  li.innerHTML = `
            <input type="checkbox" data-id= ${todo.id} ${todo.isCompleted === true ? 'checked="checked"' : ""}>
            <p class="flex-1 ">${todo.text}</p>
            <button data-id= ${todo.id} data-action="edit" class="bg-yellow-400 pl-2 pr-2 rounded-sm text-black">EDIT</button>
            <button data-id= ${todo.id} data-action="delete" class="bg-pink-400 pl-2 pr-2 rounded-sm text-black">DELETE</button>
          `;
  todosUl.append(li);
}

function editStart(id) {
  isEdit = id; // true ------------------------ id string
  formbtn.textContent = "Modify";
  const currentTodo = todos.find((todo) => {
    if (todo.id === Number(id)) {
      return todo;
    }
  });
  formInput.value = currentTodo.text;
}

function modifyDone() {
  const currentTodo = todos.find((todo) => {
    // object dega
    if (todo.id === Number(isEdit)) {
      return todo;
    }
  });
  currentTodo.text = formInput.value;
}

function deleteTodo(id) {
  todos = todos.filter((todo) => {
    if (todo.id !== Number(id)) {
      return todo;
    }
  });
}
