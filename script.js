// // Array of special characters to be included in password
// var specialCharacters = [
//   '@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'
// ];

// Array of numeric characters to be included in password
// var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
// var lowerCasedCharacters = [
//   'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'
// ];

// Array of uppercase characters to be included in password
// var upperCasedCharacters = [
//   'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'
// ];


const characters = {
  uppers: ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
  lowers: ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
  numbers: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
  symbols: [ '@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','~','-','_','.'],
}

var userInput = prompt("How many characters would you like your password to have?")




const getRandomCharFromString = (arr) => {
  const randomNumber  = Math.floor(Math.random() * arr.length);

  return arr[randomNumber]
}
const generatePassword = (length = userInput) => { // password will be @Param-length, default to 8, and have at least one upper, one lower, one number and one symbol
  let pwd = "";

  // var getRandom = confirm;

  let characterSelected = [];

var r = confirm("Would you like special characters included in your password?");
if (r == true) {
  txt = "Yes";
  // getRandomCharFromString(characters.symbols)
  pwd += getRandomCharFromString(characters.symbols);//pwd will have at least one symbolo
  characterSelected = characterSelected.concat(characters.symbols)
}

var r = confirm("Would you like numbers in your password?");
if (r == true) {
  txt = "Yes";
//  getRandomCharFromString(characters.numbers)
pwd += getRandomCharFromString(characters.numbers); //pwd will have at least one number
characterSelected = characterSelected.concat(characters.numbers)


}

var r = confirm("Would you like your password to include capital letters?");
if (r == true) {
  txt = "Yes";
//  getRandomCharFromString(characters.uppers)
pwd += getRandomCharFromString(characters.uppers); //pwd will have at least one upper
characterSelected = characterSelected.concat(characters.uppers)


} 

var r = confirm("Would you like your password to include lowercase letters?");
if (r == true) {
  txt = "Yes";
//  getRandomCharFromString(characters.lowers)
pwd += getRandomCharFromString(characters.lowers); //pwd will have at least one lower
characterSelected = characterSelected.concat(characters.lowers)


} 


  for (let i = pwd.length; i < length; i++)
  // pwd += getRandomCharFromString(Object.values(characters).join('')); //fill the rest of the pwd with random characters
  pwd += getRandomCharFromString(characterSelected); //fill the rest of the pwd with random characters
  return pwd
}


// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
