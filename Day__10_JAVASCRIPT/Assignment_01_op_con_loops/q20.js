let num1 = 50;
let num2 = 20;
let operator = "*";

switch (operator) {
  case "+":
    console.log(num1 + num2);
    break;
  case "-":
    console.log(num1 - num2);
    break;
  case "*":
    console.log(num1 * num2);
    break;
  case "/":
    if (num2 === 0) console.log("Not divide by 0");
    else {
      console.log(num1 / num2);
    }
    break;
  case "%":
    console.log(num1 % num2);
    break;
  default :
    console.log("Invalid");
  
}
