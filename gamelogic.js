// usefull functions

function myScale(value,min1,max1,min2,max2){
    return min2 + (value - min1) * (max2 - min2) / (max1 - min1);
}




// SELECTION DES JOUEURS ET LANCEMENT DE LA PARTIE 
//---------------------------------------------------

var players =[];
let player = 1;

// premièrement quand l'utilisateur clique sur valider, ça déclenche la fonction suivante:

function validate() {

// on récupère toutes les valeurs qui nous interessent, name avatar, item et races

    var name = document.getElementById("validationPlayer");
    var avatar = 0
    var items = document.getElementById("validationItems");
    var races = document.getElementById("validationRaces");

    var radios = document.getElementsByName('customRadio');

    for (var i = 0, i = radios.length; i < length; i++) {
      if (radios[i].checked) {
        avatar = radios[i].value;
        break;
      }
    }

// on s'assure que l'utilisateur n'a pas oublié de remplir un champ
    if (name.value=="" || avatar.value < 1 || items.value < 1 || races.value < 1) {
        alert("Merci de remplir tout les champs avant de valider");
    } else { // l'utilisateur a rempli tout les champs et a apuyé sur "valider"
        if (player == 1) { // donc on crée le player 1 
            p1 = new Player(
                name.value, 
                ["", "Humans", "Orcs", "Elves", "Vampires"][parseInt(races.value)], 
                ["", "Boots", "Staff", "Sword", "Bow"][parseInt(items.value)],
                avatar);

            players[0] = p1;
                // puis on réinitialise les champs
            document.getElementById('inscription').innerHTML = "Et maintenant, c'est au tour de ton adversaire";
            name.value = "";
            avatar.value = 0;
            items.value = 0;
            races.value = 0;
            player++;

        } else { // on crée le player 2
            p2 = new Player(
                name.value, 
                ["", "Humans", "Orcs", "Elves", "Vampires"][parseInt(races.value)],
                ["", "Boots", "Staff", "Sword", "Bow"][parseInt(items.value)],
                avatar);

            players[1] = p2;
                // puis on supprime tout ce qu'il y a sur la page et on fait apparraitre la page game.html dans une iframe
            document.getElementsByClassName('container')[0].remove();
            var iframe = document.createElement('iframe');
            iframe.style.display = "block";
            iframe.src = "game.html";
            document.body.appendChild(iframe);
            gameStart();

        }
        
    }
}

// ce graph est utilisé pour afficher les stats au moment de choisir les propriétées du personnage

// ------------------------------------------ GRAPH


function createGraph(){

var firstCanvas = document.createElement("canvas");
var parent = document.getElementById("graphic");
parent.innerHTML = '';
parent.appendChild(firstCanvas);
    



var items = document.getElementById("validationItems");
var races = document.getElementById("validationRaces");
// create an instance of Player just to generate data for the chart
var playerStat = new Player(
    "chart", 
    ["Humans", "Humans", "Orcs", "Elves", "Vampires"][parseInt(races.value)],
    ["Boots", "Boots", "Staff", "Sword", "Bow"][parseInt(items.value)],
    0);

    // console.log(playerStat);

    //------------------------------------------ Chart creation
var myChart = new Chart(firstCanvas, {
    type: 'radar',
    data: {
        labels: ['life', 'dodge', 'healing', 'dammage', 'doubleAttack', 'dammageTaken','deflect', 'lifeSteal'],
        datasets: [{
            label: '# of Votes',
            data: [
                myScale(playerStat.life,0,140,1,8),
                myScale(playerStat.dodge,8,13,1,8),
                myScale(playerStat.healing,8,15,1,8),
                myScale(playerStat.dammage,8,14,1,8),
                myScale(playerStat.doubleAttack,8,13,1,8),
                myScale(playerStat.dammageTaken,0.5,1,1,8),
                myScale(playerStat.deflect,10,30,1,8),
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
            display: false,
            labels: {
                defaultFontSize: 40,
                fontColor: "black"
            }
        },
        scale: {
            ticks: {
               display: false,
               maxTicksLimit: 10,
               beginAtZero: true,
               max: 8
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

//---------------------------FIN DU GRAPHE


// ------------------------- GAMESTART FUNCTION

// cette fonction est appellée après la creation des joueurs (ligne 70)

function gameStart(){
    alert("le jeu commence maintenant!");
    // console.log(p1);
}


document.getElementById('avatarP1').src="images/Froddy.png";
