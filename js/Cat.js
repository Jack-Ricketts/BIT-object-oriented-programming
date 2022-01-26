const Pet = require('./Pet.js');

class Cat extends Pet {
    constructor(name, color) {
        super(name, color);
        this.type = 'cat';
    }
}

module.exports = Cat;