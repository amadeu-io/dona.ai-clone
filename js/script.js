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
const sidebarForm = document.querySelector(".sidebar-form");
const sidebarInput = document.getElementById("sidebar-input");

const right = document.querySelector(".right");
const list = document.querySelector(".list");
const listForm = document.querySelector(".list-form");
const listInput = document.getElementById("list-input");

const id = 0;

// renders list with specified id
function renderList(id) {
  list.innerHTML = "";
  if (masterArray.length) {
    masterArray[id].list.forEach((item, index) => {
      const task = document.createElement("li");
      const taskRemove = document.createElement("div");
      task.className = "task";
      taskRemove.className = "task-remove";
      task.textContent = item;
      taskRemove.textContent = "x";
      task.appendChild(taskRemove);
      list.appendChild(task);

      // remove task
      taskRemove.addEventListener("click", () => {
        masterArray[id].list.splice(index, 1);
        renderList(id);
      });
    });
  }
}

// renders sidebar
function renderSidebar() {
  sidebar.innerHTML = "";
  masterArray.forEach((item, index) => {
    const title = document.createElement("li");
    const titleRemove = document.createElement("div");
    title.className = "title";
    titleRemove.className = "title-remove";
    title.textContent = item.title;
    titleRemove.textContent = "x";
    title.appendChild(titleRemove);
    sidebar.appendChild(title);

    // remove title
    titleRemove.addEventListener("click", () => {
      masterArray.splice(index, 1);
      renderSidebar();
      renderList(id);
    });
  });
}

renderList(id);
renderSidebar();

listForm.addEventListener("submit", (event) => {
  event.preventDefault();
  masterArray[id].list.push(listInput.value);
  renderList(id);
});

sidebarForm.addEventListener("submit", (event) => {
  event.preventDefault();
  masterArray.push({
    title: sidebarInput.value,
    list: [],
    id: 0,
  });
  renderSidebar();
});
