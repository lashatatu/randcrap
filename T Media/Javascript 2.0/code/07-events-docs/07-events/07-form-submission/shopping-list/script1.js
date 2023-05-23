const form = document.getElementById("item-form");

function onSubmit(e) {
  e.preventDefault();
  const item = document.getElementById("item-input");
  const priority = document.getElementById("priority-input");
  if (item.value === "" || priority.value === "0") {
    alert("Please enter an item and select a priority level");
    return;
  }
  console.log(item.value, priority.value);
}

function onSubmit2(e) {
  e.preventDefault();
  const formData = new FormData(form);
  const item = formData.get("item");
  const priority = formData.get("priority");
  console.log(item, priority);
}

form.addEventListener("submit", onSubmit2);
