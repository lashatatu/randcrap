console.log(1);

setTimeout(function () {
  console.log(2);
});

Promise.resolve().then(function () {
  console.log(3);
});
console.log(4);
