class Pet {
    constructor(name, color) {
        this.type = 'pet';
        this.name = name;
        this.legs = 4;
        this.color = color ?? 'pilkas';
    }
    
    voice() {
        console.log(`Hi. I am ${this.type} ${this.name}, my color is ${this.color} and I have ${this.legs} legs`);
    }
}

module.exports = Pet;