// class : (ES6) feature provides a more structured and cleaner way to work with objects compared to traditional constructor functions.
// ex: static keyword, encapsulation, inheritance

class Product{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }

    displayProduct(){
        console.log(`Product: ${this.name}`);
        console.log(`Price: $${this.price.toFixed(2)}`);
    }

    calculateTotal(salesTax){
        return this.price + (this.price * salesTax)
    }
}

const salesTax = 0.05;

const Product1 = new Product('shirt', 19.99);
const Product2 = new Product('pants', 22.50);
const Product3 = new Product('shoes', 30.90);
Product1.displayProduct()
Product2.displayProduct()
Product3.displayProduct()

const total = Product1.calculateTotal(salesTax)
console.log(`Total price (with tax): $${total.toFixed(2)}`);