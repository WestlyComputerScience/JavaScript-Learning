

// declaration ---> let x;
// assignment ---> x = 100;

//Cannot have the same name
let x;
age = 100;
let y;
y = 5;
let price = 10.99;

console.log(`You are ${age} years old`); //I guess $ encloses it in a string, like $${price} prints: $10.99
console.log(`The price is $${price}`);
console.log(typeof price); //data type of number


//String is a series of characters
let firstName = "Westly";
console.log(`Your name is ${firstName}`);

//booleans: true/false
let online = true;
console.log(`Bro is online: ${online}`);

let fullName = "Westly Orr";
let student = true;
let age1 = 1000;

document.getElementById("p1").textContent = `Your name is: ${fullName}`; //displays it on page
document.getElementById("p2").textContent = age1;
document.getElementById("p3").textContent = student;