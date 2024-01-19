let field1 = document.getElementById("userTypeField")
field1.disabled = false;
let field2 = document.getElementById("registerField")
field2.disabled = true;
let field3 = document.getElementById("loginField")
field3.disabled = true;

document.addEventListener("DOMContentLoaded", function (event) {

});

function newUser() {
    field1.disabled = true;
    field2.disabled = false;
}

function existingUser() {
    field1.disabled = true;
    field3.disabled = false;
}

function newSubmission() {
    let userName = document.getElementById("registerName").value;
    localStorage.setItem("user", userName);
    let password = document.getElementById("pWord").value;
    localStorage.setItem("password", password);
    let city = document.getElementById("city").value;
    localStorage.setItem("city", city);
    let state = document.getElementById("state").value;
    localStorage.setItem("state", state);
     if (userName != null && password != null && city != null && state != null) {
        field2.disabled = false;
        alert(`Welcome ${userName}`);
     }
     else {
        alert("Please fill all fields");
     }
}

function existingSubmission() {
    
}
