const form = document.getElementById("form")
const username = document.getElementById("username")
const email = document.getElementById("email")
const password = document.getElementById("password")
const password2 = document.getElementById("password2")

// SHOW INPUT ERROR
function showError(input, message){
  const formControl = input.parentElement
  formControl.className = 'form-control error'
  const small = formControl.querySelector("small")
  small.innerText = message
}

// SHOW SUCCESS
function showSuccess(input){
  const formControl = input.parentElement
  formControl.className = "form-control success"
}

// GET FIELD NAME
function getFieldName(input){
  return input.id.charAt(0).toUpperCase() + input.id.slice(1)
}

// CHECK REQUIRED FIELDS
function checkRequired(inputArr){
  inputArr.forEach(function(input){
    if(input.value.trim() === ''){
      showError(input, `${getFieldName(input)} is required`)
    }else{
      showSuccess(input)
    }
  })
}

// CHECK PASSWORD LENGTH AND VALUE
function checkPassword(input1, input2){
  if(input1.value !== input2.value){
    showError(input2, "Passwords do not match")
  }else{
    showSuccess(input2)
  }
}

// EVENT LISTENER
form.addEventListener("submit", function(e){
  e.preventDefault()
  checkPassword(password,password2)
  checkRequired([username,email,password,password2])
})