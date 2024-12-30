// nested objects = Objects inside of other objects. Allows you to represent more complex data structures.
//                  Child Object is enclosed by a Parent Object
//
//                  Ex:
//                  Person(Address{}, ContactInfo{})
//                  ShoppingCart(Keyboard{}, Mouse{}, Monitor{})

const person = 
{
    fullName: "Spongebob Squarepants",
    age: 30,
    isStudent: true,
    hobbies: ["karate", "jellyfishing", "cooking"],

    address: //nested object
    {
        street: "124 Conch St.",
        city: "Bikini Bottom",
        country: "Int. Water"
    }
}

console.log(person.fullName);
console.log(person.age);
console.log(person.isStudent);
console.log(person.hobbies);
console.log(person.hobbies[1]);
console.log(person.address); //prints all object info
console.log(person.address.street); //gets nested variable

for(const property in person.address) //uses for loop to access all the data in nested object
{
    console.log(person.address[property]);
}

//-------------------------------------------------------------------------------------------------------------------------------------
// More complex example

class Person
{
    constructor(name, age, ...address)
    {
        this.name = name;
        this.age = age;
        this.address = new Address(...address); //uses spread operator to take in all the object info (not how you input all address info at the end and that it matches with (look below))
    }
}


class Address
{
    constructor(street, city, country) //matches with this!
    {
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

const person1 = new Person("Spongebob", 30, "124 Conch St.", "Bikini Bottom", "Int. Waters");
const person2 = new Person("Patrick", 107, "128 Conch St.", "Bikini Bottom", "Int. Waters");
const person3 = new Person("Mr. Crabs", 4038, "277 Conch St.", "Bikini Bottom", "Int. Waters");

console.log(person1.name);
console.log(person1.age);
console.log(person1.address);
console.log(person1.address.country);

console.log(person2.name);
console.log(person2.age);
console.log(person2.address);
console.log(person2.address.city);

console.log(person3.name);
console.log(person3.age);
console.log(person3.address);
console.log(person3.address.street);
