const Fighter = require("./fighter");

class Ranger extends Fighter{
    dodgeChance(chance){
        super.dodge(chance)
    }
    attackChance(chance){
        super.attack(chance)
    }
    blockChance(){
        super.block()
    }
}

module.exports = Ranger;