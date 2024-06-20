// SET LOCAL STORAGE
localStorage.setItem('name', 'Aryan')
localStorage.setItem('age', '20')


// SET SESSION STORAGE
sessionStorage.setItem('name', 'Kato')

// REMOVE FROM STORAGE
localStorage.removeItem('name')

// GET FROM STORAGE
const name = localStorage.getItem('name')
const age = localStorage.getItem('age')
console.log(name)
// console.log(age)

// REMOVE FROM STORAGE
localStorage.clear()
console.log(name,age)

// ADD TASK TO LOCAL STORAGE via FORM
// SUBMIT EVENT
document.querySelector("form").addEventListener("submit", function(e){
  const task = document.getElementById("task").value
  localStorage.setItem("Task", task)
  alert('Task Saved')
  e.preventDefault()
})

document.querySelector('form').addEventListener("submit", function(e){
  const task = document.getElementById('task').value
  if(localStorage.getItem('tasks') === null){
    tasks = []
  }else{
    tasks.JSON.parse(localStorage.getItem('tasks'))
  }

  tasks.push(task)
  localStorage.setItem('tasks', JSON.stringify(tasks))
  alert("Task Saved")
  e.preventDefault()
})

const tasks = JSON.parse(localStorage.getItem('tasks'))

tasks.forEach(function(task){
  console.log(task)
})