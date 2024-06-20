const form = document.getElementById("form")
const maths = document.querySelector(".maths")
const science = document.querySelector(".science")
const hindi = document.querySelector(".hindi")
const english = document.querySelector(".english")
const sst = document.querySelector(".sst")
let passOrFail = document.querySelector(".pass-criteria")
var percent = document.querySelector(".percentage")

// SHOW ERROR FUNCTION
function showError(input, message){
  const formControl = input.parentElement
  formControl.className = "form-control error"
  const small = formControl.querySelector("small")
  small.innerText = message 
}

// SHOW SUCCESS FUNCTION
function showSuccess(input){
  const formControl = input.parentElement
  formControl.className = "form-control success"
}

// CHECK REQUIRED FIELDS
function checkRequiredFields(inputArr){
  inputArr.forEach(function(input){
    if(input.value == ''){
      showError(input, `${getFieldName(input)} marks required`)
    }else{
      showSuccess(input)
    }
  })
}

// GET FIELD NAME
function getFieldName(input){
  return input.id.charAt(0).toUpperCase() + input.id.slice(1)
}

// FORM SUBMIT
form.addEventListener("submit", function(e){
  e.preventDefault()
  checkRequiredFields([maths,science,sst,hindi,english])
  percentageCal([maths,science,sst,hindi,english])
  passingCriteria(percentageCal([maths,science,sst,hindi,english]))
})


// PERCENTAGE CALCULATOR
function percentageCal(inputArr){
  let totalMarks = 0
  inputArr.forEach(function(input){
    let marks = parseFloat(input.value)
    if(marks){
      totalMarks += marks
    }
  })
  // console.log(totalMarks)
  const percentage = totalMarks/5
  // console.log(percentage)
  percent.textContent = `${percentage}%`
  return percentage
}


// PASSING CRITERIA
function passingCriteria(percentage){
    if(percentage >= 35){
      passOrFail.textContent = "Passed"
      console.log("passed")
    }else{
      passOrFail.textContent = "Failed"
      console.log("failed")
    }
}

