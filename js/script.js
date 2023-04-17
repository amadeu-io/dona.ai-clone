class Task {
  constructor(title, completed) {
    this.title = title;
    this.completed = completed;
  }

  toggle() {
    this.completed = !this.completed;
  }

  render() {
    const task = document.createElement("li");
    const checkbox = document.createElement("div");
    const title = document.createElement("div");

    if (this.completed) {
      checkbox.className = "checkbox checked";
    } else {
      checkbox.className = "checkbox";
    }

    title.className = "title";
    title.textContent = this.title;

    task.appendChild(checkbox);
    task.appendChild(title);

    taskContainer.appendChild(task);
  }
}

const taskContainer = document.querySelector(".task-container");

let taskList = [
  new Task("Walk Doggo", false),
  new Task("Seven Best Doggo", true),
  new Task("Groceries", false),
];

taskList.forEach((item) => {
  item.render();
  console.log(item);
});

const checkboxes = document.querySelectorAll(".checkbox");
checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("click", () => {});
});
