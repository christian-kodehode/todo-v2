let moodChecker = true;

function moodChanger() {
  if (moodChecker === true) {
    // CHANGE BUTTON TO ---SUN---
    let btnImg = document.getElementById("moodChangerImg");
    btnImg.src = "./project-files/images/icon-moon.svg";

    // CHANGE TOP BACKGROUND IMAGE
    let topImg = document.getElementById("top-img");
    topImg.src = "./project-files/images/bg-desktop-light.jpg";

    // SET BODY CLASSNAME TO NONE
    document.body.className = "";

    // SWITCH MOODCHECKER VARIABLE TO ---FALSE---
    moodChecker = false;
  } else if (moodChecker === false) {
    // CHANGE BUTTON TO ---MOON---
    let btnImg = document.getElementById("moodChangerImg");
    btnImg.src = "./project-files/images/icon-sun.svg";

    // CHANGE TOP BACKGROUND IMAGE
    let topImg = document.getElementById("top-img");
    topImg.src = "./project-files/images/bg-desktop-dark.jpg";

    // SET BODY CLASSNAME TO ---DARK---
    document.body.className = "dark";

    // SWITCH MOODCHECKER TO ---TRUE---
    moodChecker = true;
  }
}

var input = document.getElementById("listItem-creator");

input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("myBtn").click();
  }
});

function addListItem() {
  let input = document.getElementById("listItem-creator");
  let todoList = document.getElementById("todo-list");
  let newItem = document.createElement("li");
  newItem.className = "list-item";
  newItem.innerText = input.value;
  todoList.appendChild(newItem);
  input.value = "";
}

function clearItems() {
  let todoList = document.getElementById("todo-list");
  while (todoList.firstChild) {
    todoList.removeChild(todoList.lastChild);
  }
}
