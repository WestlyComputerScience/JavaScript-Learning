// arrows functions = a concise way to write function expressions, good for simple functions that you only use once
//  Ex: (parameters) => some code

const hello = () => console.log("Hello"); //       (parameters) => expression

//----------------------------------------------------------------------------------------------------------

const greeting = (name) => console.log(`Hello ${name}`); //Allows input

greeting("Westly");

//----------------------------------------------------------------------------------------------------------
//if want more than 1 statement

const greeting1 = (name, age) => {console.log(`Hello ${name}`)
                             console.log(`You're ${age} years old!`)}; //enclose it in {} for multiple lines!
greeting1("Westly", "18");

//----------------------------------------------------------------------------------------------------------
//using it with setTimeout()

setTimeout( () => console.log("Hello"), 2000);

//----------------------------------------------------------------------------------------------------------
//using it with map()

const nums = [1, 2, 3, 4, 5, 6];

const squares = nums.map( (element) => Math.pow(element, 2)); //squares each element
const cubes = nums.map( (element) => Math.pow(element, 3)); //cubes each element

console.log(squares);
console.log(cubes);

//----------------------------------------------------------------------------------------------------------
//using it with filter()

const evenNums = nums.filter( (element) => element % 2 === 0); //filters out odd nums
const oddNums = nums.filter( (element) => element % 2 !== 0); //filters out even nums

console.log(evenNums);
console.log(oddNums);

//----------------------------------------------------------------------------------------------------------
//using it with reduce()

const total = nums.reduce( (accumulator, element) => accumulator + element)
console.log(total);
