/*
// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  window.prompt("How many characters?")
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

*/
// Order: How many characters (8-128), ok for special characters, numeric characters,
// lowercase, uppercase


var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var randomUpper = uppercase[Math.floor(Math.random() * uppercase.length)]
console.log(randomUpper);

var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var randomLower = lowercase[Math.floor(Math.random() * lowercase.length)]
console.log(randomLower);

var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
var randomNumeric = numeric[Math.floor(Math.random() * numeric.length)]
console.log(randomNumeric);

// missing ":", ";", """, "\""
var special = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "{", "}", "[", "]", "|", "/", "'", "<", ">", ",", ".", "?"]
var randomSpecial = special[Math.floor(Math.random() * special.length)]
console.log(randomSpecial);


function characterNumber() {
  
window.prompt("How many characters?");

window.confirm("Special characters");

window.confirm("numeric characters");

window.confirm("lowercase");

window.confirm("uppercase");
}
