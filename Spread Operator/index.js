// spread operator =  ... allows an iterable such as an array or string to be expanded into seperate elements (unpacks the elements)

// the operator is      ...

let num = [1, 2, 3, 4, 5];
//let max = Math.max(num); //retrieves maximum value from array, HOWEVER, doesn't work since you can't insert an array
let max = Math.max(...num); //...   = unpacks all array values for max to choose from
let min = Math.min(...num); //...   = unpacks all array values for min to choose from

console.log(max);
console.log(min);

let username = "Westly O"
let letters = [...username];
console.log(letters); //now have an array of characters for the string

let letters1 = [...username].join("-"); //joins characters back together with a "-" between them
console.log(letters1);

let fruits = ["apple", "orange", "banana"];
console.log(fruits);

let newFruits = [...fruits]; //allows to create an array with an existing array
console.log(newFruits);

let vegetables = ["carrots", "tomatoes", "potatoes"];

let foods = [...fruits, ...vegetables, "eggs"]; //joins 2 arrays together along with other things
console.log(foods);


