/* BACKGROUND COLOR CHANGE */

const body = document.querySelector("body")

let colorStr = "0123456789abcdef" // 16




setInterval(() => {
  let color = ""; // #12345a
  for (let i = 0; i < 6; i++){
    let randomIndex = Math.floor(Math.random()* colorStr.length)
    color = color + colorStr[randomIndex];
  }
  body.style.backgroundColor = `#${color}`
}, 500)

