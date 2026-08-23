let num1 = 10000, num2 = 2000, num3 = 300;
// Find out largest
/*
if (n1 > n2) {
  if (n1 > n3) console.log(n1, " is greatest");
  else console.log(n3, " is greatest");
} else {
  if (n2 > n3) console.log(n2, " is greatest");
  else console.log(n3, " is greatest");
}
  */

if (num1 > num2 && num1 > num3) console.log(num1, " is greatest");
else if (num2 > num1 && num2 > num3) console.log(num2, " is greatest");
else console.log(num3, " is greatest");