// Math = built-in object that provides a collection of properties and methods

Math.PI; //used to get the values of pi
Math.E; //Euler's Number: represents the base of a natural log

console.log(Math.PI);

let x = 3.21;
let y = 2;
let u = 3.50;
let g = 45;
let z;
let q;
let w;

z = Math.round(x); //rounds down to 3
q = Math.round(y); //stays at 2
w = Math.round(u); //rounds up to 4! .5 or higher

w = Math.floor(u); //Always rounds down, outputs 3

w = Math.ceil(u); //Always rounds up, outputs 4

w = Math.trunc(u); //removes any decimal portion, outputs 3

w = Math.pow(3, 2); //3 to the power of 2

w = Math.sqrt(81); //square root of 81 is 9

w = Math.log(10); //finds the natural log of a number

w = Math.sin(g); //sin of 45 deg
w = Math.cos(g); //cos of 45 deg
w = Math.tan(g); //tan of 45 deg

w = Math.abs(g); //absolute value of a number

w = Math.sign(g); //find the sign of a number (pos or neg) (outputs -1 or 1, and 0 when 0)

let max = Math.max(x, y, u, g); //displays the max value from the given variables
let min = Math.min(x, y, u, g); //displays the min value from the given variables

console.log(z);
console.log(q);
console.log(w);
console.log(max);
console.log(min);