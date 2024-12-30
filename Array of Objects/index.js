// Arrays of objects = self explanatory

//can be written like this
//const fruits = [{name : "apple", color: "red", calories: 95}, {name : "apple", color: "red", calories: 95}, {name : "apple", color: "red", calories: 95}, {name : "apple", color: "red", calories: 95}];

//but this is easier
const fruits = [{name : "apple", color: "red", calories: 95}, 
                {name : "orange", color: "orange", calories: 45}, 
                {name : "banana", color: "yellow", calories: 105}, 
                {name : "coconut", color: "white", calories: 159}, 
                {name : "pineapple", color: "yellow", calories: 37}];

//fruits[0].name; //access the name property of the first object (array[object#].variable)

console.log(fruits[0].name);
console.log(fruits[1].color);
console.log(fruits[2].calories);

fruits.push({name: "grapes", color: "purple", calories: 62}); //adds element to an array
console.log(fruits);

fruits.pop(); //removes array element (last index)
console.log(fruits);

fruits.splice(1, 2); //remove elements at certain indicies
console.log(fruits);

fruits.forEach(fruit => console.log(fruit.name)); //uses for each loop to loop through all the fruit names

const fruitCalories = fruits.map(fruit => fruit.calories); //store all calorie info into array
console.log(fruitCalories);

const yellowFruits = fruits.filter(fruit => fruit.color === "yellow"); //filters out non-yellow fruits
console.log(yellowFruits);

console.log(fruits); //below should be 159
const maxFruit = fruits.reduce((max, fruit) => fruit.calories > max.calories ? max = fruit : max) //arrow head function   (_) => _         and ternary operator     _ ? _ : _
console.log(maxFruit.calories); //.calories since maxFruit is an object
