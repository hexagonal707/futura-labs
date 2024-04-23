let usernameRegex = /^[a-zA-Z0-9_-]{3,20}$/;
let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

function checkInput(inputId, regex, errorId) {

  let input = document.getElementById(inputId).value;

  let error = document.getElementById(errorId);

  let isValid = regex.test(input);

  // error.style.visibility = isValid || input === "" ? "hidden" : "visible";
 
  
  if(input === ""){
    return error.style.display = "flex";
  }

  error.style.display = isValid || input === "" ? "none" : "flex";
  
 
}

// Call checkInput function for each input field
function checkAll() {
  checkInput("username", usernameRegex, "usernameError");
  checkInput("email", emailRegex, "emailError");
  checkInput("password", passwordRegex, "passwordError");
}
