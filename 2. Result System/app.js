var mathsMarks = document.querySelector(".maths")
var scienceMarks = document.querySelector(".science")
var socialScienceMarks = document.querySelector(".socialScience")
var hindiMarks = document.querySelector(".hindi")
var englishMarks = document.querySelector(".english")
var submitBtn = document.querySelector(".submitBtn")
var resultCard = document.querySelector(".result-container")
var showResult = false


submitBtn.addEventListener("click", function(){
  mathsMarks = mathsMarks.value
  // console.log(mathsMarks)
  scienceMarks = scienceMarks.value
  // console.log(scienceMarks)
  socialScienceMarks = socialScienceMarks.value
  // console.log(socialScienceMarks)
  hindiMarks = hindiMarks.value
  // console.log(hindiMarks)
  englishMarks = englishMarks.value
  // console.log(englishMarks)
  resultCard.classList.add("show")
})
