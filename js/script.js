// masterArray

let masterArray = [
  {
    title: "Groceries",
    list: ["Bread", "Milk", "Broccoli"],
    id: 0,
  },
  {
    title: "Doggo",
    list: ["Seven Best Doggo", "Dog", "Smart Doggo"],
    id: 1,
  },
  {
    title: "Goals",
    list: ["Travel The World", "Fight The Inner Weakness"],
    id: 2,
  },
];

const left = document.querySelector(".left");
const sidebar = document.querySelector(".sidebar");

const right = document.querySelector(".right");
const list = document.querySelector(".list");

const id = 0;

// renders list with specified id
function renderList(id) {
  list.innerHTML = "";
  masterArray[id].list.forEach((item, index) => {
    const task = document.createElement("li");
    const taskRemove = document.createElement("div");
    task.className = "task";
    taskRemove.className = "task-remove";
    task.textContent = item;
    taskRemove.textContent = "x";
    task.appendChild(taskRemove);
    list.appendChild(task);

    // remove item
    taskRemove.addEventListener("click", () => {
      masterArray[id].list.splice(index, 1);
      renderList(id);
    });
  });
}

// renders sidebar
function renderSidebar() {
  sidebar.innerHTML = "";
  masterArray.forEach((item, index) => {
    const title = document.createElement("li");
    title.className = "title";
    title.textContent = item.title;
    sidebar.appendChild(title);
  });
}

renderList(id);
renderSidebar();
