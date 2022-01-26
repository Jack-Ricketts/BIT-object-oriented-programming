const Pet = require('./Pet.js');

class Hamster extends Pet{
    constructor(name, color){
        super(name, color);
        this.type = 'hamster'
    }
    voice() {
        console.log(`Hi. I am ${this.name} and all I do is 🐹.`);
    }
}

module.exports = Hamster;