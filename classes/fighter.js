const readlineSync = require("readline-sync");

class Fighter{
    constructor(hitPoints, DMG, speed, chances){
        this.hp = hitPoints
        this.dmg = DMG
        this.speed = speed
        this.chances = chances
    }

    dodgeChance(dodgeChance){
        console.log(dodgeChance.toFixed(2), '- dodgeChance')
    }

    attackChance(attackChance){
        console.log(attackChance.toFixed(2), '- attackChance')
    }
h
    blockChance(blockChance){     
        console.log(blockChance.toFixed(2), '- blockChance')
    }

}

module.exports = Fighter;