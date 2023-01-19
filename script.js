let moodChecker = true;

function moodChanger() {
  if (moodChecker === true) {
    let btnImg = document.getElementById("moodChangerImg");
    btnImg.src = "./project-files/images/icon-moon.svg";

    let topImg = document.getElementById("top-img");
    topImg.src = "./project-files/images/bg-desktop-light.jpg";

    document.body.className = "";

    moodChecker = false;
  } else if (moodChecker === false) {
    let btnImg = document.getElementById("moodChangerImg");
    btnImg.src = "./project-files/images/icon-sun.svg";

    let topImg = document.getElementById("top-img");
    topImg.src = "./project-files/images/bg-desktop-dark.jpg";

    document.body.className = "dark";

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
  if (todoList.children.length < 8) {
    todoList.appendChild(newItem);
  } else {
    newItem.remove();
    alert("Max 8 todos, bro!");
  }
  input.value = "";
}

function clearItems() {
  let todoList = document.getElementById("todo-list");
  while (todoList.firstChild) {
    todoList.removeChild(todoList.lastChild);
  }
}
