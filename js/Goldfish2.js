const Fish2 = require('./Fish2.js');

class Goldfish2 extends Fish2{
    constructor(name, color) {
        super(name, color);
        this.grantsWishes = 3
        this.breed = 'auksinis zuveliokas';
        this.sound = 'bul bul';
    }

    makeWish() {
        console.log(`${this.name} ispildo ${this.grantsWishes} norus.`);
    }
}

module.exports = Goldfish2;