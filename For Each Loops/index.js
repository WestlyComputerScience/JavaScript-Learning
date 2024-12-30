// forEach() = method used to iterate over the elements of an array and apply a specific function (callback) to each element

//           array.forEach(callback)


let numbers = [1, 2, 3, 4, 5];

numbers.forEach(double); //doubles all the elements, within method, so can change values

numbers.forEach(display); //inserts a method as a callback in order to peform the operation for each element

function double(element, index, array)
{
    array[index] = element * 2;
}

function display(element)
{
    console.log(element);
}

//--------------------------------------------------------------------------------------

let fruits = ["apple", "orange", "banana", "coconut"];

function display(element)
{
    console.log(element);
}

function upperCase1(element, index, array)
{
    array[index] = element.toUpperCase();
}

function lowerCase1(element, index, array)
{
    array[index] = element.toLowerCase();
}

function capitalize(element, index, array)
{
    array[index] = element.charAt(0).toUpperCase() + element.slice(1); //makes first letter upper case, need the part after the plus to get the rest of the string, otherwise reset to just the character
}

fruits.forEach(upperCase1); //makes them all uppercase

fruits.forEach(lowerCase1); //makes them all lowercase

fruits.forEach(capitalize); //makes all first character uppercase

fruits.forEach(display); //displays all of them

