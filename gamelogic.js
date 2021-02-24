// SELECTION DES JOUEURS ET LANCEMENT DE LA PARTIE
//---------------------------------------------------
let player = 1;
function validate() {
    
    var name = document.getElementById("validationPlayer");
    var avatar = document.getElementById("validationAvatar");
    var items = document.getElementById("validationItems");
    var races = document.getElementById("validationRaces");

    if (name.length < 1 || avatar.value < 1 || items.value < 1 || races.value < 1) {
        alert("Merci de remplir tout les champs avant de valider");
    } else {
        if (player == 1) {
            p1 = new Player(
                name.value, 
                ["", "Humans", "Orcs", "Elves", "Vampires"][parseInt(races.value)], 
                ["", "Boots", "Staff", "Sword", "Bow"][parseInt(items.value)]);

            players[0] = p1;

            document.getElementById('inscription').innerHTML = "Inscription Player 2";
            name.value = "";
            avatar.value = 0;
            items.value = 0;
            races.value = 0;

        } else {
            p2 = new Player(
                name.value, 
                ["", "Humans", "Orcs", "Elves", "Vampires"][parseInt(races.value)],
                ["", "Boots", "Staff", "Sword", "Bow"][parseInt(items.value)]);

            players[1] = p2;
            // FAIRE TOUT DISPARAITRE OU APPARAITRE ET LANCER LE JEUX
        }
        player++;
    }
    console.log(players);
  //  window.location.href = "http://www.w3schools.com";
}

