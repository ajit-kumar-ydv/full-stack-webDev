
const box=document.querySelector("#box")

window.addEventListener("mousemove", (e) => {
  //console.log(e);
  //console.log(e.clientX,e.clientY)
  
  box.style.top=e.clientY +"px"
  box.style.left=e.clientX +"px"

})