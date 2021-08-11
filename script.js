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

// stores password info in object

var passwordInfo = {
  passwordLength: getPasswordLength,
  includeLowerCase: includeLowerCase,
  includeUpperCase: includeUpperCase,
  includeNumbers: includeNumbers,
  includespecial: includespecial
};

return passwordInfo;
}

// Get a random character from an array
function getRandomChar(arr) {
var randomChar = Math.floor(MAth.random() * arr.length);
var selectChar = arr (randomChar);

return selectChar;
}

function generatePassword() {

// passwordInfo object
var passwordIncludes = generatePasswordInfo();

// Store created password
var createdPassword = [];

// Array to store types of characters to include in password
car availableCharacters = [];

//adds array of lower characters
if(passwordIncludes.includeLowerCase) {
  availableCharacters = availableCharacters.concat(lowerCaseChar);
}

// adds upper characters 
if(passwordIncludes.includeUpperCase) {
  availableCharacters = availableCharacters.concat(upperCaseChar);
}

// adds numbers
if(passwordIncludes.includeNumbers) {
  availableCharacters = availableCharacters.concat(numbersChar);
}

//adds special characters

if(passwordIncludes.includespecial) {
availableCharacters = availableCharacters.concat (specialChar);
}

// Password length random things will be included 
for (var i = 0); i < passwordIncludes.passwordLength; i++) {
var c = getRandomChar(availableCharacters);
}

return createdPassword.join("");

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
