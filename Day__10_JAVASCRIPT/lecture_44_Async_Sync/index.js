//console.log("task 1")
/*
function cb() {
  console.log("task 2")
}
setTimeout(cb,5000) // argument 1 ---> fun ,,, argument 2---> milli sec

console.log("task 3")


*/
/*
setTimeout(() => {
  console.log("Ajit-- after 4 sec...")
},4000)
setTimeout(() => {
  console.log("After 3 sec...")
}, 3000)

setTimeout(() => {
  console.log("After 1 sec...")
}, 1000)

setTimeout(() => {
  console.log("Ajit--2--after 4 sec")
},4000)

setTimeout(() => {
  console.log("No any sec...")
},1000)
 
setTimeout(() => {
  console.log("After 0 sec...")
}, 0)

*/
// -----------------------------------------


/* setInterval() --- web apis -------------------- */

//---------- repeat after fixed time interval ---- infinite loop //



let count = 0

let id = setInterval(() => {
  count++;
  if (count >= 5) {
    clearInterval(id)
  }
  console.log("Ajit SDE-I")
},1000)
