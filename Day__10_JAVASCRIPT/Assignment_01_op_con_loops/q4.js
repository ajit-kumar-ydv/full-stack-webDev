let productPrice = 50;
let quantity = 10;

let originalBill = productPrice * quantity;
let discountAmount = (originalBill * 10) / 100;
let finalBill = originalBill - discountAmount;

console.log("Original bill = ", originalBill);
console.log("Discount amount = ", discountAmount);
console.log("Final bill = ", finalBill);