const textarea=document.querySelector('textarea');
const totalCounter=document.getElementById('totalCounter');
const remainingCounter=document.getElementById('remainingCounter');

textarea.addEventListener('keyup', updateCounter);


function updateCounter(){
    totalCounter.textContent= textarea.value.length;
    remainingCounter.textContent= textarea.getAttribute('maxlength')-textarea.value.length;
    if(textarea.getAttribute('maxlength')-textarea.value.length == 0){
     remainingCounter.style.color='red';   
    }
}
