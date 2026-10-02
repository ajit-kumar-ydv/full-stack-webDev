
const fakeInput = document.querySelector("#fake-input");
const inputEl = document.querySelector("input")

fakeInput.addEventListener("click", (evt) => {
  inputEl.click()
})

inputEl.addEventListener("change", (evt) => {
  const file = evt.target.files[0]
  if (file) {
    fakeInput.textContent = file.name
  }
  
})
