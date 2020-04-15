// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Complete list of valid characters as object containing 4 arrays
var validCharacters = {
  "numbers": [0,1,2,3,4,5,6,7,8,9],
  "lowers": ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
  "uppers": ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
  "specials":["!","@","#","$","%","^","&","*","(",")","~","_","+","="]
};

//password length, prompt user until valid number entered
var passwordlength;

if(typeof passwordlength !=="number" ){
  passwordlength = prompt("Password length \n must be 8-128 characters");
  passwordlength = parseInt(passwordlength);
  while (passwordlength<8){
    passwordlength = prompt("Password length is TOO SMALL.\nPlease enter a value of 8-128");
  }
  while(passwordlength>128){
    passwordlength = prompt("Password length is TOO LARGE.\nPlease enter a value of 8-128");
  }
}

//random element function, accepts array, picks out a random array element
function randomChoice(array){
  var num =Math.floor(Math.random()*array.length);
  return array[num];
}

//confirm password preferences
var userPrefs = {
  "lowercase" : confirm("Use lowecase letters?"),
  "uppercase" : confirm("Use uppercase letters?"),
  "number" : confirm("Use numbers?"),
  "special" : confirm("Use special characters?")
}
var validArrays = [];
if(userPrefs.lowercase){validArrays.push(validCharacters.lowers);}
if(userPrefs.uppercase){validArrays.push(validCharacters.uppers);}
if(userPrefs.number){validArrays.push(validCharacters.numbers);}
if(userPrefs.special){validArrays.push(validCharacters.specials);}

//for every character of the password, picks a random valid set, and random character within the set
var password="";
for(var i=0;i<passwordlength;i++)
{
  var selectedCharacter = randomChoice(randomChoice(validArrays));
  password = password.concat(selectedCharacter);
}
console.log(password);