// super = keyword is used in classes to call the constructor or 
//         access the properties and methods of a parent (superclass)
//      Ex:
//         this = this object
//         super = the parent

class Animal
{
    constructor(name, age)
    {
        this.name = name;
        this.age = age;
    }

    move(speed)
    {
        console.log(`The ${this.name} moves at a speed of ${speed} mph`);
    }
}

class Rabbit extends Animal
{

    constructor(name, age, runSpeed)
    {
        super(name, age); //calls super constructor to initialize variables
        this.runSpeed = runSpeed;
    }

    run()
    {
        console.log(`This ${this.name} can run`);
        super.move(this.runSpeed); //how to call a super method!
    }

    //Uncaught Reference error for below, you need to call super before constructor
    /*
    constructor(name, age, runSpeed)
    {
        this.name = name;  //repetitive
        this.age = age; 
        this.runSpeed = runSpeed;
    }
    */
}

class Fish extends Animal
{
    constructor(name, age, swimSpeed)
    {
        super(name, age); //calls super constructor to initialize variables
        this.swimSpeed = swimSpeed;
    }

    swim()
    {
        console.log(`This ${this.name} can swim`);
        super.move(this.swimSpeed); //how to call a super method!
    }
}

class Hawk extends Animal
{
    constructor(name, age, flySpeed)
    {
        super(name, age); //calls super constructor to initialize variables
        this.flySpeed = flySpeed;
    }

    fly()
    {
        console.log(`This ${this.name} can fly`);
        super.move(this.flySpeed); //how to call a super method!
    }
}

const rabbit = new Rabbit("rabbit", 1, 25);
const fish = new Fish("fish", 2, 12);
const hawk = new Hawk("hawk", 6, 100);

//Constructor
console.log(rabbit.name); //still works as intended!
console.log(rabbit.age);
console.log(rabbit.runSpeed);

console.log(fish.name);
console.log(fish.age);
console.log(fish.swimSpeed);

console.log(hawk.name);
console.log(hawk.age);
console.log(hawk.flySpeed);
console.log(hawk.runSpeed); //hawks don't have this method! Undefined!

//Methods
rabbit.run();
fish.swim(); //individual methods, but include the move method from animal using               super.methodCall(this.variable)
hawk.fly();

