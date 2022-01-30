const Pet2 = require('./Pet2.js');

class Hamster2 extends Pet2{
    constructor(name, color) {
        super(name, color);
        this.breed = 'chamekas';
        this.sound = 'krimst'
        this.canEatTillDeath = true;
    }
}

module.exports = Hamster2;