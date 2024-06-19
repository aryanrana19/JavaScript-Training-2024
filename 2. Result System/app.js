const form = document.getElementById("form")
const maths = document.querySelector(".maths")
const science = document.querySelector(".science")
const hindi = document.querySelector(".hindi")
const english = document.querySelector(".english")
const sst = document.querySelector(".sst")

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

// CHECK REQUIRED FIELDS
function checkRequired(inputArr){
  inputArr.forEach(function(input){
    if(input.value == ''){
      showError(input, `${getFieldName(input)} marks are required`)
    }else{
      showSuccess(input)
    }
  })
}

// GET FIELD NAME
function getFieldName(input){
  return input.id.charAt(0).toUpperCase() + input.id.slice(1)
}

// EVENT LISTENER
form.addEventListener("submit", function(e){
  e.preventDefault()
  checkRequired([maths,science,sst,hindi,english])
})