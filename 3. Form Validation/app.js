const form = document.getElementById("form")
const username = document.getElementById("username")
const email = document.getElementById("email")
const password = document.getElementById("password")
const password2 = document.getElementById("password2")

form.addEventListener("submit",function(e){
  e.preventDefault()
  if(username === ''){
    showError(username, "Username is required")
  }else{
    showSuccess(username)
  }
  
  if(email.value === ''){
    showError(email, "Email is required")
  }else if(!isValidEMail(email.value)){
    showError(email, "Email is not valid")
  }else{
    showSuccess(email)
  }
  
  if(password.value === ''){
    showError(password, "Password is required")
  }else{
    showSuccess(password)
  }
  
  if(password2 === ''){
    showError(password2, "Confirm Password is required")
  }else{
    showSuccess(password2)
  }
})