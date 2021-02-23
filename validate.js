let player = 1;
function validate() {
    var name = document.getElementById("validationDefault01").value;
    var avatar = document.getElementById("validationDefault02").value;
    var items = document.getElementById("validationDefault03").value;
    var races = document.getElementById("validationDefault04").value;

    console.log(avatar);
    if (name.length < 1 || avatar < 1 || items < 1 || races < 1) {
        alert("Merci de remplir tout les champs abruti");
    } else {
        if (player == 1) {
            p1 = new Player(name, ["", "Humans", "Orcs", "Elves", "Vampires"][parseInt(document.getElementById('validationDefault04').value)], ["", "Boots", "Staff", "Sword", "Bow"][parseInt(document.getElementById('validationDefault03').value)]);
            players[0] = p1;
            document.getElementById('inscription').innerHTML = "Inscription Player 2";
            document.getElementById("validationDefault01").value = "";
            document.getElementById("validationDefault02").value = 0;
            document.getElementById("validationDefault03").value = 0;
            document.getElementById("validationDefault04").value = 0;

        } else {
            p2 = new Player(name, ["", "Humans", "Orcs", "Elves", "Vampires"][parseInt(document.getElementById('validationDefault04').value)], ["", "Boots", "Staff", "Sword", "Bow"][parseInt(document.getElementById('validationDefault03').value)]);
            players[1] = p2;
            // FAIRE TOUT DISPARAITRE OU APPARAITRE
        }
        player++;
    }
    console.log(players);
}