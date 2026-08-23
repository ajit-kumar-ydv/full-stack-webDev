let balance = 2570;
let withdraw = 500;

if (withdraw < 0) {
  console.log("Invalid withdraw");
} else if (withdraw > balance) {
  console.log("Insufficient amount");
} else {
  let remaining = balance - withdraw;
  console.log("Withdraw successful !");
  console.log("Remaining balance = ", remaining);
}