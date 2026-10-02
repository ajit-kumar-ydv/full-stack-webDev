
const h1 = document.querySelector("#main h1")

console.log(h1)
window.addEventListener("keydown", (evt) => {
//  console.log(evt)
  if (evt.key === " ") {
    h1.textContent = "Spc "; 
  } else {
    h1.textContent=evt.key
  }
  
})