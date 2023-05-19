function replaceFirstItem() {
  const firstItem = document.querySelector("li:first-child");
  const li = document.createElement("li");
  li.textContent = "Replaced";

  firstItem.replaceWith(li);
}

replaceFirstItem();

function replaceSecondItem() {
  const secondItem = document.querySelector("li:nth-child(2)");
  secondItem.outerHTML = "<li>Replaced Second</li>";
}

replaceSecondItem();

function replaceAllItems(){
  const lis=document.querySelectorAll("li");

  lis.forEach((item,index)=>{
    item.outerHTML="<li>Replaced All</li>"
  })
}

replaceAllItems()
