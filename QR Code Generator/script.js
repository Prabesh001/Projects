let imgbox=document.getElementById('img-box')
let qrimg=document.getElementById('qr-image')
let qrText=document.getElementById('qr-text')

function generateQr(){
  if(qrText.value!==''){
    qrimg.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=` + qrText.value

  imgbox.classList.add('show-img')
  }
  
}
