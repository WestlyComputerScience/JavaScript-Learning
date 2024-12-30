// array = a variable like structure that can hold more than 1 value


//basic standard array 0, 1, 2
let fruits = ["apple", "banana", "orange"];

console.log(fruits); //prints out array with brackets
console.log(fruits[0]); //prints apple

fruits.push("coconut"); //adds element to the end
console.log(fruits[3]);

fruits.pop(); //removes last element
console.log(fruits);

fruits.unshift("mango"); //inserts element to the start of an array, returns length
console.log(fruits);

fruits.shift(); //remove element from beginning
console.log(fruits);

let numOfFruits = fruits.length; //gets length of array
let index = fruits.indexOf("apple"); //returns the index if it's found an array, -1 if no exist

console.log(numOfFruits);
console.log(index);

for(let i = 0; i < fruits.length; i++) //loop through an array
{
    console.log(fruits[i]);
}

console.log("---------")

for(let fruit of fruits) //for each loop
{
    console.log(fruit);
}

fruits.sort(); //sorts elements (String alphabetically)
fruits.sort().reverse(); //sorts elements in reverse

console.log("---------")

for(let fruit of fruits)
{
    console.log(fruit);
}