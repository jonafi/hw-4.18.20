var validCharacters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",0,1,2,3,4,5,6,7,8,9,"!","@","#","$","%","^","&","*","~"];

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

//confirm password preferences
var lowercase = confirm("Use lowecase letters?");
var uppercase = confirm("Use uppercase letters?");
var number = confirm("Use numbers?");
var special = confirm("Use special characters?");


var password =""; //blank password

for(i=0;i<passwordlength;i++){
  var characterChoice = randomChoice(validCharacters);
if(   (number === true)   && (typeof characterChoice ==="number")  ){   
password = password.concat(characterChoice);
console.log("loop number:"+i+" "+password);
}
else if((lowercase === true) && (characterChoice===characterChoice.toLowerCase())){
  password = password.concat(characterChoice);
  console.log("loop number:"+i+" "+password);

}
else if((uppercase === true) && (characterChoice===characterChoice.toUpperCase())){
  password = password.concat(characterChoice);
  console.log("loop number:"+i+" "+password);
}
else if((special === true) &&(characterChoice !==(/^[0-9a-zA-Z]+$/))){
  //check for special character matach
}
else{
  i--; //no match redo loop
  
}
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

