// const = a variable that can't be changed (constants)

//Only full capitalized primitive data types, Strings/objects don't normally follow this convention

const PI = 3.14159;
let radius;
let circumference;

//PI = 102839176391; //woah, someone changed the number, gives a type error for the constant variable (TypeError: Assignment to constant variable)

/*
radius = window.prompt(`Enter the radius of a circle`);
radius = Number(radius);

circumference = 2 * PI * radius;

console.log(circumference);
*/

document.getElementById("mySubmit").onclick = function()
{
    radius = document.getElementById("myText").value;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById("myH3").textContent = circumference + "cm";
}
