/*

console.log(Math.PI);
console.log(Math.abs(-9));
console.log(Math.pow(2, 3)); // 8
console.log(2 ** 3); /// 8
console.log(Math.sqrt(225));

console.log(Math.round(5.6)); //6
console.log(Math.round(3.3)); // 3
console.log(Math.round(7.4)); // 7
console.log(Math.round(5.8)); // 6
console.log(Math.round(7.6)); // 8
console.log(Math.ceil(2.2)); // 3
console.log(Math.floor(8.9)); // 8


console.log(Math.random()); // [0,1)

*/
/*
let min = 3;
let max = 8;
let result = Math.floor(Math.random() * (max - min + 1)) + min;

console.log(result);


console.log(Number.isFinite(Infinity));
console.log(Number.parseInt("56"));

let num1 = "45";
let num2 = "75";
console.log(num1 + num2); // 4575
console.log(parseInt(num1) + parseInt(num2)); // 120

let num = 423.42245785;
console.log(num.toFixed(2));

console.log(num.toPrecision(4));
console.log("ajit".toUpperCase());

let str = "Hello Dosto";
console.log(str.includes("dosto"));

let fileName = "images.sdfeg";
console.log(fileName.endsWith(".png") || fileName.endsWith(".jpg"));

let greet = "hello Dosto, hello bachoo";
console.log(greet.replace("hello", "Hii"));
console.log(greet.replaceAll("hello", "Hii"));

*/
// DATE

console.log(Date.now()); // to get current unix timestamp

let date = new Date();

console.log(date.getDay()); // 0 ---> Sunday
console.log(date.getMonth()); // 7 ---> August,,, 0 --> January

console.log(date.getFullYear()); // 2026

console.log(date.toLocaleDateString()); // 23/8/2026

console.log(date.toLocaleTimeString()); // 7:07:49 pm

console.log(date.toDateString());  // Sun Aug 23 2026



