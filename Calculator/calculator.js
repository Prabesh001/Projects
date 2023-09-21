const display=document.querySelector('.display')
let result=false
    function displayValue(value){
      if(result){
        display.value=''
        result=false;
      }
      display.value+=value;
    }

    function calculate(){
      try{
        display.value=eval(display.value);
        result=true
      }
      catch(error){
        display.value='Ma Error'
        result=true
      }
      if(display.value==='undefined'){
        display.value='0'
      }
      
    }
    function clr(){
      display.value='';
      result=false
    }

    document.body.addEventListener('keydown',(event)=>{
      if(event.key==='9'){
        displayValue(9)
      }
       else if(event.key==='8'){
        displayValue(8)
      }
       else if(event.key==='7'){
        displayValue(7)
      }
       else if(event.key==='6'){
        displayValue(6)
      }
       else if(event.key==='5'){
        displayValue(5)
      }
       else if(event.key==='4'){
        displayValue(4)
      }
       else if(event.key==='3'){
        displayValue(3)
      }
       else if(event.key==='2'){
        displayValue(2)
      }
       else if(event.key==='1'){
        displayValue(1)
      }
       else if(event.key==='0'){
        displayValue(0)
      }
       else if(event.key==='+'){
        displayValue('+')
      }
       else if(event.key==='-'){
        displayValue('-')
      }
       else if(event.key==='*'){
        displayValue('*')
      }
       else if(event.key==='/'){
        displayValue('/')
      }
       else if(event.key==='C' || event.key==='c' || event.key==='Escape'){
        display.value=''
      }
       else if(event.key==='=' || event.key==='Enter'){
        calculate()
      }
      else if(event.key==='Backspace'){
        display.value=display.value.slice(0,-1);
      }
    })

  const darkMode=document.querySelector('.darkMode')
  let click=0
  darkMode.addEventListener('click',()=>{
    if(click===0){
      document.body.style.backgroundColor='white'
      darkMode.style.backgroundColor='whitesmoke'
      darkMode.style.color='black'
      darkMode.innerHTML='Dark Mode'
      click=1
    }else if(click===1){
      document.body.style.backgroundColor='#000a'
      darkMode.style.backgroundColor='black'
      darkMode.style.color='white'
      darkMode.innerHTML='Light Mode'
      click=0
    }
  })
