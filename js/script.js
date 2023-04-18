class Task {
  constructor(title, completed) {
    this.title = title;
    this.completed = completed;
  }

  toggle() {
    this.completed = !this.completed;
  }
}

const taskContainer = document.querySelector(".task-container");

let tasks = [
  new Task("Walk Doggo", false),
  new Task("Seven Best Doggo", false),
  new Task("Groceries", false),
];

// takes a list of tasks and renders it on screen
// with toggle and close functionality
function renderTasks() {
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
      renderTasks();
    });

    // if x is clicked, remove item and render again
    taskClose.addEventListener("click", () => {
      tasks.splice(index, 1);
      renderTasks();
    });
  });
}

renderTasks();
