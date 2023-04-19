function calculator(num1, num2, operator) {
  let result;
  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    case "%":
      console.error("error");
      break;
    default:
      console.error("general error");
      break;
  }

  console.log(result);
  return result;
}

calculator(5, 2, "+");
calculator(5, 2, "-");
calculator(5, 2, "*");
calculator(5, 2, "/");
calculator(5, 2, "%");
calculator(5, 2, "asdasdasd");
calculator(5, 2, "%asd");
