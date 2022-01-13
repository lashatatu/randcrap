let firstNumber = prompt("write first number ");

let secondNumber = prompt("write first secondNumber ");

let operator = prompt("write first operator ");

let sum= Number(firstNumber)+ Number(secondNumber);

switch ( operator ){
  case "+":
    alert(sum);
    break;
  case "-":
    alert(sum);
    break;
  case "*":
    alert(sum);
    break;
  case "/":
    alert(sum);
    break;
  default:
    alert("error");
}

if(operator==="+"){
    alert(Number(firstNumber)+ Number(secondNumber))
}
else if(operator==="-"){
    alert(Number(firstNumber)- Number(secondNumber))
}
else if(operator==="*"){
    alert(Number(firstNumber)* Number(secondNumber))
}
else if(operator==="/"){
    alert(Number(firstNumber)/ Number(secondNumber))
}
else{
    alert("error")
}



