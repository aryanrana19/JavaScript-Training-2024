var mathsMarks = document.querySelector(".maths")
var scienceMarks = document.querySelector(".science")
var socialScienceMarks = document.querySelector(".socialScience")
var hindiMarks = document.querySelector(".hindi")
var englishMarks = document.querySelector(".english")
var submitBtn = document.querySelector(".submitBtn")
var resultCard = document.querySelector(".result-container")
var passingCriteria = document.querySelector(".result-container")[3]


submitBtn.addEventListener("click", function(){
  if(mathsMarks.value == null){
    alert("Enter valid Maths marks")
  }else{
    mathsMarks = mathsMarks.value
  }
  if(scienceMarks.value == null){
    alert("Enter valid Science Marks")
  }else{
    scienceMarks = scienceMarks.value
  }
  if(socialScienceMarks == null){
    alert("Enter valid Social Science Marks")
  }else{
    socialScienceMarks = socialScienceMarks.value
  }
  if(hindiMarks == null){
    alert("Enter valid Hindi Marks")
  }else{
    hindiMarks = hindiMarks.value
  }
  if(englishMarks == null){
    alert("Enter valid English Marks")
  }else{
    englishMarks = englishMarks.value
  }
})


function calculatePercentage(a,b,c,d,e){
  var percentageVal = ((a+b+c+d+e)/5) + "%"
  return percentageVal
}
