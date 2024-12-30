// .map() = accepts a callback and applies that function to each element of an array, then return a new array
// make new array


const numbers = [1, 2, 3, 4, 5];

const squares = numbers.map(square); //the .map(callback) returns an updated array with new values

console.log(numbers); //old
console.log(squares); //new

function square(element)
{
    return Math.pow(element, 2);
}

//-------------------------------------------------------------------

const students = ["Bob", "Larry", "Tom", "Alexander"];

const upperCaseStudents = students.map(upperCase);

console.log(students); //old 
console.log(upperCaseStudents); //new

function upperCase(element)
{
    return element.toUpperCase();
}

//-------------------------------------------------------------------

const dates = ["2024-1-10", "2025-2-20", "1917-3-4"];

const formattedDates = dates.map(formatDates);

console.log(dates); //old 
console.log(formattedDates); //new

function formatDates(element)
{
    const parts = element.split("-");
    return `${parts[1]}/${parts[2]}/${parts[0]}`;
}

