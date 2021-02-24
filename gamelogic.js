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


// ------------------------------------------ GRAPH

var firstCanvas = document.createElement("canvas");
var parent = document.getElementById("graphic");
parent.appendChild(firstCanvas);
    
var myChart = new Chart(firstCanvas, {
    type: 'radar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});


//---------------------------FIN DU GRAPHE
