// destructuring = extract values from arrays and objects, then assign them to variabels in a convenient way
//                 [] = to perform array destructuring
//                 {} = to perform object destructuring
//                 5 examples

//-------------------------EXAMPLE 1---------------------------
// swap the value of two variables

let a = 1;
let b = 2;

[a, b] = [b, a];

console.log(a);
console.log(b); //it swaps their values

//-------------------------EXAMPLE 2---------------------------
// swap 2 elements in an array

const colors = ["red", "green", "blue", "yellow", "orange"];

[colors[0], colors[4]] = [colors[4], colors[0]]; // using the [] brackets to enclose a swapping like statement

console.log(colors);

//-------------------------EXAMPLE 3---------------------------
// assign array elements to variables

const [firstColor, secondColor, thirdColor, ...extraColors] = colors; //assigns values to the variables, then the ...extraColors assigns the rest of the values to the array

console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);
console.log(extraColors);

//-------------------------EXAMPLE 4---------------------------
// extract values from objects

const person1 = 
{
    firstName: "Spongebob",
    lastName: "SquarePants",
    age: 30,
    job: "Fry Cook"
}

const person2 = 
{
    firstName: "Patrick",
    lastName: "Star",
    age: 40
}

const {firstName, lastName, age, job} = person1; //grabs all info from person1, Note: values must match with object variables (Ex: "hi" instead of "job" wouldn't work)

console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job);

//const {firstName, lastName, age, job = "Unemployed"} = person2; //the    job = "Unemployed"   is used to assign a value where there was none (acts as a default value)

//-------------------------EXAMPLE 5---------------------------
// destructure in function parameters

function displayPerson({firstName, lastName, age, job}) //takes in an object as an argument, but creates parameters for all the variables
{
    console.log(`Name: ${firstName} ${lastName}`)
    console.log(`Age: ${age}`);
    console.log(`Job: ${job}`);
}

const person3 = 
{
    firstName: "Spongebob",
    lastName: "SquarePants",
    age: 30,
    job: "Fry Cook"
}

const person4 = 
{
    firstName: "Patrick",
    lastName: "Star",
    age: 40
}

displayPerson(person3);
