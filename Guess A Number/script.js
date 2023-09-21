const inputbox=document.getElementById('guessbox')
const decision=document.getElementById('decision')
const result=document.getElementById('result')
const guess=document.getElementById('guess')

function playGame(){
  let computerMove=(Math.random().toFixed(1)*10)%10
  let playerMove=parseInt(inputbox.value)

  guess.innerHTML=`You : ${playerMove}`
  inputbox.value=''

  result.innerHTML=`Computer : ${computerMove}`

  if(isNaN(playerMove)){
    guess.innerHTML=`You : ${playerMove}`
    result.innerHTML=`Computer : `
    decision.innerHTML='Enter a number between 0-9'
  } else if(playerMove==computerMove){
     decision.innerHTML="Congratulations! You Won!"
  } else if(playerMove!==computerMove){
    decision.innerHTML="You Lost! Better Luck Next Time"
  } 
}