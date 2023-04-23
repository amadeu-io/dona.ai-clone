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

class List {
  constructor(title, list) {
    this.title = title;
    this.list = list;
  }
}

const left = document.querySelector(".left");
const sidebar = document.querySelector(".sidebar");
const sidebarForm = document.querySelector(".sidebar-form");
const sidebarInput = document.getElementById("sidebar-input");

const right = document.querySelector(".right");
const list = document.querySelector(".list");
const listForm = document.querySelector(".list-form");
const listInput = document.getElementById("list-input");

let id = 0;

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
    const title = document.createElement("div");
    const titleText = document.createElement("div");
    const titleRemove = document.createElement("div");
    title.className = "title";
    titleText.className = "title-text";
    titleRemove.className = "title-remove";
    titleText.textContent = item.title;
    titleRemove.textContent = "x";
    title.appendChild(titleText);
    title.appendChild(titleRemove);
    sidebar.appendChild(title);

    // make editable
    titleText.addEventListener("click", function (event) {
      // prevent bubbling
      event.stopPropagation();

      const formElement = document.createElement("form");
      const inputElement = document.createElement("input");
      title.innerHTML = "";
      //title.parentNode.replaceChild(formElement, title);

      inputElement.id = "sidebar-title-input";
      inputElement.type = "text";
      inputElement.placeholder = "+   Create new list";
      
      title.appendChild(inputElement);

      inputElement.addEventListener("blur", () => {
        if (inputElement.value.trim()) {
          masterArray[index].title = inputElement.value;
          renderSidebar();
        }
      });

      inputElement.addEventListener("keyup", (event) => {
        if (inputElement.value.trim()) {
          if (event.key === "Enter") {
            masterArray[index].title = inputElement.value;
            renderSidebar();
          }
        }
      });

      inputElement.focus();
    });

    // remove title
    titleRemove.addEventListener("click", (event) => {
      // prevent bubbling
      event.stopPropagation();
      masterArray.splice(index, 1);
      // makes sure the id never goes past the last item, prevents bug
      id = Math.min(id, masterArray.length - 1);
      renderSidebar();
      renderList(id);
    });

    // click on title
    title.addEventListener("click", () => {
      id = index;
      renderList(id);
    });
  });
}

renderList(id);
renderSidebar();

listForm.addEventListener("submit", (event) => {
  event.preventDefault();
  // prevent blank inputs
  if (listInput.value.trim()) {
    if (masterArray.length === 0) {
      // edge case: if there are no lists, and user adds a new item
      masterArray.push(new List("Todo 1", [listInput.value]));
      id = 0;
      renderSidebar();
    } else {
      masterArray[id].list.push(listInput.value);
    }
    renderList(id);
  }
  listInput.value = "";
});

sidebarForm.addEventListener("submit", (event) => {
  event.preventDefault();
  // prevent blank inputs
  if (sidebarInput.value.trim()) {
    masterArray.push(new List(sidebarInput.value, []));
    // when a new list is created, display that list by default
    id = masterArray.length - 1;
    renderSidebar();
    renderList(id);
  }
  sidebarInput.value = "";
});
