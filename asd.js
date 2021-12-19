async function timer() {
  let result;
  setTimeout(() => { result = 100 }, 500)
  return result
}

console.log(`The result is: ${await timer}`)