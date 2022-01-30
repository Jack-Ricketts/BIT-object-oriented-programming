const Cat = require('./js/Cat.js');
const Dog = require('./js/Dog.js');
const Hamster = require('./js/Hamster.js');

const rainis = new Cat ('Rainis');
const garfildas = new Cat ('Garfildas', 'oranzinis');
const druska = new Cat ('Druska', 'balta');

const rex = new Dog ('Rex');
const brisius = new Dog ('Brisius', 'rudas');
const lese = new Dog ('Lese', 'balta');

const chamekas = new Hamster ('Chamekas', 'geltonas')

rainis.voice();
garfildas.voice();
druska.voice();

rex.voice();
brisius.voice();
lese.voice();

chamekas.voice();

console.log('-------------------------------');

const Dog2 = require('./js/Dog2.js');
const Cat2 = require('./js/Cat2.js');
const Hamster2 = require('./js/Hamster2.js');
const Chicken2 = require('./js/Chicken2.js');
const Parrot2 = require('./js/Parrot2.js');
const Eagle2 = require('./js/Eagle2.js');
const Dragonfly2 = require('./js/Dragonfly2.js');
const Goldfish2 = require('./js/Goldfish2.js');
const Nemo2 = require('./js/Nemo2.js');

const dogMeskis = new Dog2 ('Meskis', 'baltas');
const catGizmo = new Cat2 ('Gizmo', 'marga');
const hamsterKeksas = new Hamster2 ('Keksas');
const chickenKentas = new Chicken2 ('Kentas', 'margas');
const parrotJojo = new Parrot2 ('Jojo', 'marga');
const eagleAmerika = new Eagle2 ('Amerika', 'rudai baltas');
const dragonflyDarius = new Dragonfly2 ('Darius', 'melynas');
const fishMailius = new Goldfish2 ('Mailius', 'blizgantis');
const nemoStyvenas = new Nemo2 ('Styvenas', 'oranzine');

dogMeskis.voice();
dogMeskis.introduce();

catGizmo.voice();
catGizmo.introduce();

hamsterKeksas.voice();
hamsterKeksas.introduce();

chickenKentas.voice();
chickenKentas.introduce();
chickenKentas.flyAway();

parrotJojo.voice();
parrotJojo.introduce();
parrotJojo.flyAway();

eagleAmerika.voice();
eagleAmerika.introduce();
eagleAmerika.flyAway();

dragonflyDarius.voice();
dragonflyDarius.introduce();
if(dragonflyDarius.impostor === true){
    dragonflyDarius.wingsCount = 4;
    dragonflyDarius.flyAway();
}

fishMailius.voice();
fishMailius.introduce();
fishMailius.makeWish();
fishMailius.swimAway();

nemoStyvenas.voice();
nemoStyvenas.introduce();
nemoStyvenas.swimAway();