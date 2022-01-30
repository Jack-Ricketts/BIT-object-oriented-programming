const Pet2 = require('./Pet2.js');

class Cat2 extends Pet2{
    constructor(name, color) {
        super(name, color);
        this.breed = 'kate';
        this.sound = 'meow'
    }
}

module.exports = Cat2;