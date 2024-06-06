type Combinable = number | string;

function combine(
  input1: Combinable,
  input2: Combinable,
  resultConversion: string
) {
  let result;
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }

  return result;
}

const combinedAges = combine(10, 15, "as-number");
console.log(combinedAges);

const combinedString = combine("lasha ", "tatu", "as-text");
console.log(combinedString);
