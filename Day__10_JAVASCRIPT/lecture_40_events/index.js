

// let btn = document.querySelector("#reveal-gift")
/*
btn.addEventListener('click', function () {
  console.log("hlo hlo mic testing...")
})

*/

/*
btn.addEventListener('click', () => {
  console.log("hlo hlo mic testing...")
})
*/
/*
btn.addEventListener('click', () => console.log("hlo hlo mic testing..."))

*/

let div = document.querySelector("#reveal-gift")
let h1 = document.querySelector("#gift")

let btn = document.querySelector("#btn")

function revealGift(event) {
  console.log(event)
  console.log(event.type)
  console.log("target", event.target)
  console.log("current target", event.currentTarget)
  h1.classList.remove("hidden")
  h1.classList.add("visible")
}

div.addEventListener('click', revealGift)
/*
btn.addEventListener('click', (e) => {
  console.log(e)
  // console.log(e.key)
  // console.log(e.clientX)
  // console.log(e.clientY)
 })

btn.removeEventListener('click', (e) => {
  console.log(e);
})
*/

function fun1(e) {
  console.log(e)
}
btn.addEventListener('click', fun1)
btn.removeEventListener('click', fun1)


let outer=document.querySelector("#outer")
let inner=document.querySelector("#inner")
let btn2 = document.querySelector("#btn2")

/*
outer.addEventListener('click', (e) => {
  console.log("outer")
},{capture: true})

inner.addEventListener('click', (e) => {
  console.log("inner")
})

btn2.addEventListener('click', (e) => {
  console.log("Btn2")
})


*/
outer.addEventListener('click', (e) => {
  e.stopPropagation()
  console.log("outer")
})


inner.addEventListener('click', (e) => {
  e.stopPropagation();
  console.log("inner")
})


btn2.addEventListener('click', (e) => {
  e.stopPropagation();
  console.log("Btn2")
})




let products = [
    {
        id: "1",
        name: "Iphone 20",
        price: 12342,
        imgUrl: "https://m.media-amazon.com/images/I/61knPJtYRpL._SX679_.jpg"
    },
    {
        id: "2",
        name: "Samsung 15",
        price: 62324,
        imgUrl: "https://m.media-amazon.com/images/I/61knPJtYRpL._SX679_.jpg"
    },
    {
        id: "3",
        name: "MI 23",
        price: 35354,
        imgUrl: "https://m.media-amazon.com/images/I/61knPJtYRpL._SX679_.jpg"
    },
    {
        id: "4",
        name: "Poco 10",
        price: 43534,
        imgUrl: "https://m.media-amazon.com/images/I/41D9TUZxXwL._SY300_SX300_QL70_FMwebp_.jpg"
    },
    {
        id: "5",
        name: "Lava 12",
        price: 53422,
        imgUrl: "https://m.media-amazon.com/images/I/61knPJtYRpL._SX679_.jpg"
    },
]


let productList = document.querySelector("#product-list")

products.forEach((product) => {
    const card = document.createElement("div");
    card.classList.add("singleProduct");

    card.dataset.productId = product.id;
    const dltBtn = document.createElement("button");
    const addToCartBtn = document.createElement("button");
    dltBtn.textContent = "Remove product"
    addToCartBtn.textContent = "Add to cart"

    // dltBtn.addEventListener("click" , (e) => {
    //     e.stopPropagation()
    //     card.remove()
    // })


    card.innerHTML = `<div>
       <img src=${product.imgUrl} alt="">
    </div>
    <div class="productDetail">
        <p>${product.name}</p>
        <p>${product.price}</p>
        <div> 
          <div>
                <div> 
                    <div id="inner-div"> 

                    </div>
                </div> 
            </div>
        </div>
    </div>
    `

    // document.querySelector("inner-div").append(dltBtn)
    // card.append(dltBtn)
    card.append(dltBtn)
    // card.append(addToCartBtn)

    productList.append(card)

})

productList.addEventListener("click", (e) => {
    e.stopPropagation();

    const dltBtn = e.target;

    // console.log(dltBtn.parentElement);
    // console.log(dltBtn.tagName);
    // console.log(dltBtn.textContent);

    // if (e.target.tagName === "BUTTON") {
    //     // e.target.parentElement.remove()
    // }

    // console.log(dltBtn.parentElement.dataset.productId);

    if (dltBtn.textContent === "Remove product" && dltBtn.tagName === "BUTTON") {
        // dltBtn.parentElement.remove()
        // dltBtn.closest(".singleProduct").remove()
    }

    // console.log(dltBtn.closest(".singleProduct"));