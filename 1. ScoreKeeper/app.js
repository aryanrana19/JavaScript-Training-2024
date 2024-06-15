const p1Score = document.querySelector(".p1-input button")
const p1CurrentScore = document.querySelector(".p1-input label")
const p2Score = document.querySelector(".p2-input button")
const p2CurrentScore = document.querySelector(".p2-input label")
const matchLength = document.querySelector("#score")
const winScoreDisplay = document.querySelector('.winScoreDisplay')
const resetBtn = document.querySelector(".resetBtn")

resetBtn.addEventListener("click", function(){
    winningScore = 5
    p1CurrentScore.classList.remove("win")
    p2CurrentScore.classList.remove("win")
    p1CurrentScore.textContent = 0
    p2CurrentScore.textContent = 0
    winScoreDisplay.textContent = winningScore
    gameOver = false
})


var p1count = 0
var p2count = 0
let winningScore = 5
let gameOver = false

p1Score.addEventListener("click", function(){
    // console.log("P1 working")
    if(!gameOver){
        p1count++
        p1CurrentScore.textContent = p1count
        if(p1count === winningScore){
            gameOver=true
            p1CurrentScore.classList.add('win')
        }
    }
})

p2Score.addEventListener("click", function(){
    // console.log("P2 working")
    if(!gameOver){
        p2count++
        p2CurrentScore.textContent = p2count
        if(p2count === winningScore){
            gameOver=true
            p2CurrentScore.classList.add('win')
        }
    }
})


matchLength.addEventListener('change', function(){
    console.log(matchLength.value)
    winningScore = Number(matchLength.value)
    winScoreDisplay.textContent = matchLength.value
    matchLength.value=''
})