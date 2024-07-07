const currencyEL_one = document.querySelector("#currency-one")
const currencyEL_two = document.querySelector("#currency-two")
const amountEl_one = document.querySelector("#amount-one")
const amountEl_two = document.querySelector("#amount-two")

const rateEl = document.querySelector("#rate")
const swap = document.querySelector("#swap")


// FETCH ELEMENTS AND UPDATE THE DOM
function calculate(){
  const currency_one = currencyEL_one.value
  const currency_two = currencyEL_two.value

  fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`).then(res => res.json()).then(data => {
    console.log(data)
    const rate = data.rates[currency_two]

    rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`

    amountEl_two.value = (amountEl_one.value * rate).toFixed(2)
  })
}

// EVENT LISTENERS
currencyEL_one.addEventListener('change', calculate)
amountEl_two.addEventListener('input', calculate)
currencyEL_two.addEventListener('change', calculate)
amountEl_two.addEventListener('input', calculate)

swap.addEventListener('click', ()=>{
  const temp = currencyEL_one.value
  currencyEL_one.value = currencyEL_two.value
  currencyEL_two.value = temp
  calculate()
})

calculate()