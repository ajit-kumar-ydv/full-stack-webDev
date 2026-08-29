
let product2 = {
  price: 57699,
  avgRating: 4.5,
  totalRevies: 75,
  discount: 10,
  productName: "iphone",
  printOrigin() {
    console.log("Made in India");
  },

  printProductName: function () {
    console.log(this.productName);
  }

}
/*
console.log(product2);
console.log(Object.keys(product2));
console.log(Object.values(product2));
console.log(Object.entries(product2));

console.log(product2.price);

*/

/*
let product1 = [["tshirt", 499], ["cap", 99]];


for(value of product1 ) {
  console.log(value);
}

product1.forEach(function(value,index) {
  console.log(value, index);
});



for (value in product2) {
  console.log(value);  
}

*/


// destructuring

let product = [56475, 4.5, 75, 10, "iphone"];

const [name, price, rating, discount] = ["iphone", 56475, 4.5, 10];

console.log(name);


// SPREAD OPERATOR

console.log(product);
console.log(...product); // spread operator

let a = [1, 2];
let b = [3, 4];

// let c = a + b;
let c = [...a, ...b]; // array merging by spread operator
console.log(c);


// REST OPERATOR
let product1 = [56835, 4.5, 75, 10, "iphone"];
const [n, p, ...hello] = ["iphone", 56835, 4.5, 75, 10];

console.log(hello);



function add(...numbers) {
  let total = 0;
  for (value of numbers) {
    total += value;
  }
  return total;
}

console.log(add(4, 5, 25, 7, 3, 1));