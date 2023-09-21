let result=document.querySelector('.result');

function showResult(message){
  setTimeout(()=>{
    result.innerHTML=message;
    result.style.display='block';
  },2000)
}

function hideResult(){
  result.style.display='none';
}

function toss1(){
  const coinToss = document.querySelector(".coin");
  coinToss.classList.remove('tossed');

  hideResult();
  
  setTimeout(()=>{
    coinToss.classList.add('tossed');
    let randomNumber=Math.random();


  if(randomNumber>=0 && randomNumber<1/2){
    coinToss.innerHTML=`<img src="coinHead.jpg">`;

    showResult('You Win!');

  } else{
    coinToss.innerHTML= `<img src="coinTail.jpg">`;

    showResult('You Lose!');
  }  
  
},10);
}

function toss2(){
  const coinToss = document.querySelector(".coin");

  coinToss.classList.remove('tossed');

  hideResult();
  
  setTimeout(()=>{
    coinToss.classList.add('tossed');
    let randomNumber=Math.random();

  if(randomNumber>=0 && randomNumber<1/2){
    coinToss.innerHTML=`<img src="coinHead.jpg">`;

    showResult('You Lose!');

  } else{
    coinToss.innerHTML= `<img src="coinTail.jpg">`;

    showResult('You Win!');
  }  
},10);

}

document.body.addEventListener('keydown',()=>{
  if (event.key==='h' || event.key==='H'){
    toss1();
  } else if(event.key==='t' || event.key==='T'){
    toss2();
  }
})

