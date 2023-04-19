// builds task objects
class Task {
  constructor(title, completed) {
    this.title = title;
    this.completed = completed;
  }

  toggle() {
    this.completed = !this.completed;
  }
}

// takes the form input and builds the allTasks array of arrays
function buildTaskList() {
  const textInput = document.querySelector("#text-input");
  const newObject = new Task(textInput.value, false);
  //allTasks.push([]);
  allTaskList[id].push(newObject);
}

// takes an array of tasks and renders it on screen
// also updates the list according to toggle & close actions
function renderTaskList(taskList) {
  taskContainer.innerHTML = "";
  taskList.forEach((task, index) => {
    // create list element with content & append to container
    const taskItem = document.createElement("li");
    const taskCheckbox = document.createElement("div");
    const taskTitle = document.createElement("div");
    const taskClose = document.createElement("div");
    taskCheckbox.className = "checkbox";
    taskTitle.className = "title";
    taskClose.className = "close";
    taskTitle.textContent = task.title;
    taskClose.textContent = "x";
    taskItem.appendChild(taskCheckbox);
    taskItem.appendChild(taskTitle);
    taskItem.appendChild(taskClose);
    taskContainer.appendChild(taskItem);

    // if task is completed add checked
    if (task.completed) {
      taskCheckbox.classList.add("checked");
    }

    // if checkbox is clicked, toggle item and render again
    taskCheckbox.addEventListener("click", () => {
      task.toggle();
      renderTaskList(taskList);
    });

    // if x is clicked, remove item and render again
    taskClose.addEventListener("click", () => {
      taskList.splice(index, 1);
      renderTaskList(taskList);
    });
  });

  console.log(taskList);
}

// creates list item with rendering functionalities
function createList() {
  id = count;
  const taskListTitle = document.createElement("div");
  taskListTitle.className = "title";
  taskListTitle.textContent = id;
  taskListTitle.id = id;
  titleContainer.appendChild(taskListTitle);

  taskListTitle.addEventListener("click", () => {
    id = taskListTitle.id;
    console.log(id);
    renderTaskList(allTaskList[id]);
  });

  renderTaskList(allTaskList[id]);

  count++;
}

// program starts here

let form = document.querySelector("form");
const taskContainer = document.querySelector("ul");
const titleContainer = document.querySelector(".title-container");

let allTaskList = [[], [], [], [], [], [], [], [], [], []];
let id = 0;
let count = 0;

const btn = document.querySelector("button");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  buildTaskList();
  renderTaskList(allTaskList[id]);
});

createList();

btn.addEventListener("click", createList);
