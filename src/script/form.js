const email = document.querySelector('.email');
const error = document.querySelector('.error-email');
const emailSec = document.querySelector('.email2');
const errorSec = document.querySelector('.error-email2');

let errorEmail = email.addEventListener('blur', ()=> {
    if(!email.checkValidity()) {
        error.innerHTML = "Please check your email"
    }
})

let corrigirEmail = email.addEventListener('focus', ()=> {
    if(error.innerHTML="Please check your email") {
        error.innerHTML="";
    }
})

let errorEmailSec = emailSec.addEventListener('blur', ()=> {
    if(!emailSec.checkValidity()) {
        errorSec.innerHTML = "Please check your email"
    }
})

let corrigirEmailSec = emailSec.addEventListener('focus', ()=> {
    if(errorSec.innerHTML="Please check your email") {
        errorSec.innerHTML="";
    }
})