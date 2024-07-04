class book{
  constructor(title,author,isbn){
    this.title = title
    this.author = author
    this.isbn = isbn
  }
}

class UI{
  addBookToList(book){
    const list = document.getElementById("book-list")
    // CREATE tr element
    const row = document.createElement("tr")
    console.log(row)
    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.isbn}</td>
      <td><a href="#" class="delete">X</a></td>
    `
    list.appendChild(row)
  }
}

function showAlert(message, className){
  // CREATE DIV
  const div = document.createElement("div")
  // ADD CSS CLASS TO DIV
  div.className = `alert.${className}`
  // ADD TEXT TO DIV
  div.appendChild(document.createTextNode(message))
  // PARENT OF DIV
  const container = document.querySelector(".container")
  // GET FORM
  const form = document.querySelector("#book-form")
  // INSERT ALERT MESSAGE
  container.insertBefore(div,form)
  // TIMEOUT AFTER 3 SEC
  setTimeout(function(){
    document.querySelector('.alert').remove()
  },3000)
}

function deleteBook(target){
  if(target.className === 'delete'){
    target.parentElement.parentElement.remove()
  }
}

function clearFields(){
  document.getElementById("title").value = ''
  document.getElementById("author").value = ''
  document.getElementById("isbn").value = ''
}

// CLASS UI ENDS
// LOCAL STORAGE CLASS
class Store{
  static getBooks(){
    let books
    if(localStorage.getItem("books") === null){
      books = []
    }else{
      books = JSON.parse(localStorage.getItem('books'))
    }
    return books
  }
  
  static displayBooks(){
    const books = Store.getBooks()
    books.forEach(function(book){
      const ui = new UI()
      // ADD BOOKS TO UI FROM LS
      ui.addBookToList(book)
    })
  }

  static addBook(book){
    const books = Store.getBooks()
    books.push(book)
    localStorage.setItem("books", JSON.stringify(books))
  }

  static removeBooks(book){
    const books = Store.getBooks()
    books.forEach(function(book,index){
      if(book.isbn === isbn){
        books.splice(index, 1)
      }
    })
    localStorage.setItem("books", JSON.stringify(books))
  }
}

// DOM LOAD EVENT 
document.addEventListener('DOMContentLoaded', Store.displayBooks)
// EVENT LISTENERS
document.getElementById('book-form').addEventListener("submit", function(e){
  const title = document.getElementById('title').value,
  author = document.getElementById('author').value,
  isbn = document.getElementById('isbn').value

  // INSTANTIATE A BOOK
  const book = new book(title,author,isbn)
  // INSTANTIATE UI
  const ui = new UI()

  // VALIDATION
  if(title === '' || author === '' || isbn === ''){
    ui.showAlert('Please fill in all fields', 'error')
  }else{
    // ADD BOOK TO LIST
    ui.addBookToList(book)
    // ADD BOOK TO LOCAL STORAGE
    Store.addBook(book)
    // SHOW SUCCESS
    ui.showAlert('Book Added', 'Success')
    // CLEAR FIELDS
    ui.clearFields()
  }
  e.preventDefault()
})

// EVENT LISTENER FOR DELETE
document.getElementById('book-list').addEventListener("click", function(e){
  // INSTANTIATE UI
  const ui = new UI()
  // UI DELETE BOOK
  ui.deleteBook(e.target)
  // REMOVE FROM LS
  Store.removeBooks(e.target.parentElement.previousElementSibling.textContent)
  ui.showAlert('book detected', 'success')
  e.preventDefault()
})
