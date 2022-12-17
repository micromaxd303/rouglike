const Fighter = require('./classes/fighter.js');

const Ranger = require('./classes/ranger.js');
const Warrior = require('./classes/warrior.js');
const Spearman = require('./classes/spearman.js');


const ranger = new Ranger(150, 12, 30, 0.2)
const warrior = new Warrior(250, 10, 10, 0.4)

ranger.dodge(1)
ranger.attack(1)
ranger.block(1)
warrior.dodge(1)
warrior.attack(1)
warrior.block(1)
