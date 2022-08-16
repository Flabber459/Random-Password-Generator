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

  var characters = window.prompt("How many characters would you like your password to contain?");
  var lowercaseCheck = window.confirm("Click OK to confirm including lowercase characters.")
  var uppercaseCheck = window.confirm("Click OK to confirm including uppercase characters.");
  var numericCheck = window.confirm("Click OK to confirm including numeric characters.")
  var specialCheck = window.confirm("Click OK to confirm including special characters.")
  var space = "";
// maybe loop the above: " Click OK to confirm including+ (type) + characters"
  for (var i = 0; i < characters; i++) {
   
    if (characters >= 8 && characters <= 128) {
      if (lowercaseCheck) {
        combined.push.apply(combined, lowercase);
      }
      if (uppercaseCheck) {
        combined.push.apply(combined, uppercase);
      }
      if (numericCheck) {
        combined.push.apply(combined, numeric);
      }
      if (specialCheck) {
        combined.push.apply(combined, special)
      }
      var randomGroups = combined[Math.floor(Math.random() * combined.length)]
      space += randomGroups + "";

      document.getElementById("password").innerHTML = space;
      }
      else if (characters < 8 || characters > 128) {
    document.getElementById("password").innerHTML = "Please choose a number between 8 and 128."
      }
      
    }
    if (
        lowercaseCheck === false &&
        uppercaseCheck === false &&
        numericCheck === false &&
        specialCheck === false) {
      document.getElementById("password").innerHTML = "Please choose at least one type of character to include in your password."
    }
  }

// find a way to set minimum value of 1 of each
// When I don't add a value nothing happens
// Nothing happens when you write a non-number

// add comments