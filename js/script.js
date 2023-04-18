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

// takes the form input and builds the tasks array
function buildTasks(id) {
  const textInput = document.querySelector("#text-input");
  const newObject = new Task(textInput.value, false);
  //allTasks.push([]);
  allTasks[id].push(newObject);
}

// takes a list of tasks and renders it on screen
// also updates the list according to toggle & close actions
function renderTasks(tasks) {
  taskContainer.innerHTML = "";
  tasks.forEach((task, index) => {
    // create list element with content & append to container
    const taskList = document.createElement("li");
    const taskCheckbox = document.createElement("div");
    const taskTitle = document.createElement("div");
    const taskClose = document.createElement("div");
    taskCheckbox.className = "checkbox";
    taskTitle.className = "title";
    taskClose.className = "close";
    taskTitle.textContent = task.title;
    taskClose.textContent = "x";
    taskList.appendChild(taskCheckbox);
    taskList.appendChild(taskTitle);
    taskList.appendChild(taskClose);
    taskContainer.appendChild(taskList);

    // if task is completed add checked
    if (task.completed) {
      taskCheckbox.classList.add("checked");
    }

    // if checkbox is clicked, toggle item and render again
    taskCheckbox.addEventListener("click", () => {
      task.toggle();
      renderTasks(tasks);
    });

    // if x is clicked, remove item and render again
    taskClose.addEventListener("click", () => {
      tasks.splice(index, 1);
      renderTasks(tasks);
    });
  });

  console.log(tasks);
}

// program starts here

let form = document.querySelector("form");
const taskContainer = document.querySelector("ul");

let allTasks = [[], [], [], [], []];
let id = 0;

const btn0 = document.getElementById("0");
const btn1 = document.getElementById("1");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  buildTasks(id);
  renderTasks(allTasks[id]);
});

btn0.addEventListener("click", () => {
  id = 0;
  renderTasks(allTasks[id]);
});

btn1.addEventListener("click", () => {
  id = 1;
  renderTasks(allTasks[id]);
});
