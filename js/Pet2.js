const Animal = require('./Animal.js');

class Pet2 extends Animal{
    constructor(name, color) {
        super(name, color);
    }
}

module.exports = Pet2;