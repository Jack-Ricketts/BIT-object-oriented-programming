const Animal = require('./Animal.js');

class Fish2 extends Animal{
    constructor(name, color) {
        super(name, color);
        this.canSwim = 'can swim';
    }

    swimAway() {
        console.log(`${this.name} ${this.canSwim}, todel dingsta.`);
    }
}

module.exports = Fish2;