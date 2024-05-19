const username = document.querySelector('.username');
const password = document.querySelector('.password');
const button = document.querySelector('.sub-btn');
const innerFlip = document.querySelector('.flip-card-inner');

const loginBtn = document.querySelector('.sub-btn-log');
const usernameLog = document.querySelector('.username-log');
const passwordLog = document.querySelector('.password-log');

button.addEventListener('click',()=>{
  if(username.value.length>=6 && password.value.length>=8){
    innerFlip.classList.add('login');
  } else {
    username.value=''
    password.value=''
    alert("Check your Username and Password again!");
  }
})

button.addEventListener('mouseover',(e)=>{
  if(username.value.length>=6 && password.value.length>=8){
    
  } else{
    let value = e.clientX % 124
    button.style.left=value + 13 +'px'   
  }
})

loginBtn.addEventListener('click',()=>{
  if(usernameLog.value==username.value && passwordLog.value==password.value){
    // window.location='escapingButton.html'
    document.write('Login Successful!')
  } else {
    alert("Check your Username and Password again!");
  }
})