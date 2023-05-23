const itemInput = document.getElementById("item-input");
const priorityInput = document.getElementById("priority-input");
const checkbox = document.getElementById("checkbox");
const heading = document.querySelector("h1");

function onInput(e) {
  console.log(e.target.value);
}
itemInput.addEventListener("input", onInput);
priorityInput.addEventListener("change", onInput);
