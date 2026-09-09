
const form = document.querySelector("#form")
const btn = document.querySelector("#btn")
const username = document.querySelector("#username")
const bio = document.querySelector("#bio")
const charCount = document.querySelector("#char-count")
const checkbox = document.querySelector("#checkbox")
const country = document.querySelector("#country")
const passwordhint = document.querySelector("#password-hint")
const password = document.querySelector("#password")
const errorMessage = document.querySelector("#error-message")

const LIMIT = 900;
charCount.textContent = `${LIMIT} characters remaining`

function showError(input, errorMessage) {
  input.parentElement.querySelector(".error-message").textContent = errorMessage
  
}

function clearError(input) {
  input.parentElement.querySelector(".error-message").textContent=""
}

function validUsername(username) {
  //errorMessage.textContent = "";
  if (username.value.trim().length === 0) {
    showError(username,"Please enter your name")
    return false;
  }
  if (username.value.trim().length < 3) {
    showError(username, "username must be atleast 3 character")
    return false;
  }
  clearError(username)
  return true;
  
}


// PASSWORD VALIDITY CHECK

function validPassword(password) {
  //errorMessage.textContent = "";
  if (password.value.trim().length === 0) {
    showError(password,"Enter your password")
    return false;
  }
  if (username.value.trim().length < 8) {
    showError(username, "username must be atleast 8 character")
    return false;
  }
  clearError(password)
  return true;
  
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  //const username = document.querySelector("#username").value
   
  const isUsernameValid = validUsername(username)
  const isPasswordValid = validPassword(password)
  
  //const email = document.querySelector("#email").value
  //console.log({username : username.value,password: password.value,email})

  if (isUsernameValid && isPasswordValid) {
    document.querySelector("h2").classList.remove("hidden")
  } else {
    console.log("Form invalid")
  }
})



/*
bio.addEventListener("input", (e) => {
  //console.log(bio.value)
  const remaining = LIMIT - bio.value.length;
  charCount.textContent=remaining + " characters remaining"
})


username.addEventListener("change", (e) => {
  console.log("change event", username.value);
})

username.addEventListener("input", (e) => {
  console.log("input event",username.value)
})

checkbox.addEventListener("change", (e) => {
  console.log(checkbox.checked)
})

country.addEventListener("change", (e) => {
  console.log(country.value)
})

username.addEventListener("focus", (e) => {
  console.log("focus", username.value)
})

username.addEventListener("blur", (e) => {
  console.log("blur", username.value)
})

password.addEventListener("focus", (e) => {
  passwordhint.classList.remove("hidden")
})

password.addEventListener("blur", (e) => {
  passwordhint.classList.add("hidden")
})
*/

