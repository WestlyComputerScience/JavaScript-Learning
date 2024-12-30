//type conversion = change the datatype of a value to another (strings, numbers, booleans)

/*
let age = window.prompt("How old are you?");

age = Number(age); //converts it to a number

age += 1;

console.log(age, typeof age);
*/

//------------String------------

let x = "pizza";
let y = "pizza";
let z = "pizza";

x = Number(x);
y = String(y);
z = Boolean(z);

console.log(x, typeof x); //NaN (Not a Number)
console.log(y, typeof y); //still a string
console.log(z, typeof z); //returns true??? always true

//------------0------------

let x1 = "0";
let y1 = "0";
let z1 = "0";

x1 = Number(x1);
y1 = String(y1);
z1 = Boolean(z1);

console.log(x1, typeof x1); //0
console.log(y1, typeof y1); //String 0
console.log(z1, typeof z1); //true

//------------empty String------------

let x2 = "";
let y2 = "";
let z2 = "";

x2 = Number(x2);
y2 = String(y2);
z2 = Boolean(z2); 

console.log(x2, typeof x2); //0 as a number
console.log(y2, typeof y2); //empty string
console.log(z2, typeof z2); //false: can be used to tell if no user input

//------------Undefined variable------------

let x3;
let y3;
let z3;

x3 = Number(x3);
y3 = String(y3);
z3 = Boolean(z3); 

console.log(x3, typeof x3); //NaN (Not a Number)
console.log(y3, typeof y3); //undefined string
console.log(z3, typeof z3); //false