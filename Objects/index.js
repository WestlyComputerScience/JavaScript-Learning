// object = A collection of related properties and/or methods, can represent real world objects (people, products, places)
// Ex: object = {key:value, function()}

const person1 = //this is an object
{
    firstName: "Spongebob",  //Note: it's a comma, not a semicolon!
    lastName: "squarePants", //Note: it's a colon, not an equals sign!
    age: 30,
    isEmployed: true,
    sayHello: function()
    {
        console.log("Hi! I'm Spongebob!")
    },
    sayGoodbye: function()
    {
        console.log("Goodbye!")
    }
}

const person2 = 
{
    firstName: "Patrick",
    lastName: "Star",
    age: 42,
    isEmployed: false,
    sayHello: () => console.log("Hi! I'm Patrick!"),
    sayGoodbye: () => console.log("Bye...")
}

console.log(person1.firstName); //object.variable
console.log(person1.lastName);
console.log(person1.age);
console.log(person1.isEmployed);
person1.sayHello(); //object.methodCall()
person1.sayGoodbye();


console.log(person2.firstName);
console.log(person2.lastName);
console.log(person2.age);
console.log(person2.isEmployed);
person2.sayHello();
person2.sayGoodbye();
