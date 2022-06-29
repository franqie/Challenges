/****Form Validation****/

const form = document.getElementById("form");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const fnameSibling = document.querySelector(".fname + p");
const lnameSibling = document.querySelector(".lname + p");
const emailSibling = document.querySelector(".email + p");
const passwordSibling = document.querySelector(".password + p");

//console.log(fname.parentNode.lastElementChild);

form.addEventListener("click", event =>{
    event.preventDefault();
    checkError();
});

const setError = (field) =>{
    field.classList.add("error");
    field.parentNode.lastElementChild.style.display = "block";
}

const setSuccess = (field) =>{
    field.classList.remove("error");
    field.parentNode.lastElementChild.style.display = "none";
}

const checkError = () =>{
    fnameValue = fname.value.trim();
    lnameValue = lname.value.trim();
    emailValue = email.value.trim();
    passwordValue = password.value.trim();

    if(fnameValue == ""){
        setError(fname);
    } else {
        setSuccess(fname);
    };


    if(lnameValue == ""){
        setError(lname);
    } else {
        setSuccess(lname);
    };


    if(emailValue == ""){
        setError(email);
    } else {
        setSuccess(email);
    };

    
    if(passwordValue == ""){
        setError(password);
    } else {
        setSuccess(password);
    };
};















