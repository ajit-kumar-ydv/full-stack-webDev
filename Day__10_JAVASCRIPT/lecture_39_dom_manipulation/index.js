// let h1 = document.getElementById("h1");

// let h1 = document.querySelector("h1");
// let h1 = document.querySelector(".h1");
// let h1 = document.querySelector("#h1");

/*
let h1 = document.querySelectorAll("h1")
console.log(h1);

let p = document.querySelector("p");

p.textContent = "<h2>Hey its textcontent </h2>";
p.innerHTML="<h2>Hello cuties</h2>"
console.log(p.textContent);

p.setAttribute("style", "background-color: red");

let btn = document.querySelector("#btn")
btn.setAttribute("disabled", "true");
btn.textContent = "remove";

let res = btn.getAttribute("disabled")
console.log(res);

p.removeAttribute("style")

p.classList.add("random")
p.classList.remove("random")
p.classList.toggle("random")

console.log(p.classList.contains("random"))

p.style.backgroundColor = "red";

p.dataset.hello = "hi"
*/
let products = [
  {
    name: "Iphone 20",
    price: 122499,
    imgUrl:"https://th.bing.com/th?id=OIF.XSc%2f46i2sqlkZ1sU%2bBHQQw&r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    name: "samsung",
    price: 59990,
    imgUrl:"https://tse4.mm.bing.net/th/id/OIP.C5t-lR-zHlIOGdhUVTTsRAHaHd?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    name: "MI 23",
    price: 89899,
    imgUrl:"https://nl.letsgodigital.org/uploads/2021/07/xiaomi-concept-smartphone.jpg"
  },
  {
    name: "Nokia",
    price: 19990,
    imgUrl:"https://tse2.mm.bing.net/th/id/OIP.nbWYOxmTSMAjsdYJ91noFgHaId?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  }

]

let productList = document.querySelector("#product-list")
products.forEach(product => {
  //console.log(product);
  const card = document.createElement("div")
  card.classList.add("singleProduct");
  

  card.innerHTML =`<div>
     <img src=${product.imgUrl} alt="">
  </div>
  <div class="productDetail">
    <p>${product.name} 20</p>
    <p>${product.price}</p>
  </div>`

  productList.append(card)
  
})


let h2 = document.querySelector("h2")
let body = document.querySelector("body")
//body.remove(h2) // you have to perform on parent
h2.remove() // directly on the element you want to remove






/*
let div1 = document.createElement("div")
let div2 = document.createElement("div")
div1.textContent="DIV CREATED --1"
div2.textContent="DIV CREATED --2"
console.log(div1.textContent)
console.log(div2.textContent)


let body = document.querySelector("body")
// body.appendChild(div1)
// body.appendChild(div2)

//body.append(div1, div2) //insert in the last of the body
body.prepend(div1,div2) // insert in the start of the body


*/