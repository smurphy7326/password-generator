// Assignment code here
// Working Code Starts Here

var generateBtn = document.querySelector("#generate");

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

  

    // Confirm user input for the value
    // Start user input prompts 
    enter = parseInt(prompt("You should choose between 8 and 128"));

  } else {
    // Continues once the use input is validated 
    confirmNumber = confirm("Will this password contain numbers?");
    confirmCharacter = confirm("Will this contain special characters?");
    confirmLowercase = confirm("Will this contain Lowercase letters?");
    confirmUppercase = confirm("Will this contain Uppercase letters?");
  };

  // Make sure you choose one of the criteria above
  if (!confirmCharacter && !confirmNumber && !confirmLowercase && !confirmUppercase) {
    choices = alert("You must choose a critia!");
  }

  // Else if for three positive options choosen
  else if (confirmCharacter && confirmNumber && confirmUppercase) {
    choices = character.concat(number, Uppercase);
  }

  else if (confirmCharacter && confirmNumber && confirmLowercase) {
    choices = character.concat(number, Lowercase);
  }

  else if (confirmCharacter && confirmLowercase && confirmLowercase) {
    choices = character.concat(confirmLowercase, confirmUppercase);
  }

  // else if for two positive options choosen

  else if (confirmCharacter && confirmNumber) {
    choices = character.concat(number);
  }

  else if (confirmCharacter && confirmLowercase) {
    choices = character.concat(Lowercase);
  }

  else if (confirmCharacter && confirmUppercase) {
    choices = character.concat(Uppercase);
  }

  else if (confirmLowercase && confirmNumber) {
    choices = character.concat(number);
  }

  else if (confirmLowercase && confirmUppercase) {
    choices = character.concat(Uppercase);
  }

  else if (confirmNumber && confirmUppercase) {
    chioces = number.concat(Uppercase);
  }

  // if only one option is choosen

  else if (confirmCharacter) {
    choices = character;
  }

  else if (confirmNumer) {
    choices = number;
  }

  else if (confirmLowercase) {
    chioces = Lowercase;
  }

  else if (confirmUppercase) {
    chioces = space.concat(Uppercase);
  }

// Random Variable Selection
for (var i = 0; i < enter; i++) {
  var pickChoices = choices[Math.floor(Math.random() * choices.length)];
  password.push(pickChoices);
}

// This password array 
  var ps = password.join("");
  UserInput(ps)
  return ps;

// Put the password value into the textbox
// Changed function to use textcontent

function UserInput(ps) {
  document.getElementById("password").textContent = ps;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


