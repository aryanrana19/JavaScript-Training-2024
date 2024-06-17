const form = document.getElementById("form")
const maths = document.querySelector(".maths")
const science = document.querySelector(".science")
const hindi = document.querySelector(".hindi")
const english = document.querySelector(".english")
const sst = document.querySelector(".sst")

// CHECK REQUIRED FIELDS
function checkRequired(inputArr){
  inputArr.forEach(function(input){

  })
}

// SHOW ERROR
function showError(input,message){
  const formControl = input.parentElement
  formControl.className = "form-control error"
  const small = formControl.querySelector("small")
  small.innerText = message
}

// SHOW SUCCESS
function showSuccess(input){
  const formControl = input.parentElement
  formControl.className = "form-control success"
}