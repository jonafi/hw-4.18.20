
//arrays for future use
var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numeric = [0,1,2,3,4,5,6,7,8,9];
var special = ["!","@","#","$","%","^","&","*","~"];
var completeSet = [lowercase,uppercase,numeric,special];

//prompt user for password length, ask until valid or cancels
var passwordlength;
if(typeof passwordlength !="number" ){
  passwordlength = prompt("Password length \n must be 8-128 characters");
  passwordlength = parseInt(passwordlength);
  while (passwordlength<8){
    passwordlength = prompt("Password length is too small.\nPlease enter a value of 8-128");
  }
  while(passwordlength>128){
    passwordlength = prompt("Password length is too large.\nPlease enter a value of 8-128");
  }
}

//random choice function pics a random element of the array passed in

function randomChoice(array){
     var num =Math.floor(Math.random()*array.length);
     return array[num];
  ;
}

//confirm password preferences in a new array
var characterTypes = [];
var userPrefs;
userPrefs = confirm("Use lowecase letters?");
if(userPrefs){characterTypes.push("lowercase");}
userPrefs = confirm("Use uppercase letters?");
if(userPrefs){characterTypes.push("uppercase");}
userPrefs = confirm("Use numbers?");
if(userPrefs){characterTypes.push("numeric");}
userPrefs = confirm("Use special characters?");
if(userPrefs){characterTypes.push("special");}

// console.log(characterTypes);

for(i=0;i<10;i++){
  console.log(characterTypes)
  var chosenArrayName = randomChoice(characterTypes); //pics a random valid array name
  //console.log("random array chosen: "  + chosenArrayName);
  var chosenArrayIndex = characterTypes.indexOf(chosenArrayName)
  //console.log("random array index: " + chosenArrayIndex);
  var chosenCharacter = characterTypes[chosenArrayIndex][i]; //replace i with matching random number from 0 to (the selected array.length)
  //console.log(chosenCharacter);
}




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



// var test2 = ('!@#$%!122');
// test2 = test2.replace(/[^\w\s]/gi, '');
// console.log(parseInt(test2));
// console.log(typeof test2);
// console.log(test2);

