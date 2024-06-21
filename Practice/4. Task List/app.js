const form = document.querySelector(".form")
const taskInput = document.querySelector(".task-input")
const taskList = document.querySelector(".tasks")



form.addEventListener("submit", (addTask))

function addTask(e){
  if(taskInput.value === ''){
    alert('Add a Task')
  }else{
    // CREATE A NEW TASK FIELD div
    const taskField = document.createElement("div")
    // ADD ITS CLASS
    taskField.className = "task-field"
    // CREATE TASK NAME ELEMENET
    const h3 = document.createElement("h3")
    h3.textContent = taskInput.value
    console.log(taskInput.value)
    const a = document.createElement("a")
    a.innerHTML = '<i class="fa-solid fa-xmark"></i>'

    // APPEND CHILD
    taskField.appendChild(h3)
    taskField.appendChild(a)
    
    // APPEND TASKFIELD IN FORM
    // form.appendChild(taskField)
    taskList.appendChild(taskField)

  }
  e.preventDefault()
}
