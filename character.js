class Player{
    constructor(name, race, item, avatar){
        this.name = name;
        this.race = race;
        this.item = item;
        this.avatar = avatar;
        this.life = 100;
        this.dodge = 10; // 10% de chances par défaut
        this.healing = 10;
        this.dammage = 10;
        this.doubleAttack = 10; // 10% de chances par défaut
        this.dammageTaken = 1; 
        this.deflect = 5;
        this.lifeSteal= 0;
        // item : 
        switch (this.item){
            case "Boots":
                this.dodge += this.dodge / 100 * 30;
                break;
            case "Staff":
                this.healing += this.healing / 100 * 20;
                break;
            case "Sword":
                this.dammage += this.dammage / 100 * 40;
                break;
            case "Bow":
                this.doubleAttack += this.doubleAttack / 100 * 30;
                break;
        }
        // race :
        switch (this.race){
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
                this.lifeSteal += 10; // %!!!
                break;
        }
    }

    // une method qui va evaluer la chance qu'une doubleAttaque se produise
    getDoubleAttack(){
        var result = 1;
        if ((Math.random()*100) < this.doubleAttack){
            console.log(this.name + " double attaque!");
            result ++;    // double attaque se produit
        }
        return result;
    }


    // une method qui va evaluer la chance qu'un dodge se produise
    getDodge(p){
        var result = 1;
        if ((Math.random()*100) < p.dodge){
            result --; // le dodge se produit
            console.log(p.name +" a esquivé l'attaque!");
        }
        return result;
    }

    // une method qui va evaluer la chance qu'un deflect se produise
    getDeflect(p){
        var result = 1;
        if ((Math.random()*100) < p.deflect){
            result --; // le dodge se produit
            console.log(p.name +" deflect!");
        }
        return result;
    }
    
    hit(p){
        p.life -= (this.dammage + (Math.random() * 6)) * p.dammageTaken * p.getDodge(p.name) * this.getDoubleAttack();
    }

    heal(){
        this.life += this.healing;
    }

    lifeSteal(p){
        if (this.race == "Vampires"){
            let lifeSteal = (p.life / 100 * 10);
            p.life -= lifeSteal;
            this.life += lifeSteal;
            console.log(this.name + " has stolen " + lifeSteal + " of life of " + p.name);
        }
    }
    
}

