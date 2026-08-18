//ARITHMETIC OPERATOR
/*
let num1 = 2;
let num2 = 4;
console.log(num1 + num2); // 6
console.log(num1 - num2); // -2
console.log(num1 * num2); // 8
console.log(num1 / num2); // 0.5
console.log(num1 % num2); // 2
console.log(num1 ** num2); // 16

let num = 45;
console.log(num++); // 45
console.log(num); // 46
console.log(++num); // 47
console.log(num); // 47
*/
//ASSIGNMENT OPERATOr
/*
let num0 = 2;
num0 /= 5;
console.log(num0);
num0 *= 5;
console.log(num0);
num0 %= 5;
console.log(num0);
*/
// COMPARISION OPERATOR
/*
console.log(3 > 6); // f
console.log(3 < 6); // t
console.log(3 >= 6); // f
console.log(3 <= 6); // t
console.log(3 == 6); // f
console.log(3 != 6); // t
console.log("5" == 5); // t
console.log("5" === 5); // f
console.log("5" === "5"); // t
*/
// LOGICAL OPERATOR
console.log(true && true); // true
console.log(true && false); // false
console.log(true || true); // true
console.log(true || false); // true
console.log(!true); // false
console.log(!false); // true




// CONDITIONALS
let temp = 24;
if(temp >= 25){
  console.log("AC chala do");
} else {
  console.log("AC mt chalao");
}

// Nested if else jio hotstar
const isLoggedIn = true;
const isSubscribed = false;

if (isLoggedIn) {
  if (isSubscribed) {
    console.log("You can access premium content.");
  } else {
    console.log("You dont have any premium plan to access this content.")
  }
} else {
  console.log("Please login");
}


// SWITCH CASE
const day = "mon";
switch (day) {
  case "mon":
    console.log("1st day of the week");
    break;
  case "tue":
    console.log("2nd day of the week");
    break;
  case "wed":
    console.log("3rd day of the week");
    break;
  case "thu":
    console.log("4th day of the week");
    break;
  case "fri":
    console.log("5th day of the week");
    break;
  case "sat":
    console.log("6th day of the week");
    break;
  case "sun":
    console.log("7th day of the week");
    break;
  default:
    console.log("Enter valid day");
  
}