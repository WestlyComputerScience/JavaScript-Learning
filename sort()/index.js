// sort() = method used to sort elements of an array in place. Sorts elements as strings in lexicographic order, not alphabetical
//          lexicographic = (alphabet + numbers + symbols) as strings

let fruits = ["coconut", "orange", "banana", "apple", "pineapple"];

fruits.sort();

console.log(fruits);

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------
//sorts them lexographically, 1004 before 81 since 1 comes before 8
let nums = [81, 17, 65, 33, 45, 1004, 62];

nums.sort();

console.log(nums);

//how fix?

let numbers = [81, 17, 65, 33, 45, 1004, 62];

numbers.sort( (a, b) => a - b); //parameters --> 81 and 17, 17 and 65...,    a-b gives numeric values for the sort() method to work with (reverse b - a)

console.log(numbers);

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------

const people = [{name: "Spongebob", age: 30, gpa: 4.0}, 
                {name: "Patrick", age: 40, gpa: 1.5}, 
                {name: "Squidward", age: 50, gpa: 3.6}];

people.sort( (a, b) => a.age - b.age); //sort by ages
console.log(people);

people.sort( (a, b) => a.gpa - b.gpa); //sort by gpa
console.log(people);

people.sort( (a, b) => a.name - b.name); //sort by name, DOESN'T WORK!
console.log(people);

//how fix?

people.sort( (a, b) => a.name.localeCompare(b.name)); //sort by name, WORKS!    localeCompare() compares 2 strings lexicographically (for reverse, swap a and b)
console.log(people);
