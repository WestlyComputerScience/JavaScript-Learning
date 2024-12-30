// Method Chaining = Calling one method after another in 1 line of code

// ------- NO METHOD CHAINING -----

//Takes input and capitalizes first character while rest are lowercase
let username = window.prompt("Enter your username: ");

username = username.trim();
let firstCharOfUsername = username.charAt(0);
firstCharOfUsername = firstCharOfUsername.toUpperCase();

let extraCharsOfUsername = username.slice(1);
extraCharsOfUsername.toLowerCase();

username = firstCharOfUsername + extraCharsOfUsername;

console.log(username);

// ------- METHOD CHAINING -------
// same this but less writing
let myUsername = username;

// The faster way
myUsername = myUsername.trim().charAt(0).toUpperCase() + myUsername.trim().slice(1).toLowerCase(); //trim username and make first letter uppercase

console.log(myUsername);