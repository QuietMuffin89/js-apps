const date = document.querySelector("#date")
const num = document.querySelector("#num")
const drawbutton = document.querySelector("#pick")
const reset = document.querySelector("#reset")

const lottonum = []
const color = ['ornage', 'blue', 'purple', 'green', 'brown']
const today = new Date()

let year = today.getFullYear()
let month = today.getMonth() + 1
let day = today.getDate()

date.textContent = `${year}년 ${month}월 ${day}일 랜덤 번호 뽑기!`


function paintNumber(number){
    const eachNumDiv = document.createElement('div')
    eachNumDiv.classList.add('eachnum')
    let colorIndex = Math.floor(number / 10)
    eachNumDiv.style.backgroundColor = color[colorIndex]
    eachNumDiv.textContent = number
    num.appendChild(eachNumDiv)
  }

  drawbutton.addEventListener('click', function(){
    while(lottonum.length < 6){
        let ran = Math.floor(Math.random() * 45) + 1;
        if(lottonum.indexOf(ran) == -1){
            lottonum.push(ran)
            paintNumber(ran)
        }
    }
  })

  reset.addEventListener('click', function(){
    lottonum.splice(0, 6)
    num.innerHTML = ""
  })