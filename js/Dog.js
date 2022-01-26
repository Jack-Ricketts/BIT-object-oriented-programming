const Pet = require('./Pet.js');

class Dog extends Pet{
    constructor(name, color) {
        super(name, color);
        this.type = 'dog';
    }
}

module.exports = Dog;