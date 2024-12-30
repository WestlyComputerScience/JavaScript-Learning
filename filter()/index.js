// .filter() = creates new array by filtering out elements

let numbers = [1, 2, 3, 4, 5, 6, 7];

let evenNumbers = numbers.filter(isEven); //filters out all the numbers that return false

console.log(numbers);
console.log(evenNumbers);

function isEven(element)
{
    return element % 2 === 0; //returns a true or false for filter method
}

//---------------------------------

const ages = [16, 17, 22, 33, 65, 22, 15, 26];

const adults = ages.filter(isAdult);

console.log(ages);
console.log(adults);

function isAdult(element)
{
    return element >= 18;
}

