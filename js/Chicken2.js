const Bird2 = require('./Bird2.js');

class Chicken2 extends Bird2{
    constructor(name, color) {
        super(name, color);
        this.breed = 'gaidys';
        this.sound = 'kakarieku';
    }
}

module.exports = Chicken2;