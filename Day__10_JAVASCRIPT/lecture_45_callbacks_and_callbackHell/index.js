
function fun() {
  console.log("Hii")
}

//fun()
/*
function fun1(callback) {
  console.log("hello")
  callback()
}

function cb() {
  console.log("this is call bacck function")
}

fun1(cb)
*/



function searchPizza() {
  console.log("pizza searching ....")
  setTimeout(function () {
    console.log("Here is The Pizza Menu:  ")
  },2000)
}

searchPizza()