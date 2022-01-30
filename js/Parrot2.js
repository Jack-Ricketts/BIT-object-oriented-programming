const Bird2 = require('./Bird2.js');

class Parrot2 extends Bird2{
    constructor(name, color) {
        super(name, color);
        this.breed = 'banguotoji papugele';
        this.sound = 'cypt';
    }
}

module.exports = Parrot2;