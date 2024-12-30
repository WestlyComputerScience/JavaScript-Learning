//function declaration = define a reusable block of code that performs a specific task
// aka regular methods

function hello()
{
    console.log("hello");
}

//-----------------------------------------------------------

//function expression = a way to define functions as values or variables

const hello1 = function() //stores function in a variable
{
    console.log("hello");
}

hello1();

//-----------------------------------------------------------

setTimeout(hello1, 3000); //after 3 seconds, I will execute hello function (callback, 3000)

//-----------------------------------------------------------

setTimeout(function() 
{
    console.log("hello");
}, 3000) //use function as an argument

//-----------------------------------------------------------
//The old way

const nums = [1, 2, 3, 4, 5, 6];
const squares = nums.map(square);

console.log(squares);

function square(element)
{
    return Math.pow(element, 2);
}

//-----------------------------------------------------------
//The new way

const squares1 = nums.map(function square1(element)
{
    return Math.pow(element, 2);
}); //put the function inside the map() method as a callback function

console.log(squares1);

//-----------------------------------------------------------

const cubes = nums.map(function(element) //does it with cubing numbers
{
    return Math.pow(element, 3)
})

console.log(cubes);

//-----------------------------------------------------------

const evenNums = nums.filter(function(element) //even numbers
{
    return element % 2 === 0;
});

console.log(evenNums);

//-----------------------------------------------------------

const oddNums = nums.filter(function(element) //odd numbers
{
    return element % 2 !== 0;
});

console.log(oddNums);

//-----------------------------------------------------------
const total = nums.reduce(function(accumulator, element) //adds up all the numbers
{
    return accumulator + element;
});

console.log(total);
