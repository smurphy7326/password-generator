// Assignment code here
// Working Code Starts Here
// User Input Variables

var enter;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;

// Start Password Variable values:
// Special Characters

Character = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "[", "]", "{", "}", "|", "-", "+", "=", "_", "/", "|", "<", ">", "'", ":", "~", "`", "€"];

// Numeric characters

Number = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Uppercase Letters

Uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Lowercase Letters

Lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

get.addEventListener("click", function() {
  ps= generatePassword();
  document.getElementById("passowrd").placeholder = ps;
}

// Start function to generate password

function generatePassword() {
  // Must ask for user input at this instance
  enter = parseInt(prompt("How many characters would like your password to be? Choose between 8 and 128 characters"));
  // First the first statement for user validation
  if (!enter) {
    alert("This needs a value");  
  } else if (enter < 8 || enter > 128) { 
    // Confirm user input for the value
    // Start user input prompts 
    enter = parseInt(prompt("You should choose between 8 and 128"));

  } else {
    // Continues once the use input is validated 
    confirmNumber = confirm("Will this password contain numbers?");
    
  }
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
