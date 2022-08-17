// Assignment code here
var combined = []
var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "{", "}", "[", "]", "|", "/", "'", "<", ">", ",", ".", "?"]

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function writePassword() {
  
  var characters = parseInt(
  prompt("How many characters would you like your password to contain?"))
  var lowercaseCheck = confirm("Click OK to confirm including lowercase characters.")
  var uppercaseCheck = confirm("Click OK to confirm including uppercase characters.");
  var numericCheck = confirm("Click OK to confirm including numeric characters.")
  var specialCheck = confirm("Click OK to confirm including special characters.")
  var password = "";

  if (characters !== NaN) { // If user inputs a number
for (var i = 0; i < characters; i++) {
  
  if (characters >= 8 && characters <= 128) {
    if (lowercaseCheck) { // If user confirms they want lowercase characters, push the relevant array into 'combined' array
        combined.push.apply(combined, lowercase);
    }
    if (uppercaseCheck) { // If user confirms uppercase, push array into 'combined' array
        combined.push.apply(combined, uppercase);
    }
    if (numericCheck) { // If user confirms numbers, push array into 'combined' array
        combined.push.apply(combined, numeric);
    }
    if (specialCheck) { // If user confirms special characters, push array into 'combined' array
        combined.push.apply(combined, special)
    }
    var random = combined[Math.floor(Math.random() * combined.length)] // Creates random password using combined array (confirmed values)
    password += random + "";

    document.getElementById("password").innerHTML = password; // puts password into
      }
  
      else if (characters < 8 || characters > 128) {
    document.getElementById("password").innerHTML = "Please choose a number between 8 and 128."
      }
    }
      if ( // If user did not select any character type
        lowercaseCheck === false &&
        uppercaseCheck === false &&
        numericCheck === false &&
        specialCheck === false) {
      document.getElementById("password").innerHTML = "Please choose at least one type of character to include in your password."
    } 
  } if (isNaN(characters)) { // if user did not type a number
  document.getElementById("password").innerHTML = "Please choose a number between 8 and 128."
  }
}