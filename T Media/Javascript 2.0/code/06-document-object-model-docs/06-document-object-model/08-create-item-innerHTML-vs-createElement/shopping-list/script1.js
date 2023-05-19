function addItem(item) {
  const itemList = document.querySelector("#item-list");
  const liItem = document.createElement("li");
  const button = document.createElement("button");
  const iconElement = document.createElement("i");

  liItem.innerText = item;
  button.className = "remove-item btn-link text-red";
  iconElement.className = "fa-solid fa-xmark";

  itemList.appendChild(liItem).appendChild(button).appendChild(iconElement);
}

addItem("Milk");
addItem("Bread");
