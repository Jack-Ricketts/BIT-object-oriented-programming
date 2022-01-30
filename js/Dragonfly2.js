const Bird2 = require('./Bird2.js');

class Dragonfly2 extends Bird2{
    constructor(name, color) {
        super(name, color);
        this.breed = 'laumzirgis';
        this.sound = 'bzzz';
        this.impostor = true;
    }
}

module.exports = Dragonfly2;