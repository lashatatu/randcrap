const itemForm = document.getElementById("item-form");
const itemInput = document.getElementById("item-input");
const itemList = document.getElementById("item-list");

// event listeners
function addItem(e) {
  e.preventDefault();

  const newItem = itemInput.value;

  if (newItem === "") {
    alert("Please enter an item");
    return;
  }

  // create list item

  const li = document.createElement("li");
  li.appendChild(document.createTextNode(newItem));

  const button = createButton("remove-item btn-link text-red");
  li.appendChild(button);
  itemList.appendChild(li);
  itemInput.value = "";
}

function createButton(cssClass) {
  const button = document.createElement("button");
  button.className = cssClass;
  const icon = createIcon("fa-solid fa-xmark");
  button.appendChild(icon);
  return button;
}

function createIcon(cssClass) {
  const icon = document.createElement("i");
  icon.className = cssClass;
  return icon;
}

itemForm.addEventListener("submit", addItem);
