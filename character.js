class Player{
    constructor(name, race, item, life, dodge, healing, dammage, doubleAttack, dammageTaken, deflect, lifeSteal){
        this.name = name;
        this.race = race;
        this.item = item;
        this.life = 100;
        this.dodge = 10; // 10% de chances par défaut
        this.healing = 10;
        this.dammage = 10;
        this.doubleAttack = 10; // 10% de chances par défaut
        this.dammageTaken = 1; 
        this.deflect = 0;
        this.lifeSteal= 0;

        // item : 
        switch (item){
            case "Boots":
                this.dodge += this.dodge / 100 * 30;
                break;
            case "Staff":
                this.healing += this.healing / 100 * 20;
                break;
            case "Sword":
                this.dammage += this.dammage / 100 * 40;
            case "Bow":
                this.doubleAttack += this.doubleAttack / 100 * 30;
        }
        // race :
        switch (race){
            case "Humans":
                this.dammageTaken = 0.8; // 20% less than 1.0
                break;
            case "Orcs":
                this.life += 40;
                break;
            case "Elves":
                this.deflect = 30;
                break;
            case "Vampires":
                this.lifeSteal = 10; // %!!!
        }
    }


    // une method qui va evaluer la chance qu'un dodge se produise
    getDodge(p){
        var result = 1
        if ((Math.random()*100) < this.dodge){
            result --; // le dodge se produit
            console.log(p +" a esquivé l'attaque!");
        }
        return result;
    }

    attackSend(p){
        p.life -= this.dammage * p.dammageTaken * p.getDodge(p.name);
    }
}


let p1 = new Player("Guillaume", "Orcs", "Sword");
let p2 = new Player("Christian", "Humans", "Boots");

p1.attackSend(p2);


console.log(p2);
