const form = document.querySelector(".form")
const taskInput = document.querySelector(".task-input")
const taskField = document.querySelector(".task-field")

function addTask(e){
  if(taskInput.value === ''){
    alert("Add a Task")
  }
  // CREATE NEW ELEMENT
  const h3 = document.createElement("h3")
  h3.textContent = taskInput.value
  console.log(taskInput.value)
  const a = document.createElement("a")
  a.innerHTML = '<i class="fa-solid fa-xmark"></i>'
  
  // APPEND CHILD
  taskField.appendChild(h3)
  taskField.appendChild(a)
  e.preventDefault()
}

form.addEventListener("submit", (addTask))