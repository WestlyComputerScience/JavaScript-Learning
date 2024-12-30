// constructors = special method for defining the properties and methods of objects

function Car(make, model, year, color) //car object constructor, Note: it's capitalized
{
    this.make = make,
    this.model = model,
    this.year = year,
    this.color = color,
    this.drive = function(){console.log(`You drive this ${this.model}`)}
}

const car1 = new Car("Ford", "Bronco", 2024, "blue"); //new Constructor(param1, param2...)

console.log(car1); //prints object data in key:value pairs
console.log(car1.make);
console.log(car1.model);
console.log(car1.year);
console.log(car1.color);
car1.drive();

//-------------------------------------------------------------------------------------------------------

const car2 = new Car("Tesla", "Cybertruck", 2025, "red");

console.log(car2);
console.log(car2.make);
console.log(car2.model);
console.log(car2.year);
console.log(car2.color);
car2.drive();
