// this = reference to the object where THIS is used (the object depends on the immediate context)
//              Ex: person.name = this.name

const person1 =
{
    name: "Spongbob",
    favFood: "Krabby Patties",
    sayHello: () => console.log(`Hi! I am ${this.name}`), //Note: THIS DOES NOT WORK! Arrow functions are too far inside the scope for it to work! Makes a reference to window object

}

//------------------------------------------------------------------------------------------------------------

person1.sayHello();

const person2 =
{
    name: "Spongbob",
    favFood: "Krabby Patties",
    sayHello: function()
    {
        console.log(`Hi! I am ${this.name}`) //this would be the correct way to use it!
    }

}

person2.sayHello();

//------------------------------------------------------------------------------------------------------------

console.log(this); //returns a window object lol, the window to see our website

