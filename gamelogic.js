// SELECTION DES JOUEURS ET LANCEMENT DE LA PARTIE
//---------------------------------------------------

let player = 1;
function validate() {



    var name = document.getElementById("validationPlayer");
    var avatar = 0
    var items = document.getElementById("validationItems");
    var races = document.getElementById("validationRaces");

    var radios = document.getElementsByName('customRadio');

    for (var i = 0, length = radios.length; i < length; i++) {
      if (radios[i].checked) {
        avatar = radios[i].value;
        break;
      }
    }



    if (name.length < 1 || avatar.value < 1 || items.value < 1 || races.value < 1) {
        alert("Merci de remplir tout les champs avant de valider");
    } else {
        if (player == 1) {
            p1 = new Player(
                name.value, 
                ["", "Humans", "Orcs", "Elves", "Vampires"][parseInt(races.value)], 
                ["", "Boots", "Staff", "Sword", "Bow"][parseInt(items.value)],
                avatar);

            players[0] = p1;

            document.getElementById('inscription').innerHTML = "Et maintenant, c'est au tour de ton adversaire";
            name.value = "";
            avatar.value = 0;
            items.value = 0;
            races.value = 0;

        } else {
            p2 = new Player(
                name.value, 
                ["", "Humans", "Orcs", "Elves", "Vampires"][parseInt(races.value)],
                ["", "Boots", "Staff", "Sword", "Bow"][parseInt(items.value)],
                avatar);

            players[1] = p2;
            window.location.href = "game.html";
        }
        player++;
    }
    console.log(players);

}

