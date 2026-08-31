let student = {
  name: "varad",
  rollNo: 34,
  subjects: ["math", "english", "hindi"],

}
/*
let { subjects, name, rollNo } = student;
console.log(subjects);


let { ...hello } = student;
console.log(hello);
*/
let { subjects, ...variable } = student;
console.log(variable);
//HOW TO RENAME KEY
let { subjects: vishay } = student;
console.log(vishay);