// usefull functions

function myScale(value,min1,max1,min2,max2){
    return min2 + (value - min1) * (max2 - min2) / (max1 - min1);
}




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


function createGraph(){

var firstCanvas = document.createElement("canvas");
var parent = document.getElementById("graphic");
parent.innerHTML = '';
parent.appendChild(firstCanvas);
    



var items = document.getElementById("validationItems");
var races = document.getElementById("validationRaces");
console.log(races.value);


var playerStat = new Player(
    "chart", 
    ["", "Humans", "Orcs", "Elves", "Vampires"][parseInt(races.value)],
    ["", "Boots", "Staff", "Sword", "Bow"][parseInt(items.value)],
    0);

    console.log(playerStat);



    //------------------------------------------
var myChart = new Chart(firstCanvas, {
    type: 'radar',
    data: {
        labels: ['life', 'dodge', 'healing', 'dammage', 'doubleAttack', 'dammageTaken','deflect', 'lifeSteal'],
        datasets: [{
            label: '# of Votes',
            data: [
                myScale(playerStat.life,0,140,1,8),
                myScale(playerStat.dodge,8,13,0,8),
                myScale(playerStat.healing,8,15,0,8),
                myScale(playerStat.dammage,8,14,0,8),
                myScale(playerStat.doubleAttack,8,13,0,8),
                myScale(playerStat.dammageTaken,0.5,1,0,8),
                myScale(playerStat.deflect,10,30,2,8),
                myScale(playerStat.lifeSteal,2,10,1,8)
            ],
            backgroundColor: [
                'rgba(0, 0, 255, 0.0)',
            ],
            borderColor: 'rgba(0, 0, 255 ,1.0)'
        }]
    },
    options: {
        legend: {
            display: false
        },
        scale: {
            ticks: {
               display: false,
               maxTicksLimit: 10,
               beginAtZero: true

            },
            gridLines: {
                color: ['grey', 'grey', 'grey','grey','grey','grey','grey','grey','green']
              }
         },
         elements: {
            point:{
                radius: 0
            }
        }}
});
}
createGraph();
//---------------------------FIN DU GRAPHE
