const form = document.querySelector('.contact__main__form');
const inputEmail = document.querySelector('.contact__main__form--input');
const error = document.querySelector('.contact__main__form--error');

form.addEventListener('submit', (event)=>{
    event.preventDefault();
    const regExpr = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
    // console.log(regExpr.test(inputEmail.value))

    if(regExpr.test(inputEmail.value) == true){
            inputEmail.style.border ='1px solid blue';
            inputEmail.style.backgroundImage= 'url("")';
            inputEmail.style.backgroundColor= `hsl(0, 80%, 86%)`
            error.innerHTML=''

    }else{
            
            inputEmail.style.border ='1px solid yellow';
            inputEmail.style.backgroundImage="url('../img/icon-error.svg')";
            inputEmail.style.backgroundColor= `hsl(0, 93%, 68%)`
            error.innerHTML='Please provide a valid Email'
        }
})


