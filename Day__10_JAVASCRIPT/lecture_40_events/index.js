

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


function revealGift(event) {
  console.log(event)
  console.log(event.type)
  console.log("target", event.target)
  console.log("current target", event.currentTarget)
  h1.classList.remove("hidden")
  h1.classList.add("visible")
}

div.addEventListener('click', revealGift)





