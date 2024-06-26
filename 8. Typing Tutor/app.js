const word = document.getElementById("word")
const text = document.getElementById("text")
const scoreEl = document.getElementById("score")
const timeEl = document.getElementById("time")
const endGameEl = document.getElementById("end-game-container")
const settingsBtn = document.getElementById("settings-btn")
const settings = document.getElementById("settings")
const settingsForm = document.getElementById("settings-form")
const difficultySelect = document.getElementById("difficulty")
const words = ["test", 'tense', 'difficult', 'steer', 'tumble', 'feer', 'straight', 'admin', 'drag', 'loving']

// INITIAL WORD
let randomWord

// INITIAL SCORE
let score = 0

// INITIAL TIME
let time = 10


// FUNCTIONS

// 1. ADD WORDS TO DOM
function addWordToDom(){
  randomWord = getRandomWord()
  word.innerHTML = randomWord
}
addWordToDom()

// COUNT DOWN
const timeInterval = setInterval(updateTime, 1000)

// 2. GENERATE RANDOM WORD
function getRandomWord(){
  return words[Math.floor(Math.random() * words.length)]
}

// 3. UPDATE SCORE
function updateScore(){
  score++
  scoreEl.innerHTML = score
}

// 4. UPDATE TIME
function updateTime(){
  time--
  timeEl.innerHTML = time + 's'
  if(time === 0){
    clearInterval(timeInterval)
    gameOver()
  }
}

// 5. GAME OVER
function gameOver(){
  endGameEl.innerHTML = `
    <h1>Time Ran Out</h1>
    <p>Your Score is ${score}</p>
    <button onclick="location.reload()">Reload</button>
  `
  endGameEl.style.display = 'flex'
}

// 6. EVENT LISTENER
text.addEventListener("input", (e)=>{
  const insertedText = e.target.value
  if(insertedText === randomWord){
    addWordToDom()
    updateScore()
    // CLEAR TEXT TARGET
    e.target.value = ''
    if(difficulty === 'hard'){
      time+=2
    }else if(difficulty === 'medium'){
      time+=3
    }else{
      time+=5
    }
    updateTime()
  }
})

// SETTINGS
settingsBtn.addEventListener("click",()=> settings.classList.toggle('hide'))

// SETTINGS SELECT

settingsForm.addEventListener("change", (e)=>{
  difficulty = e.target.value
  localStorage.setItem("difficulty", difficulty)
})

// SET DIFFICULTY TO LOCAL STORAGE
let difficulty = localStorage.getItem('difficulty') != null ? localStorage.getItem('difficulty') : 'medium'

// SET DIFFICULTY SELECT VALUE
difficultySelect.value = localStorage.getItem('difficulty') != null ? localStorage.getItem("difficulty") : 'medium'

// FOCUS TEXT AT START
text.focus()