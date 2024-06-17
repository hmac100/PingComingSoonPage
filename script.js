const body = document.querySelector('body');
const emailInput = document.querySelector('input');
const blueBtn = document.querySelector('.blueBtn');
// const mobBlueBtn = document.querySelector('.mobBlueBtn');
const errorMessage = document.querySelector('.errorMessage');





//   if(!emailInput.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/))
//     {
//    emailInput.style.outline = "1px solid hsl(354, 55%, 60%)";
//    errorMessage.style.display = "block";
//    return
//  }
//  errorMessage.style.display = "none";
//  emailInput.style.outline = "1px solid hsla(0, 0%, 59%, .4)";
 
 
 

//   console.log('clicked');


function validateEmail(){
if(!emailInput.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/))
   {
  emailInput.style.outline = "1px solid hsl(354, 55%, 60%)";
  errorMessage.style.display = "block";
  if (window.matchMedia('screen and (max-width: 375px)').matches) {
blueBtn.style.marginTop = "2rem";} 
  return
}
errorMessage.style.display = "none";
emailInput.style.outline = "1px solid hsla(0, 0%, 59%, .4)";


}

body.addEventListener('click', ()=> {
  emailInput.style.outline = "1px solid hsla(0, 0%, 59%, .4)";
  emailInput.value = "";
  errorMessage.style.display = "none";
  blueBtn.style.marginTop = "0rem";


})