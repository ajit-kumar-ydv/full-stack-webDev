
let user1 = {
  name: "Ajit",
  age: 23,
}

let user2 = {
  name: "Sonu",
  age: 20,
}

let user3 = {
  name: "Ravi",
  
}

function printName(country) {
  console.log(this);
  console.log(`Hii, I am ${this.name} from ${country}`)
}

// printName.call(user1,"INDIA");
// printName.call(user2,"USA");
// printName.call(user3,"NIGERIA");
//user1.printName();


printName.call(user1,["INDIA"]);
printName.call(user2,["USA"," Srilanka"]);
printName.call(user3, ["NIGERIA"]);

const newFun = printName.bind(user1,"INDIA")
console.log(newFun);
newFun()