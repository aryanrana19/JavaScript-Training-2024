// UI Design vars
const form = document.querySelector("#task-form")
const taskList = document.querySelector(".collection")
const clearBtn = document.querySelector(".clear-tasks")
const filter = document.querySelector("#filter")
const taskInput = document.querySelector('#task')

// Load all event listeners
// loadEventListeners()

// function loadEventListeners(){
//   // Add Task Event
//   form.addEventListener("submit", addTask)
//   // Remove Task Event
//   taskList.addEventListener("click", removeTask)
//   // Clear Task
//   clearBtn.addEventListener("click", clearTasks)
//   // Filter Task Events
//   filter.addEventListener('keyup', filterTasks)
// }

document.addEventListener("DOMContentLoaded", getTasks)
form.addEventListener("submit", (addTask))
taskList.addEventListener("click", removeTask)
clearBtn.addEventListener("click", clearTasks)
filter.addEventListener('keyup', filterTasks)



// ADD TASK
function addTask(e){
  if(taskInput.value === ''){
    alert("Add a Task")
  }else{
    // CREATE li Element
    const li = document.createElement("li")
    // ADD CLASS
    li.className = 'collection-item'
    // CREATE TEXT NODE AND APPEND TO li
    li.appendChild(document.createTextNode(taskInput.value))
    // CREATE NEW LINK Element
    const link = document.createElement('a')
    // ADD CLASS
    link.className = 'delete-item secondary-content'
    // ADD icon HTML
    link.innerHTML = '<i class="fa fa-remove"></i>'
    // APPEND LINK TO li
    li.appendChild(link)
    // APPEND li TO ul
    taskList.appendChild(li)
    // STORE IN LOCAL STORAGE
    storeTaskInLocalStorage(taskInput.value)
    // CLEAR INPUT
    taskInput.value = ''
  }
  
  e.preventDefault()
}

// REMOVE TASK
function removeTask(e){
  if(e.target.parentElement.classList.contains('delete-item')){
    if(confirm("Are you Sure?")){
      e.target.parentElement.parentElement.remove()
    }
  }
}

// CLEAR TASKS
function clearTasks(){
  taskList.innerHTML = ''
  
  // FASTER
  // while(taskList.firstChild){
  //   taskList.removeChild(taskList.firstChild)
  // }

  // CLEAR FROM LS
  clearTasksFromLocalStorage()
}

// // FILTER TASKS
function filterTasks(e){
  const text = e.target.value.toLowerCase()

  document.querySelectorAll('.collection-item').forEach(function(task){
    const item = task.firstChild.textContent
    if(item.toLowerCase().indexOf(text) != -1){
      task.style.display = 'block'
    }else{
      task.style.display = 'none'
    }
  })
}

// GET TASKS FROM LS
function getTasks(){
  let tasks
  if(localStorage.getItem('tasks') === null){
    tasks = []
  }else{
    tasks = JSON.parse(localStorage.getItem('tasks'))
  }
  tasks.forEach(function(task){
    // create li element
    const li = document.createElement('li')
    // ADD CLASS
    li.className = 'collection-item'
    // CREATE TEXT NODE AND APPEND TO li
    li.appendChild(document.createTextNode(task))
    // CREATE NEW LINK ELEMENT
    const link = document.createElement('a')
    // ADD CLASS
    link.className = 'delete-item secondary-content'
    link.innerHTML = '<i class="fa fa-remove"></i>'
    // APPEND THE LINK TO li
    taskList.appendChild(li)
  })
}

// STORE IN LS
function storeTaskInLocalStorage(task){
  let tasks
  if(localStorage.getItem('tasks') === null){
    tasks = []
  }else{
    tasks = JSON.parse(localStorage.getItem('tasks'))
  }
  tasks.push(task)
  localStorage.setItem('tasks', JSON.stringify(tasks))
}

// REMOVE FROM LS
function removeFromLocalStorage(taskItem){
  let tasks
  if(localStorage.getItem('tasks') === null){
    tasks = []
  }else{
    tasks = JSON.parse(localStorage.getItem('tasks'))
  }
  tasks.forEach(function(task, index){
    if(taskItem.textContent === task){
      tasks.slice(index, 1)
    }
  })
  localStorage.setItem('tasks', JSON.stringify('tasks'))
}


// CLEAR TASKS FROM LS
function clearTasksFromLocalStorage(){
  localStorage.clear()
}