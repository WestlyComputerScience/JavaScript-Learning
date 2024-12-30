// getter = special method that makes a property readable
// setter = special method that makes a property writeable

// validate and modify a value when reading/writing a property (combining the two)

class Rectangle
{
    constructor(width, height)
    {
        this.width = width;
        this.height = height;
    }

    set width(newWidth) //Note: have to write set!
    {
        if(newWidth > 0)
        {
            this._width = newWidth; //Note: using an _variable lets other developers know it's a private property (shouldn't touch it at all!)
        }
        else
        {
            console.error("Width must be a postive number");
        }
    }

    set height(newHeight) //Note: have to write set!
    {
        if(newHeight > 0) //solves it for strings too lol
        {
            this._height = newHeight; //Note: using an _variable lets other developers know it's a private property (shouldn't touch it at all!)
        }
        else
        {
            console.error("Height must be a postive number");
        }
    }

    get width() //Note: have to write get!
    {
        return `${this._width.toFixed(1)}cm`; //Note: must include underscore, otherwise maximum stack size exceeded
    }

    get height() //Note: have to write get!
    {
        return `${this._height.toFixed(1)}cm`;
    }

    get area() //Note: have to write get!
    {
        return `${(this._width * this._height).toFixed(1)}cm^2`; //it's like the underscore is saying "private width" instead of "width"
    }
}

// const rectangle = new Rectangle(-100000000000, "pizza"); //shouldn't be allowed

// console.log(rectangle.width);
// console.log(rectangle.height);


const rectangle1 = new Rectangle(200, 400); //should be allowed

console.log(rectangle1.width);
console.log(rectangle1.height);

rectangle1.width = 5; //now allows you to change values
rectangle1.height = 8;

console.log(rectangle1.width);
console.log(rectangle1.height);

console.log(rectangle1.area); //can access it as if it were a property

//--------------------------------------------------------------------------------------------------------
//just another example

class Person
{
    constructor(firstName, lastName, age)
    {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    set firstName(newFirstName)
    {
        if(typeof newFirstName === "string" && newFirstName.length > 0) //use typeof === "string" to check if it's a string!
        {
            this._firstName = newFirstName;
        }
        else
        {
            console.error("First name must be a non-empty string");
        }
    }

    set lastName(newLastName)
    {
        if(typeof newLastName === "string" && newLastName.length > 0) //use typeof === "string" to check if it's a string!
        {
            this._lastName = newLastName;
        }
        else
        {
            console.error("Last name must be a non-empty string");
        }
    }

    set age(newAge)
    {
        if(typeof newAge === "number" && newAge >= 0) //typeof possible returns a string of the data type
        {
            this._age = newAge;
        }
        else
        {
            console.error("Age must be a number");
        }
    }

    get firstName()
    {
        return this._firstName; //Don't forget the _, otherwise maximum stack size exceeded
    }

    get lastName()
    {
        return this._lastName;
    }

    get fullName()
    {
        return this._firstName + " " + this._lastName;
    }

    get age()
    {
        return this._age;
    }
}

//const person = new Person(100, 70, "fries"); //shouldn't happen

const person = new Person("Wes", "Potato", 18)

console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
console.log(person.fullName);

