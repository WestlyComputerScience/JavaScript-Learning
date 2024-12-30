//static = keyword that defines properties or methods that belong to a class itself rather
//       than the objects created from that class (class owns anything static, not object)

class MathUtil
{
    static PI = 3.14159; //static variable, not dependant on objects!

    static getDiameter(radius) //static method, not dependant on objects!
    {
        return radius * 2;
    }

    static getCircumference(radius)
    {
        return 2 * radius * this.PI;
    }

    static getArea(radius)
    {
        return this.PI * radius * radius;
    }
}

console.log(MathUtil.PI); //prints out the class variable

//Do not need
/*
const MathUtil1 = new MathUtil();
console.log(MathUtil1.PI);
*/

console.log(MathUtil.getDiameter(30));
console.log(MathUtil.getCircumference(30).toFixed(2));
console.log(MathUtil.getArea(30).toFixed(2));

//-----------------------------------------------------------------------------------------------------------------

class User
{
    static userCount = 0;

    constructor(username)
    {
        this.username = username;
        User.userCount++;
    }

    sayHello() //not a static method (object based)
    {
        console.log(`Hello, my username is ${this.username}`);
    }

    static getUserCount()
    {
        console.log(`There are ${User.userCount} users online`);
    }
}

const user1 = new User("Spongebob");
console.log(user1.username);
console.log(User.userCount);
user1.sayHello(); //object method

const user2 = new User("Patrick");
console.log(user2.username);
console.log(User.userCount); //refer to global count with Class.staticVariable, cannot call user.userCount (will give you undefined, it's a class variable, not object variable)
user2.sayHello(); //object method

User.getUserCount(); //static method

