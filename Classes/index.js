//classes = (ES6 feature) provides a more structured and cleaner way to work with objects compared to traditional
//          constructor functions
//          Ex: static keyword, encapsulation, inheritence

class Products //how to start a class
{
    constructor(name, price) //constructor, I'm pretty sure it must be named this!
    {
        this.name = name;
        this.price = price;
    }

    displayProduct() //class methods
    {
        console.log(`Produce: ${this.name}`);
        console.log(`Price: $${this.price.toFixed(2)}`);
    }

    calculateTotal(salesTax) //class methods
    {
        return this.price + (this.price * salesTax);
    }
}

const salesTax = 0.05;

const product1 = new Products("underwear", 7.2);
const product2 = new Products("darth vader lego set", 37.89);
const product3 = new Products("toy spaceship", 20.99);

product1.displayProduct();
product2.displayProduct();
product3.displayProduct();

const total = product1.calculateTotal(salesTax);
console.log(`Total price (with tax) is $${total.toFixed(2)}`);

