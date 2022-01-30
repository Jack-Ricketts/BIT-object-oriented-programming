const Animal = require('./Animal.js');

class Bird2 extends Animal{
    constructor(name, color) {
        super(name, color);
        this.wingsCount = 2;
        this.canFly = 'can fly'
    }
    flyAway() {
        console.log(`${this.name} ${this.canFly}. Flies away on ${this.wingsCount} wings`);
    }
}

module.exports = Bird2;