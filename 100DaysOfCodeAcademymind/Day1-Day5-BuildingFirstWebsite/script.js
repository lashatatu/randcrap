const input=document.querySelector("input");
const testbg = document.querySelector(".test-bg");

testbg.addEventListener("change", function () {
  // change colors on click
  input.value
    ? (testbg.style.backgroundColor = input.value)
    : (testbg.style.backgroundColor = "white");
});


