// inheritance = allows a new class to inherit properties and methods froman existing class (parent -> child)
//               -basically helps with code reusability

class Animal // superclass/parent, saving a lot of lines of code
{
    alive = true;

    eat()
    {
        console.log(`This ${this.name} is eating`)
    }

    sleep()
    {
        console.log(`This ${this.name} is sleeping`)
    }
}

class Rabbit extends Animal //child of Animal class
{
    name = "Rabbit"

    run()
    {
        console.log(`This ${this.name} is running`);
    }
}

class Fish extends Animal //child of Animal class
{
    name = "Fish"

    swim()
    {
        console.log(`This ${this.name} is swimming`);
    }
}

class Hawk extends Animal //child of Animal class
{
    name = "Hawk"

    fly()
    {
        console.log(`This ${this.name} is flying`);
    }
}

const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();

rabbit.alive = false;

console.log(rabbit.alive);

rabbit.eat(); //same method, different output. Polymorphism/inheritance
rabbit.sleep();

fish.eat();
fish.sleep();

hawk.eat();
hawk.sleep();

rabbit.run();
fish.swim(); //individual methods
hawk.fly();

rabbit.fly(); //doesn't work, not defined for rabbit (Uncaught TypeError: rabbit.fly is not a function)

