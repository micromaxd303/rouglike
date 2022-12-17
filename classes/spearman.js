const Fighter = require("./fighter");

class Spearman extends Fighter{
    dodge(enemyAttackChance){
        let dodgeChance = 1 - (enemyAttackChance / (enemyAttackChance + (this.chances * this.speed / 8) ** 0.8))
        super.dodgeChance(dodgeChance)
    }
    attack(enemyDodgeChance){
        let attackChance = 1 - (enemyDodgeChance / (enemyDodgeChance + (this.chances * this.dmg / 12) ** 1.4))
        super.attackChance(attackChance)
    }
    block(enemyAttackChance){
        let blockChance = 1 - (enemyAttackChance / (enemyAttackChance + (this.chances * this.speed / 7) ** 2))
        super.blockChance(blockChance)
    }
}

module.exports = Spearman;