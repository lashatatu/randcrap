const button = document.querySelector("button");
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;

function add(num1: number, num2: number) {
  return num1 + num2;
}

button.addEventListener("click", function () {
  // const h1 = document.createElement("h1");
  // h1.innerText = add(+input1.value, +input2.value).toString();
  // document.body.appendChild(h1)
  console.log(add(+input1.value, +input2.value));
});

//text
