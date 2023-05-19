function insertElement() {
  const filter = document.querySelector(".filter");

  const h1 = document.createElement("h1");
  h1.textContent = "insertAdjacentElement()";

  filter.insertAdjacentElement("afterend", h1);
}

insertElement();

function insertText() {
  const item = document.querySelector("li:first-child");

  item.insertAdjacentText('beforebegin',"insertAdjacentText()")
}

insertText();
