let player = 1;
function validate() {
    var name = document.getElementById("validationPlayer").value;
    var avatar = document.getElementById("validationAvatar").value;
    var items = document.getElementById("validationItem").value;
    var races = document.getElementById("validationRace").value;

    console.log(avatar);
    if (name.length < 1 || avatar < 1 || items < 1 || races < 1) {
        alert("Merci de remplir tout les champs abruti");
    } else {
        if (player == 1) {
            p1 = new Player(name, ["", "Humans", "Orcs", "Elves", "Vampires"][parseInt(document.getElementById('validationRace').value)], ["", "Boots", "Staff", "Sword", "Bow"][parseInt(document.getElementById('validationDefault03').value)]);
            players[0] = p1;
            document.getElementById('inscription').innerHTML = "Inscription Player 2";
            document.getElementById("validationPlayer").value = "";
            document.getElementById("validationAvatar").value = 0;
            document.getElementById("validationItem").value = 0;
            document.getElementById("validationRace").value = 0;

        } else {
            p2 = new Player(name, ["", "Humans", "Orcs", "Elves", "Vampires"][parseInt(document.getElementById('validationRace').value)], ["", "Boots", "Staff", "Sword", "Bow"][parseInt(document.getElementById('validationDefault03').value)]);
            players[1] = p2;
            // FAIRE TOUT DISPARAITRE OU APPARAITRE ET LANCER LE JEUX
        }
        player++;
    }
    console.log(players);
}