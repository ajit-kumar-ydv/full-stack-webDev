let orgSalary = 10000;
let expYear = 20;
let bonus;
if (expYear < 2) bonus = 0;
else if (expYear >= 10) bonus = (orgSalary * 20) / 100;
else if (expYear >= 5) bonus = (orgSalary * 10) / 100;
else bonus = (orgSalary * 5) / 100;

let finalSalary = orgSalary + bonus;
console.log("Final salary = ", finalSalary);
