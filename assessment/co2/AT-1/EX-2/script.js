const form = document.getElementById("registerForm");
const email = document.getElementById("email");
const phone = document.getElementById("phone");

const emailError = document.getElementById("emailError");
const phoneError = document.getElementById("phoneError");

email.addEventListener("input", validateEmail);
phone.addEventListener("input", validatePhone);

function validateEmail() {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email.value === "") {
        emailError.textContent = "Email is required";
        return false;
    }
    else if (!emailPattern.test(email.value)) {
        emailError.textContent = "Invalid Email Address";
        return false;
    }
    else {
        emailError.textContent = "";
        return true;
    }
}

function validatePhone() {
    const phonePattern = /^[6-9]\d{9}$/;

    if (phone.value === "") {
        phoneError.textContent = "Phone number is required";
        return false;
    }
    else if (!phonePattern.test(phone.value)) {
        phoneError.textContent = "Enter a valid 10-digit phone number";
        return false;
    }
    else {
        phoneError.textContent = "";
        return true;
    }
}

form.addEventListener("submit", function(event){

    const emailValid = validateEmail();
    const phoneValid = validatePhone();

    if(!emailValid || !phoneValid){
        event.preventDefault();
        alert("Please correct the errors before submitting.");
    }
    else{
        alert("Registration Successful!");
    }

});