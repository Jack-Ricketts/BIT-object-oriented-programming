class Animal {
    constructor(name, color) {
        this.name = name;
        this.color = color ?? 'juodas';
        this.sound = 'sound';
    }
    
    voice() {
        console.log(`${this.name} ${this.breed} pasake ${this.sound}.`);
    }

    introduce() {
        console.log(`Hi. I am ${this.name} ${this.color} ${this.breed}.`);
    }
}

module.exports = Animal;