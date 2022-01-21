const from = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('Password check');

from.addEventListener('submit', (e) => {
    e.preventDefault();

    
    checkInputs();
    resetForm();
    
});

function checkInputs(){
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(usernameValue === ''){
        setErrorFor('Username cannot be blank');
    }else{
        console.log(usernameValue);
    }

    if(emailValue === ''){
        setErrorFor('Email cannot be blank');
    }else{
        console.log(emailValue);
    }
    if(emailIsValid(emailValue)){
        console.log(emailValue);
    }else{
        setErrorFor("Email is not corect!!!!!");
    }

    if(passwordValue === ''){
        setErrorFor('Password cannot be black');
    }else{
        console.log("Password correct!");
    }

    if(password2Value === ''){
        setErrorFor('Password 2 cannot be black');
    }else if(passwordValue === password2Value){
        console.log("Password correct!");   
    }else{
        setErrorFor('Incorect password check!');
    }
}

function setErrorFor(message){
    alert(message);
  }

  function resetForm() {
    document.getElementById("form").reset();
 }

 function emailIsValid (email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }
  
 
 

 
