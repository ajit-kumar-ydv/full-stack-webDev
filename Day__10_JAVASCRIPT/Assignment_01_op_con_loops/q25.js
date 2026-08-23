let age = 45;
let numsOfTicket = 6;

let totalPrice;
if (age >= 60) {
  totalPrice = 120 * numsOfTicket;
}
else if (age >= 12) {
  totalPrice = 200 * numsOfTicket;
}
else if (age > 0) {
  totalPrice = 100 * numsOfTicket;
}
else {
  console.log("Invalid age");
}

console.log("Total ticket price = ", totalPrice);