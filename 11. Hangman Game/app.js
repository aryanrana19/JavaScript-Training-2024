const wordEl = document.querySelector("#word")
const wrongLettersEl = document.getElementById("wrong-letters")
const playAgainBtn = document.getElementById('play-button')
const popup = document.getElementById("popup-container")
const notification = document.getElementById("notification-container")
const finalMessage = document.getElementById("final-message")

const figureParts = document.querySelectorAll(".figure-part")

const words = ["cat", "tree", "blue", "happy", "book", "sun", "bird", "rain", "jump", "smile"];

let selectedWord = words[Math.floor(Math.random() * words.length)]

const correctLetters = []
const wrongLetters = []

// SHOW HIDDEN WORD
function displayWord(){
  wordEl.innerHTML = `
    ${selectedWord.split('').map(letter => 
    `<span class="letter">
      ${correctLetters.includes(letter) ? letter : ''}
    </span>`
    ).join('')}
  `

  const innerWord = wordEl.innerText.replace(/\n/g, '')
  
  if(innerWord === selectedWord){
    finalMessage.innerText = 'Congratulations! You have Won! 😀'
    popup.style.display = 'flex'
  }
}

// KEYDOWN LETTER PRESS
window.addEventListener("keydown", e=>{
  // console.log(e.keyCode)
  if(e.keyCode >= 65 && e.keyCode <= 90){
    const letter = e.key
    if(selectedWord.includes(letter)){
      if(!correctLetters.includes(letter)){
        correctLetters.push(letter)
        displayWord()
      }else{
        showNotification()
      }
    }else{
      if(!wrongLetters.includes(letter)){
        wrongLetters.push(letter)
        updateWrongLettersEl()
      }else{
        showNotification()
      }
    }
  }
})

// SHOW NOTIFICATION
function showNotification(){
  notification.classList.add('show')
  setTimeout(()=>{
    notification.classList.remove('show')
  },2000)
}

// UPDATE THE WRONG LETTERS
function updateWrongLettersEl(){
  // DISPLAY WRONG LETTERS
  wrongLettersEl.innerHTML = `
    ${wrongLetters.length > 0 ? '<p>Wrong Letter</p>' : ''}
    ${wrongLetters.map(letter => `<span>${letter}</span>`)}
  `

  // DISPLAY PARTS
  figureParts.forEach((part,index) => {
    const errors = wrongLetters.length
    if(index < errors){
      part.style.display = 'block'
    }else{
      part.style.display = 'none'
    }
  })
  // CHECK IF LOST
  if(wrongLetters.length === figureParts.length){
    finalMessage.innerText = "You have Lost. 😔"
    popup.style.display = 'flex'
  }
}


// RESTART GAME AND PLAY AGAIN
playAgainBtn.addEventListener("click", ()=>{
  // EMPTY ARRAYS
  correctLetters.splice(0)
  wrongLetters.splice(0)

  selectedWord = words[Math.floor(Math.random() * words.length)]

  displayWord()
  popup.style.display = 'none'
  updateWrongLettersEl()
})

displayWord()