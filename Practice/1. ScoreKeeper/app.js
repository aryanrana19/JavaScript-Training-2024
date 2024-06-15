

const p1Btn = document.querySelector(".p1-btn")
const p2Btn = document.querySelector(".p2-btn")
const p1Score = document.querySelector(".p1-score-display")
const p2Score = document.querySelector(".p2-score-display")
const resetBtn = document.querySelector(".reset-btn")
var inputVal = document.querySelector(".input")

var gameOver = false
var p1Count = 1
var p2Count = 1
var matchLength = 5 

alert("Game of " + matchLength)

inputVal.addEventListener("change", function(){
  matchLength = inputVal.value
  alert("Game of " + matchLength)
})


p1Btn.addEventListener("click", function(){
    if(!gameOver){
      p1Score.textContent = p1Count
      if(p1Count == matchLength){
        gameOver = true
        p1Score.classList.add("win")
      }
      p1Count++
    }
})

p2Btn.addEventListener("click", function(){
  if(!gameOver){
    p2Score.textContent = p2Count
    if(p2Count == matchLength){
      gameOver = true
      p2Score.classList.add("win")
    }
    p2Count++
  }
})

resetBtn.addEventListener("click", function(){
  gameOver = false
  p1Count = 0
  p2Count = 0
  matchLength = 5
  p1Score.textContent = 0
  p2Score.textContent = 0
  p1Score.classList.remove("win")
  p2Score.classList.remove("win")
  inputVal.value = ''
  alert("Game of " + matchLength)
})