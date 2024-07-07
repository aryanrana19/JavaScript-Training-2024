// BOOK CONSTRUCTOR

function Book(title, author, isbn){
  this.title = title
  this.author = author
  this.isbn = isbn
}

// UI CONSTRUCTOR
function UI(){}

// ADD BOOK TO LIST FUNCTION
UI.prototype.addBookToList = function(book){
  const list = document.getElementById('book-list')
  // CREATE TR ELEMENT
  const row = document.createElement('tr')
  row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete-item">X</a></td>
  `
  list.appendChild(row)
}

// SHOW ALERT FUNCTION
UI.prototype.showAlert = function(message, className){
  // create div
  const div = document.createElement("div")
  // ADD CLASS TO DIV
  div.className = `alert ${className}`
  // ADD TEXT TO DIV
  div.appendChild(document.createTextNode(message))
  // PARENT OF DIV
  const container = document.querySelector('.container')
  // GET FORM
  const form = document.querySelector('#book-form')
  // INSERT ALERT MESSAGE
  container.insertBefore(div,form)

  // TIMEOUT AFTER 3 SEC
  setTimeout(function(){
    document.querySelector(".alert").remove()
  },3000)
}

// DELETE BOOK
UI.prototype.deleteBook = function(target){
  if(target.className === 'delete'){
    target.parentElement.parentElement.remove()
  }
}

// CLEAR FIELDS FUNCTION
UI.prototype.clearFields = function(){
  document.getElementById('title').value = ''
  document.getElementById('author').value = ''
  document.getElementById('isbn').value = ''
}


// EVENT LISTENERS
document.getElementById('book-form').addEventListener('submit', function(e){
  const title = document.getElementById('title').value,
  author = document.getElementById('author').value,
  isbn = document.getElementById("isbn").value
  console.log(title,author,isbn)

  // INSTANTIATE A BOOK
  const book = new Book(title,author,isbn)

  // INSTANTIATE UI
  const ui = new UI()

  // VALIDATION
  if(title === '' || author === '' || isbn === ''){
    ui.showAlert('Please fill in all fields', 'error')
  }else{
    // ADD BOOK TO LIST
    ui.addBookToList(book)
    // SHOW SUCCESS
    ui.showAlert('Book Added', 'success')
    // CLEAR FIELDS
    ui.clearFields()
  }
  e.preventDefault()
})

// EVENT LISTENER FOR DELETE
document.getElementById('book-list').addEventListener('click', function(e){
  // INSTANTIATE UI
  const ui = new UI()
  ui.deleteBook(e.target)
  ui.showAlert('Book Deleted', 'success')
  e.preventDefault()
})
