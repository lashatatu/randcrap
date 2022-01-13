let button = document.getElementById("enter");
let input = document.getElementById("userinput");
let ul = document.querySelector("ul");
let li = document.querySelector("li");

function inputLength() {
  return input.value.length;
}

function createListElement() {
  let btn = document.createElement("button");
  li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);

  input.value = "";
}

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

function addListAfterKeypress(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
}

function toggleDone(e) {
  e.target.classList.toggle("done");
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

li.addEventListener("click", toggleDone);
