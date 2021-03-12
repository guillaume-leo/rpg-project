function getAllParams(){
    var nameP1 = iframe.contentWindow.document.getElementById('nameP1');
    var nameP2 = iframe.contentWindow.document.getElementById('nameP2');
    var avatarP1 = iframe.contentWindow.document.getElementById('avatarP1');
    var avatarP2 = iframe.contentWindow.document.getElementById('avatarP2');
    var lifeP1 = iframe.contentWindow.document.getElementById('lifeP1');
    var lifeP2 = iframe.contentWindow.document.getElementById('lifeP2');
    var infoP1 = iframe.contentWindow.document.getElementById('infoP1');
    var infoP2 = iframe.contentWindow.document.getElementById('infoP2');
    var journalLog = iframe.contentWindow.document.getElementById('journalLog');
    var hitP1 = iframe.contentWindow.document.getElementById('hitP1');

}


function play(){
    var hitP1 = iframe.contentWindow.document.getElementById('hitP1');

    if (hitP1.className == "buttonRed") {
        disableRed();
    } else {
        disableBlue();
    };
}

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
            result ++;    // double attaque se produit
        var journalLog = iframe.contentWindow.document.getElementById('journalLog');

            journalLog.innerHTML=this.name + " double attaque!";
        }
        return result;
    }


    // une method qui va evaluer la chance qu'un dodge se produise
    getDodge(p){
        var result = 1;
        if ((Math.random()*100) < p.dodge){
            result --; // le dodge se produit
        var journalLog = iframe.contentWindow.document.getElementById('journalLog');
            journalLog.innerHTML=p.name +" a esquivé l'attaque!";
        }
        return result;
    }

    // une method qui va evaluer la chance qu'un deflect se produise
    getDeflect(p){
        var result = 1;
        if ((Math.random()*100) < p.deflect){
            result --; // le dodge se produit
            journalLog.innerHTML=p.name +" deflect!";
        }
        return result;
    }
    
    hit(p){

        var lifeP1 = iframe.contentWindow.document.getElementById('lifeP1');
        var lifeP2 = iframe.contentWindow.document.getElementById('lifeP2');
        var journalLog = iframe.contentWindow.document.getElementById('journalLog');
        var display1 = iframe.contentWindow.document.getElementById('display1');
        var display2 = iframe.contentWindow.document.getElementById('display2');
        var replay = iframe.contentWindow.document.getElementById('replay');
                

        var totalDammage = parseInt((this.dammage + ((Math.random() * 10)- 5)) * p.dammageTaken * this.getDodge(p) * this.getDoubleAttack());
        p.life -= totalDammage;
        lifeP1.style.width = Math.round(p1.life) + "%";
        lifeP1.innerHTML = Math.round(p1.life) + "%";
        lifeP2.style.width = Math.round(p2.life) + "%";
        lifeP2.innerHTML = Math.round(p2.life) + "%";
        play();
        time();
        journalLog.innerHTML = `${this.name} inflige ${totalDammage} points de vie à ${p.name}`;

        if (p1.life <= 0) {

            display2.innerHTML="";
            display2.classList.add("winnerP2");
            disableAllButtons();
            replay.classList.add("buttonGreen");
            replay.classList.remove("buttonDisable");
            replay.setAttribute ("onClick", `window.location = "index.html"`);
            journalLog.innerHTML= `<br>${p.name} a gagné le jeu, BRAVO !`;
        } else if (p2.life <= 0) {
            display1.innerHTML="";
            display1.classList.add("winnerP1");
            disableAllButtons();
            replay.classList.add("buttonGreen");
            replay.classList.remove("buttonDisable");
            replay.setAttribute ("onClick", `window.location = "index.html"`);
            journalLog.innerHTML= `${this.name} a gagné le jeu, BRAVO !`;
        }
    }

    heal(){
        
        var lifeP1 = iframe.contentWindow.document.getElementById('lifeP1');
        var lifeP2 = iframe.contentWindow.document.getElementById('lifeP2');
        var journalLog = iframe.contentWindow.document.getElementById('journalLog');



        this.life += this.healing + ((Math.random() * 10)- 5);
        lifeP1.style.width = Math.round(p1.life) + "%";
        lifeP1.innerHTML = Math.round(p1.life) + "%";
        lifeP2.style.width = Math.round(p2.life) + "%";
        lifeP2.innerHTML = Math.round(p2.life) + "%";
        play();
        journalLog.innerHTML= `${this.name} s'est ajouté de la vie.`;
    }

    lifeSteal(p){
        var lifeP1 = iframe.contentWindow.document.getElementById('lifeP1');
        var lifeP2 = iframe.contentWindow.document.getElementById('lifeP2');
        var journalLog = iframe.contentWindow.document.getElementById('journalLog');

        if (this.race == "Vampires"){
            let lifeSteal = (p.life / 100 * 10);
            p.life -= lifeSteal;
            this.life += lifeSteal;
            journalLog.innerHTML=this.name + " has stolen " + lifeSteal + " of life of " + p.name;
        }
    }
    yield(){
        var journalLog = iframe.contentWindow.document.getElementById('journalLog');
        journalLog.innerHTML=`${this.name} yield`;
        play();
    }

}



// QUELQUES TESTS:

// p1 = new Player("gui", "Orcs","Sword","1");
// p2 = new Player("Jan", "Elves","Bow","1");

// console.log(p1);
// console.log(p2);
// p1.hit(p2);

// console.log(p2.life);