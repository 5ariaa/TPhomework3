/*
    Program Name: TpAssignment3.js
    Author: Maria Ortiz
    Date Created: 10/12/2024
    Date last updated: 10/19/2024
    Version: TpAssignment3.js 5.0
    Purpose: Homework 3 JS new patient registration form
*/

// dynamic date JS code //
const d = new Date();
let text = d.toLocaleDateString();
document.getElementById("today").innerHTML = text;

//Range Slider JS code//

let slider = document.getElementById("range")
    let output = document.getElementById("range-slider")
    output.innerHTML = slider.value;

    slider.oninput = function () {output.innerHTML = this.value;};

function validateFname(){
    fname = document.getElementById("fname").value.trim();
    var namePattern = /^[a-zA-Z'-]+$/;
    //checks if first name was filled out
    if (fname == "") {
        document.getElementById("fname-error").innerHTML = "First name cannot be left empty";
        return false;
    } else if (fname != ""){
        if (!fname.match(namePattern)){
        document.getElementById("fname-error").innerHTML = "Letters, apostraphes, and dashes only.";
        return false;
    } else if (fname.length<2) {
        document.getElementById("fname-error").innerHTML = "First name has to be atleast 2 characters";
        return false;
    } else if (fname.length > 30) {
        document.getElementById("fname-error").innerHTML = "First name cannot exceed 30 characters.";
        return false;
    } else {
        document.getElementById("fname-error").innerHTML = "";
        return true;
    }
    }
}

    //validates middle initial
    function validateMinit(){
        minit = document.getElementById("minit").value;
        var namePattern = /^[A-Z]+$/;
        //makes middle intial upper case
        minit = minit.toUpperCase();
        document.getElementById("minit").value = minit;
        //checks for one character.
        if (minit.length > 1) {
            document.getElementById("minit-error").innerHTML = "Middle intital cannot have more than one character";
            return false;
    } else if (!minit.match(namePattern)){ //checks if it matches pattern
            document.getElementById("minit-error").innerHTML = "Letters only";
            return false;
        } else {
            document.getElementById("minit-error").innerHTML = "";
            return true;
        }
        }
    

   //validates last name
    function validateLname() {
        lname = document.getElementById("lname").value.trim();
        var namePattern = /^[a-zA-Z'-]+$/;
        //checks if first name was filled out
        if (lname == "") {
            document.getElementById("lname-error").innerHTML = "Last name cannot be left empty";
            return false;
        } else if (lname != ""){
            if (!lname.match(namePattern)){ //checks if it matches pattern
            document.getElementById("lname-error").innerHTML = "Letters, apostraphes, and dashes only.";
            return false;
        } else if (lname.length<2) { //checks if it is atleast 2 characters
            document.getElementById("lname-error").innerHTML = "Last name has to be atleast 2 characters";
            return false;
        } else if (lname.length > 30 ) { //checks that is it not more than 30 characters
            document.getElementById("lname-error").innerHTML = "Last name cannot exceed 30 characters.";
            return false;
        } else {
            document.getElementById("lname-error").innerHTML = "";
            return true;
        }
        }
    }

    //will review the dob input using jscode
function validateDob() {
    dob=document.getElementById("dob");
    let date = new Date(dob.value);
    let maxDate = new Date().setFullYear(new Date()-120);

    if (date > new Date()) {
        document.getElementById("dob-error").innerHTML =
         "Date of birth cannot be in the future.";
        dob.value="";
        return false;
    }else if(date < new Date(maxDate)) {
        document.getElementById("dob-error").innerHTML = 
        "Date of birth cannot be more than 120 years ago.";
        dob.value="";
        return false;
    } else {
        document.getElementById("dob-error").innerHTML = "";
        return true
    }
}
//will review the social security input using jscode
function validateSsn() {
    const ssn = document.getElementById("ssn").value;
    //defines social security pattern
    const ssnR = /^[0-9]-{3}-?[0-9]{2}-?[0-9]{4}$/;
    if (ssnR.test(ssn)) {
        document.getElementById("ssn-error").innerHTML = "Please enter a valid Social Security Number.";
        return false;
    } else {
        document.getElementById("ssn-error").innerHTML = "";
        return true;
    }
}
//reviews address
function validateAddress1() {
    var address1 = document.getElementById("address1").value;
    console.log(address1);
    console.log(address1.length);

    if (address1.length < 2) {
        document.getElementById("address1-error").innerHTML = 
        "Please enter something.";
        return false;
    } else {
        document.getElementById("address1-error").innerHTML = "";
        return true;
    }
}

//validates city
function validateCity() {
    city = document.getElementById("city").value.trim();

    if (!city) {
        document.getElementById("city-error").innerHTML = "City cannot be left blank.";
        return false;
    } else {
        document.getElementById("city-error").innerHTML = "";
        return true;
    }
}

//reviews zip code
function validateZcode() {
    const zipInput = document.getElementById("zipcode");
    let zip = zipInput.value.replace(/\D/g, ""); //only allows numbers

    if (!zip) {
        document.getElementById("zipcode-error").innerHTML =
        "You cannot leave zip code blank";
        return false;
    }
    if (zip.length > 5) {
        zip = zip.slice(0,5); // only allows five digits, anything else will be removed
    }
    zipInput.value = zip;
    document.getElementById("zipcode-error").innerHTML = "";
    return true;
}

//reviews email

function validateEmail() {
    email = document.getElementById ("email").value;
    var emailR =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (email == "") {
        document.getElementById("email-error").innerHTML= "You cannot leave email blank.";
        return false;
    } else if (!email.match(emailR)) {
        document.getElementById("email-error").innerHTML = "Please enter a valid email address.";
        return false;
    } else {
        document.getElementById("email-error").innerHTML = "";
        return true;
    }
}

function validatePhone() {
    const phoneInput = document.getElementById("phnum");
    const phone = phoneInput.value.replace(/\D/g, ""); // only allows numbers

    if (phone.length == 0) {
        document.getElementById("phnum-error").innerHTML =
        "Phone number must be ten digits.";
        return false;
    }
    const formattedPhone = 
    phone.slice (0,3) + "-" + phone.slice (3,6) + "-" + phone.slice (6,10)
    phoneInput.value = formattedPhone;
    document.getElementbyId("phnum-error").innerHTML = "";
    return true;
}
function validateUname() {
    uname = document.getElementById("uname").value;

    //converts to lowercase

    uname = uname.toLowerCase();

    if (uname.length == 0) {
        document.getElementById("uname-error").innerHTML =
        "You cannot leave username empty.";
        return false;
    }
        
    //makes sure that username can't start with #
    if (!isNaN(uname.charAt(0))) {
        document.getElementById("uname-error").innerHTML =
        "Username cannot begin with a number.";
        return false;
    }
    //makes sure that it is only letters, #, and _
    let regex = /^[a-zA-Z0-9_]+S/;
    if (regex.test(uname)) {
        document.getElementById("uname-error").innerHTML =
        "Username can only contain letters, numbers of underscores.";
        return false;
    }  else if (uname.length <5) {
        document.getElementById("uname-error").innerHTML =
        "Username must be at least 5 characters.";
        return false;
    } else if (uname.length > 30) {
        document.getElementById("uname-error").innerHTML =
        "Username cannot go over 30 characters.";
        return false;
    } else {
        document.getElementById("uname-error").innerHTML = "";
        return true;
    }
} 

function validatePassword() {
    const pword = document.getElementById("pword").value;
    const uname = document.getElementById("uname").value;

    //sets up for array

    const errorMessage = [];

    //checks for lowercase letters
    if (!pword.match(/[a-z]/)) {
        errorMessage.push ("Enter one lowercase letter.");
    }
    //checks for upercase
    if (!pword.match(/[A-Z]/)) {
        errorMessage.push("Enter at least one uppercase letter.");
    }
        //check for numbers
   if (!pword.match(/[0-9]/)) {
        errorMessage.push("Enter at least one number.");
    }
// check for special characters
    if (!pword.match(/[!\@#\$%&*\-_\\.+\(\)]/)) {
        errorMessage.push("Enter at least one special character.");
    }
    if (pword == uname || pword.includes(uname)) {
        errorMessage.push("Password should not contain your username.");
    }
    //displays error messages for any errors we have
    const errorConstainer = document.querySelector (".pword-message");
    errorConstainer.innerHTML = errorMessage
    .map((message) => `<span>${message}</span><br/>`)
    .join("");    
}
//confirm password validation
function confirmPword() {
    pword1 = document.getElementById("pword").value;
    pword2 = document.getElementById("cpword").value;

    if (pword1 != pword2) {
        document.getElementById("cpword-error").innerHTML =
        "Passwords do not match.";
        return false;
    } else {
        document.getElementById("cpword-error").innerHTML=
        "Passwords Match.";
        return true;
    }

}

//redisplays user input to the user

function showInput() {
    var formcontent = document.getElementById("signup");
    var formoutput;
    var i;
    formoutput = "<table class = 'output'><th colspan = '3'>Your Information:</th>";
    for (i = 0; i < formcontent.length; i ++) {
        if (formcontent.elements[i].value != "") {
            datatype = formcontent.elements[i].type;
            switch (datatype) {
                case "checkbox":
                    if (formcontent.elements[i].checked) {
                        formoutput = formoutput + "<tr><td align = 'right'>" + formcontent.elements[i].name + "</td>";
                        formoutput = formoutput + "<td class='outputdata'>&#x2713;</td></tr>";
                    }
                    break;
                case "radio":
                    if (formcontent.elements[i].checked) {
                        formoutput = formoutput + "<tr> <td align = 'right'>" + formcontent.elements[i].name + "</td>";
                        formoutput = formoutput + "<td class='outputdata'>" + formcontent.elements[i].value + "</td></tr>";
                    }
                    break;
                case "button":
                case "submit":
                case "reset":
                    break;
                default:
                    formoutput = formoutput + "<tr><td align = 'right'>" + formcontent.elements[i].name + "</td>";
                    formoutput = formoutput + "<td class='outputdata'>" + formcontent.elements[i].value + "</td></tr>";
            }
        }
    }
    if (formoutput.length > 0) {
        formoutput = formoutput + "</table>";
        document.getElementById("showInput").innerHTML = formoutput;
    }
}

//removes user input

function removeReview() {
    document.getElementbyId("showInput").innerHTML = "";
}

function showAlert() {
    var alertBox = documentGetElementByID("alert-box");
    var closeAlert = documentGetElementByID("close-alert");

    alertBox.style.display = "block";
    closeAlert.onclick = function () {
        alertBox.style.display = "none";
    }
}

function validateAll() {
    let valid = true;

    if (!validateFname()) {
        valid = false;
    }
    if (!validateFname()) {
        valid = false;
    } 
    if (!validateMinit()) {
        valid = false;
    } 
    if (!validateLname()) {
        valid = false;
    }
     if (!validateDob()) {
        valid = false;
    }
    if (!validateSsn()) {
        valid = false;
    }
    if (!validateAddress1()) {
        valid = false;
    }
    if (!validateCity()) {
        valid = false;
    }
    if (!validateZcode()) {
        valid = false;
    }
    if (!validateEmail()) {
        valid = false;
    }
    if (!validatePhone()) {
        valid = false;
    }
    if (!validateUname()) {
        valid = false;
    }
    if (!validatePassword()) {
        valid = false;
    }
    if (valid) {
        document.getElementById("submit").disabled = false;
    }
    else {
        showAlert();
    }
}
