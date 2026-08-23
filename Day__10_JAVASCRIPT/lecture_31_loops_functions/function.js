function greeting(userName) {
  console.log(`Hii, ${userName}`);
}

greeting("Ajit");
greeting("Biru");
greeting("Catu");
greeting("Dummy");

// FUNCTION DECLARATION
fun1();
function fun1() {
  console.log("Function declaration");
}

// FUNCTION EXPRESSION

console.log(add(5, 7));
let add = function (num1, num2) {
  return num1 + num2;
}

// Arrow Function
// syntax -- 1
let plus = num1 => num1 + 7;

//syntax -- 2
let subt = (num1, num2) => num1 - num2;

//syntax -- 3

let mult = (num1, num2) => {
  // smt
  // smt
  return num1 * num2;
}
console.log(mult(3, 5));