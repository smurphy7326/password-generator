// Assignment code here
// Working Code Starts Here

// Numeric characters for the password

var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Uppercase Letters for the password

var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Lowercase Letters for the password

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Special Charcter for the password

Character = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "[", "]", "{", "}", "|", "-", "+", "=", "_", "/", "|", "<", ">", "'", ":", "~", "`", "€"];

// Start assignment Code here

function generatePassword() {
  var generatePassword() {
  var getPasswordLength = parseInt(prompt("How many characters would like your password to be?"));
  // First the first statement for user validation
  if (getPasswordLength < 8 ) {
    alert("A minimum number of 8 characters required.");
    generatePassword();
  }

  if (getPasswordLength > 128) {
    alert(" A Maximum number of 128 characters required.");
    generatePassword();
  }

  if(isNaN(getPasswordLength)) {
    alert("Invalid input. Please insert a number.");
    generatePassword();
  }

  // Confirm including lowercase letters
  var includeLowerCase = window.confirm("Click OK to include lowercase characters");

  // Confirm including uppercase letter

  var includeUpperCase = window.confirm("Click OK to include uppercase characters");

  // Confirm including numbers

  var includeNumbers = window.confirm("click OK to include numbers");

  // Confirm including special charcaters

  var includespecial = window.confirm("click OK to include special characters");

  if (!includeLowerCase && !includeUpperCase && !includeNumbers && !includespecial) {
    alert("Minimum of 1 character type needed.");
    return;
  }   

  // Code given for the assignment 
  
  var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


