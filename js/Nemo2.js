const Fish2 = require('./Fish2.js');

class Nemo2 extends Fish2{
    constructor(name, color) {
        super(name, color);
        this.breed = 'zuvis is filmuko';
        this.sound = 'sveikas';
    }
}

module.exports = Nemo2;