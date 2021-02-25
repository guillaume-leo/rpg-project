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
        // avatar:
        switch (this.avatar){
            case "1":
                this.avatar = "images/Bixby.png";
                break;
            case "2":
                this.avatar = "images/Froddy.png";
                break;
            case "3":
                this.avatar = "images/Grelote.png";
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
        p.life -= (this.dammage + ((Math.random() * 10)- 5)) * p.dammageTaken * this.getDodge(p) * this.getDoubleAttack();
        console.log(p.life);
        lifeP1.style.width = Math.round(p1.life) + "%";
        lifeP1.innerHTML = Math.round(p1.life) + "%";
        lifeP2.style.width = Math.round(p2.life) + "%";
        lifeP2.innerHTML = Math.round(p2.life) + "%";
    }

    heal(){
        this.life += this.healing + ((Math.random() * 10)- 5);
        lifeP1.style.width = Math.round(p1.life) + "%";
        lifeP1.innerHTML = Math.round(p1.life) + "%";
        lifeP2.style.width = Math.round(p2.life) + "%";
        lifeP2.innerHTML = Math.round(p2.life) + "%";
    }

    lifeSteal(p){
        if (this.race == "Vampires"){
            let lifeSteal = (p.life / 100 * 10);
            p.life -= lifeSteal;
            this.life += lifeSteal;
            console.log(this.name + " has stolen " + lifeSteal + " of life of " + p.name);
        }
    }
    yield(){
        console.log(`${this.name} yield`);
    }

}



// QUELQUES TESTS:

// p1 = new Player("gui", "Orcs","Sword","1");
// p2 = new Player("Jan", "Elves","Bow","1");

// console.log(p1);
// console.log(p2);
// p1.hit(p2);

// console.log(p2.life);