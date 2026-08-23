let age = 19;
let hasLicense = true;
if (age < 0) console.log("Invalid age");
else if(age >= 18 && hasLicense) {
  console.log("You can drive");
} else {
  console.log("Sorry, you can't drive");
}