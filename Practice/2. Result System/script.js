const form = document.getElementById("form")
const maths = document.querySelector(".maths")
const science = document.querySelector(".science")
const hindi = document.querySelector(".hindi")
const english = document.querySelector(".english")
const sst = document.querySelector(".sst")
const inputArr = [maths, science, sst, hindi, english]
const resultContainer = document.querySelector(".result-container")
let passOrFail = document.querySelector(".pass-criteria")
let percent = document.querySelector(".percentage")
let grade = document.querySelector(".grade")



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
      resultContainer.classList.add("show")
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
  checkRequiredFields(inputArr)
  const result = percentageCal(inputArr)
  passingCriteria(result)
  gradingSystem(result)
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
  console.log(percentage)
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

// GRADING SYSTEM
function gradingSystem(overallPercentage){
  switch (true) {
    case (overallPercentage >= 90):
        grade.textContent = 'A';
        break;
    case (overallPercentage >= 80):
        grade.textContent = 'B';
        break;
    case (overallPercentage >= 70):
        grade.textContent = 'C';
        break;
    case (overallPercentage >= 60):
        grade.textContent = 'D';
        break;
    default:
        grade.textContent = 'F';
        break;
    }
}