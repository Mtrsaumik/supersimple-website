const passwordIcon = document.querySelector(".uil-eye-slash");
let getInput = passwordIcon.parentElement.querySelector("input[type='password']");
let passwordStyle = document.querySelector(".mut");
passwordIcon.addEventListener("click",() => {
        if( getInput.type === "password") {
            getInput.type = "text";
            passwordIcon.classList.replace("uil-eye-slash","uil-eye");
            passwordStyle.classList.add(".mut");
        } else{
            getInput.type = "password";
            passwordIcon.classList.replace("uil-eye", "uil-eye-slash"); 
        } 
    });
const inputEmail = document.querySelector(".gu");
const emailIcon = document.querySelector(".uil-envelope-alt");

inputEmail.addEventListener("keyup",() => {
  let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if(inputEmail.value === ""){
    emailIcon.classList.replace("uil-check-circle", "uil-envelope-alt");
    emailIcon.style.color = "black";
    return;
  };
  if(inputEmail.value.match(emailPattern)){
    emailIcon.classList.replace("uil-envelope-alt","uil-check-circle");
    return emailIcon.style.color = "#4bb543";
  }else{
  emailIcon.classList.replace("uil-check-circle","uil-envelope-alt");
  emailIcon.style.color = "red";
  };
})

