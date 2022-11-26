const readlineSync = require("readline-sync");

class Fighter{
    constructor(hitPoints, DMG, speed, chances){
        this.hp = hitPoints
        this.dmg = DMG
        this.speed = speed
        this.chances = chances
    }

    dodge(enemyAttackChance){
        let dodgeChance = 1 - (enemyAttackChance / (enemyAttackChance + (this.chances * this.speed / 8) ** 0.8))
        console.log(dodgeChance.toFixed(2))
    }

    attack(enemyDodgeChance){
        let attackChance = 1 - (enemyDodgeChance / (enemyDodgeChance + (this.chances * this.dmg / 2 ** 0.8)))
        console.log(attackChance.toFixed(2))
    }

    block(){
        let blockChance = (this.chances * (this.hp - this.speed * 4)) / 100
        console.log(blockChance)
    }

}

module.exports = Fighter;