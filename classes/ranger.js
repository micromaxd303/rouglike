const Fighter = require("./fighter");

class Ranger extends Fighter{
    dodge(enemyAttackChance){
        let dodgeChance = 1 - (enemyAttackChance / (enemyAttackChance + (this.chances * this.speed / 10) ** 2))
        super.dodgeChance(dodgeChance)
    }
    attack(enemyDodgeChance){
        let attackChance = 1 - (enemyDodgeChance / (enemyDodgeChance + (this.chances * this.dmg / 12) ** 1.4))
        super.attackChance(attackChance)
    }
    block(enemyAttackChance){
        let blockChance = 1 - (enemyAttackChance / (enemyAttackChance + (this.chances * this.speed / 19) ** 2))
        super.blockChance(blockChance)
    }
}

module.exports = Ranger;