// LISTEN FOR SUBMIT
document.getElementById('loan-form').addEventListener("submit", function(e){
  // HIDE RESULT FOR 2 sec
  document.getElementById("results").style.display = 'none'
  // SHOW LOADER FOR 2 SEC
  document.getElementById('loading').style.display = 'block'

  setTimeout(calculateResults, 2000) // EXTENDS TIME
  e.preventDefault()
})

// CALCULATE RESULTS
function calculateResults(){
  console.log("calculating")
  // UI VARS
  const amount = document.getElementById("amount")
  const interest = document.getElementById("interest")
  const years = document.getElementById("years")
  const monthlyPayment = document.getElementById("monthly-payment")
  const totalPayment = document.getElementById('total-payment')
  const totalInterest = document.getElementById('total-interest')

  const principal = parseFloat(amount.value)
  const calculatedInterest = parseFloat(interest.value / 100 / 12)
  const calculatedPayments = parseFloat(years.value) * 12

  // COMPUTE MONTHLY PAYMENT
  const x = Math.pow(1 + calculatedInterest, calculatedPayments)
  const monthly = (principal * x * calculatedInterest) / (x - 1)
  
  if(isFinite(monthly)){
    console.log("Is finite")
    monthlyPayment.value = monthly.toFixed(2)
    totalPayment.value = (monthly * calculatedPayments).toFixed(2)
    totalInterest.value = (monthly * calculatedPayments - principal).toFixed(2)

    // SHOW RESULTS AFTER 2 SEC
    document.getElementById('results').style.display = 'block'

    // HIDE LOADER AFTER 2 SEC
    document.getElementById('loading').style.display = 'none'
  }else{
    showError('Please check your numbers')
  }
}


// SHOW ERROR
function showError(error){
  // HIDE RESULTS
  document.getElementById('results').style.display = 'none'
  // HIDE LOADER
  document.getElementById('loading').style.display = 'none'
  // CREATE A DIV
  const errorDiv = document.createElement("div")
  // GET ELEMENTS
  const card = document.querySelector('.card')
  const heading = document.querySelector('.heading')
  // ADD CLASS
  errorDiv.className = 'alert alert-danger'
  // CREATE TEXT NODE AND APPEND TO DIV
  errorDiv.appendChild(document.createTextNode(error))
  // INSERT ERROR ABOVE HEADING
  card.insertBefore(errorDiv, heading)
  // CLEAR AFTER 3 seconds
  setTimeout(clearError, 3000)
}


// CLEAR ERROR
function clearError(){
  document.querySelector('.alert').remove()
}