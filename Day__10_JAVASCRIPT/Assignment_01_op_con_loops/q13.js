let percent = 50;

if (percent < 0 || percent > 100) {
  console.log("Invalid");
} else if (percent >= 90 && percent <= 100) {
  console.log("Grade - A");
} else if (percent >= 80 && percent <= 89) {
  console.log("Grade - B");
} else if (percent >= 70 && percent <= 79) {
  console.log("Grade - C");
} else if (percent >= 60 && percent >= 69) {
  console.log("Grade - D");
} else if (percent >= 40 && percent <= 59) {
  console.log("Grade - E");
} else {
  console.log("Grade - F");
}