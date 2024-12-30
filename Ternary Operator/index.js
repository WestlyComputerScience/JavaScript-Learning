// ternary operator = a shortcut to if{} and else{} statements
//                    helps assign a variable based on a condition




//                    condition ? codeIfTrue : codeIfFalse;

let age = 21;
let message = age >= 18 ? "You're an adult" : "You're a minor"; //message gets assigned to the left or right value

console.log(message);

let time = 16; //4:00pm

let greeting = time < 12 ? "Good morning" : "Good afternoon";

console.log(greeting);

let purchaseAmount = 125;
let discount = purchaseAmount >= 100 ? 10 : 0;
console.log(`Your total is $${purchaseAmount - purchaseAmount * (discount/100)}`); //I forgot why but you need `` for it to work