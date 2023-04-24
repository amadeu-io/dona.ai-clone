// masterArray

let masterArray = [
  {
    title: "Groceries",
    category: "🛒",
    list: [
      { text: "Bread", checked: false },
      { text: "Milk", checked: false },
      { text: "Broccoli", checked: false },
    ],
  },
  {
    title: "Doggo",
    category: "🐶",
    list: [
      { text: "Seven Best Doggo", checked: false },
      { text: "Dog", checked: false },
      { text: "Smart Doggo", checked: false },
    ],
  },
  {
    title: "Goals",
    category: "🎯",
    list: [
      { text: "Travel The World", checked: false },
      { text: "Fight The Inner Weakness", checked: false },
    ],
  },
];

class MasterArray {
  constructor(title, category, items) {
    this.title = title;
    this.category = category;
    this.list = items.map((item) => {
      return { text: item, checked: false };
    });
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
      const taskContainer = document.createElement("div");
      const taskText = document.createElement("span");
      const taskCheckbox = document.createElement("span");
      const taskRemove = document.createElement("span");

      task.className = "task";
      taskContainer.className = "task-container";
      taskText.className = "task-text";
      taskCheckbox.className = "task-checkbox";
      taskRemove.className = "task-remove";

      taskText.textContent = item.text;
      taskRemove.textContent = "x";

      taskContainer.appendChild(taskCheckbox);
      taskContainer.appendChild(taskText);
      task.appendChild(taskContainer);
      task.appendChild(taskRemove);

      list.appendChild(task);

      // toggle checkbox
      taskCheckbox.addEventListener("click", () => {
        console.log("sdf");
        taskCheckbox.classList.add("checked");
      });

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
    const titleText = document.createElement("span");
    const titleRemove = document.createElement("span");

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

      const inputElement = document.createElement("input");
      inputElement.id = "sidebar-title-input";
      inputElement.type = "text";
      inputElement.placeholder = "+   Create new list";

      title.innerHTML = "";
      title.appendChild(inputElement);

      inputElement.addEventListener("blur", () => {
        // if the value is not empty, update with the input
        if (inputElement.value.trim()) {
          masterArray[index].title = inputElement.value;
        }
        renderSidebar();
      });

      inputElement.addEventListener("keyup", (event) => {
        // if the value is not empty, update with the input
        if (inputElement.value.trim()) {
          if (event.key === "Enter") {
            masterArray[index].title = inputElement.value;
            renderSidebar();
          }
        } else {
          renderSidebar();
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

// type new task
listForm.addEventListener("submit", (event) => {
  event.preventDefault();
  // prevent blank inputs
  if (listInput.value.trim()) {
    if (masterArray.length === 0) {
      // edge case: if there are no lists, and user adds a new item
      masterArray.push(new MasterArray("todo #1", "🎯", [listInput.value]));
      id = 0;
      renderSidebar();
    } else {
      masterArray[id].list.push({ text: listInput.value, checked: false });
    }
    renderList(id);
  }
  listInput.value = "";
});

// type new list
sidebarForm.addEventListener("submit", (event) => {
  event.preventDefault();
  // prevent blank inputs
  if (sidebarInput.value.trim()) {
    masterArray.push(new MasterArray(sidebarInput.value, "🎯", []));
    // when a new list is created, display that list by default
    id = masterArray.length - 1;
    renderSidebar();
    renderList(id);
  }
  sidebarInput.value = "";
});
