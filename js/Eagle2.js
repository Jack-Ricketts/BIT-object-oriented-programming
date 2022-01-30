const Bird2 = require('./Bird2.js');

class Eagle2 extends Bird2{
    constructor(name, color) {
        super(name, color);
        this.breed = 'erelis';
        this.sound = 'freedom';
    }
}

module.exports = Eagle2;