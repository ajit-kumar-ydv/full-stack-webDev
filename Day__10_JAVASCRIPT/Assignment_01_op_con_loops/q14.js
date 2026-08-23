let s1 = 46;
let s2 = 39;
let s3 = 66;

if (s1 >= 40 && s2 >= 40 && s3 >= 40) {
  let avg = (s1 + s2 + s3) / 3;
  if (avg >= 75) console.log("Distinction");
  else if (avg >= 60) console.log("First Division");
  else console.log("Pass");
} else console.log("Fail");