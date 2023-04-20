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

const left = document.querySelector("left");

const right = document.querySelector(".right");
const list = document.querySelector(".list");

const id = 0;

// renderSidebar()
// do stuff masterArray

// renders list
function renderList(id) {
  list.innerHTML = "";
  masterArray[id].list.forEach((item, index) => {
    const task = document.createElement("li");
    task.className = "task";
    task.textContent = item;
    list.appendChild(task);
  });
}
