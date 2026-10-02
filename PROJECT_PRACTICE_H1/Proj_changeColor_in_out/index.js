
const divBox = document.querySelector("#box");

divBox.addEventListener("mouseover", (e) => {
  console.log(e)
  divBox.style.backgroundColor = "yellow";
})

divBox.addEventListener("mouseout", (e) => {
  divBox.style.backgroundColor = "red"
})