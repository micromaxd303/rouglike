const Fighter = require('./classes/fighter.js');
const Ranger = require('./classes/ranger.js');


const Squad = new Ranger(150, 12, 30, 0.2)

Squad.dodgeChance(0.8)
Squad.attackChance(0.5)
Squad.blockChance()
