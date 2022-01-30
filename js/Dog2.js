const Pet2 = require('./Pet2.js');

class Dog2 extends Pet2{
    constructor(name, color) {
        super(name, color);
        this.breed = 'suo';
        this.sound = 'woof'
    }
}

module.exports = Dog2;