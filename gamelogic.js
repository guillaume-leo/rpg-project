// document.getElementsByClassName('container')[0].remove();
var iframe = document.createElement('iframe');
iframe.style.display = "block";
iframe.style.visibility = "hidden";
iframe.setAttribute('id', 'iframeGame');
iframe.src = "game.html";
document.body.appendChild(iframe);


// usefull functions

function myScale(value,min1,max1,min2,max2){
    return min2 + (value - min1) * (max2 - min2) / (max1 - min1);
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

async function time() {
    await sleep(1000);
}





  
function disableRed(){

    // select iframe
var iframe = document.getElementById("iframeGame");
// select buttons
var hitP1 = iframe.contentWindow.document.getElementById('hitP1');
var hitP2 = iframe.contentWindow.document.getElementById('hitP2');
var healP1 = iframe.contentWindow.document.getElementById('healP1');
var healP2 = iframe.contentWindow.document.getElementById('healP2');
var yieldP1 = iframe.contentWindow.document.getElementById('yieldP1');
var yieldP2 = iframe.contentWindow.document.getElementById('yieldP2');

    hitP1.classList.remove("buttonRed");
    healP1.classList.remove("buttonRed");
    yieldP1.classList.remove("buttonRed");

    hitP2.classList.add("buttonBlue");
    healP2.classList.add("buttonBlue");
    yieldP2.classList.add("buttonBlue");

    hitP2.classList.remove("buttonDisable");
    healP2.classList.remove("buttonDisable");
    yieldP2.classList.remove("buttonDisable");

    hitP1.classList.add("buttonDisable");
    healP1.classList.add("buttonDisable");
    yieldP1.classList.add("buttonDisable");

    hitP1.setAttribute ("onClick", "");
    healP1.setAttribute ("onClick", "");
    yieldP1.setAttribute ("onClick", "");

    hitP2.onclick = function(){p2.hit(p1)};
    healP2.onclick = function(){p2.heal()};
    yieldP2.setAttribute ("onClick", "p2.yield()");
    
}

function disableBlue(){

// select iframe
var iframe = document.getElementById("iframeGame");
// select buttons
var hitP1 = iframe.contentWindow.document.getElementById('hitP1');
var hitP2 = iframe.contentWindow.document.getElementById('hitP2');
var healP1 = iframe.contentWindow.document.getElementById('healP1');
var healP2 = iframe.contentWindow.document.getElementById('healP2');
var yieldP1 = iframe.contentWindow.document.getElementById('yieldP1');
var yieldP2 = iframe.contentWindow.document.getElementById('yieldP2');

    hitP1.classList.add("buttonRed");
    healP1.classList.add("buttonRed");
    yieldP1.classList.add("buttonRed");

    hitP2.classList.remove("buttonBlue");
    healP2.classList.remove("buttonBlue");
    yieldP2.classList.remove("buttonBlue");

    hitP1.classList.remove("buttonDisable");
    healP1.classList.remove("buttonDisable");
    yieldP1.classList.remove("buttonDisable");

    hitP2.classList.add("buttonDisable");
    healP2.classList.add("buttonDisable");
    yieldP2.classList.add("buttonDisable");

    hitP2.setAttribute ("onClick", "");
    healP2.setAttribute ("onClick", "");
    yieldP2.setAttribute ("onClick", "");

    hitP1.onclick = function(){ p1.hit(p2) };
    healP1.onclick = function() {p1.heal();};
    yieldP1.setAttribute ("onClick", "p1.yield()");
}




function disableAllButtons(){


    // select iframe
var iframe = document.getElementById("iframeGame");
// select buttons
var hitP1 = iframe.contentWindow.document.getElementById('hitP1');
var hitP2 = iframe.contentWindow.document.getElementById('hitP2');
var healP1 = iframe.contentWindow.document.getElementById('healP1');
var healP2 = iframe.contentWindow.document.getElementById('healP2');
var yieldP1 = iframe.contentWindow.document.getElementById('yieldP1');
var yieldP2 = iframe.contentWindow.document.getElementById('yieldP2');
var replay = iframe.contentWindow.document.getElementById('replay');


    hitP2.classList.remove("buttonBlue"); 
    healP2.classList.remove("buttonBlue");
    yieldP2.classList.remove("buttonBlue");

    hitP2.classList.add("buttonDisable");
    healP2.classList.add("buttonDisable");
    yieldP2.classList.add("buttonDisable");

    hitP1.classList.remove("buttonRed");
    healP1.classList.remove("buttonRed");
    yieldP1.classList.remove("buttonRed");

    hitP1.classList.add("buttonDisable");
    healP1.classList.add("buttonDisable");
    yieldP1.classList.add("buttonDisable");

    hitP2.onclick = "";
    healP2.onclick = "";
    yieldP2.onclick="";

    hitP1.onclick = "";
    healP1.onclick = "";
    yieldP1.onclick="";


    replay.classList.remove('buttonGreen');
    replay.classList.add('buttonDisable');
    replay.onclick="";

}



// SELECTION DES JOUEURS ET LANCEMENT DE LA PARTIE 
//---------------------------------------------------

var players =[];
let player = 1;

// premièrement quand l'utilisateur clique sur valider, ça déclenche la fonction suivante:

function validate() {

// on récupère toutes les valeurs qui nous interessent, name, avatar, item et races

    var name = document.getElementById("validationPlayer");
    var avatar = 0;
    var items = document.getElementById("validationItems");
    var races = document.getElementById("validationRaces");

    var radios = document.getElementsByName('customRadio');
    
    for (var i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
          console.log(i,radios[i].checked)
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
            // var iframe = document.createElement('iframe');
            // iframe.style.display = "block";
            // iframe.src = "game.html";
            // document.body.prepend(iframe);
            iframe.style.visibility = "visible";
            gameInit();

        }
        
    }
}

// ce graph est utilisé pour afficher les stats au moment de choisir les propriétées du personnage

// ------------------------------------------ GRAPH


var myChart = []

function createGraph(){

var firstCanvas = document.createElement("canvas");
firstCanvas.style.height = "100px";
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



    //------------------------------------------ Chart creation
Chart.defaults.global.defaultFontColor = 'white';
var myChart = new Chart(firstCanvas, {
    type: 'radar',
    data: {
        labels: ['life', 'dodge', 'healing', 'dammage', 'doubleAttack', 'dammageTaken','deflect', 'lifeSteal'],
        datasets: [{
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
            borderColor: 'rgba(0, 0, 255 ,1.0)',

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
                color: ['lightGray', 'lightGray', 'lightGray','lightGray','lightGray','lightGray','lightGray','lightGray','green']
              }
         },
         elements: {
            point:{
                radius: 0
            }
        }}
});




changeFontSize();



}
function changeFontSize() {
    for (var x in myChart) {
       // set/change the font-size
       myChart[x].options.scales.xAxes[0].ticks.minor.fontSize = 50;
       myChart[x].options.scales.yAxes[0].ticks.minor.fontSize = 50;
 
       // set proper spacing for resized font
       myChart[x].options.scales.xAxes[0].ticks.fontSize = 50;
       myChart[x].options.scales.yAxes[0].ticks.fontSize = 50;
 
       // update chart to apply new font-size
       myChart[x].update();
    }
 }

//---------------------------FIN DU GRAPHE


// ------------------------- GAME INIT FUNCTION

// cette fonction est appellée après la creation des joueurs (ligne 70)

// QUELQUES TESTS:

// p1 = new Player("Guigui", "Orcs","Sword","1");
// p2 = new Player("Janus", "Human","Bow","3");

// console.log(p1);
// console.log(p2);
// p1.hit(p2);

// console.log(p2.life);



// gameInit();

var turn = 0;





async function gameInit(){

    var nameP1 = iframe.contentWindow.document.getElementById('nameP1');
    var nameP2 = iframe.contentWindow.document.getElementById('nameP2');
    var avatarP1 = iframe.contentWindow.document.getElementById('avatarP1');
    var avatarP2 = iframe.contentWindow.document.getElementById('avatarP2');
    var lifeP1 = iframe.contentWindow.document.getElementById('lifeP1');
    var lifeP2 = iframe.contentWindow.document.getElementById('lifeP2');
    var infoP1 = iframe.contentWindow.document.getElementById('infoP1');
    var infoP2 = iframe.contentWindow.document.getElementById('infoP2');
    var journalLog = iframe.contentWindow.document.getElementById('journalLog');

    disableAllButtons();
    // d'abord on actualise les infos des players
    nameP1.innerHTML = p1.name;
    nameP2.innerHTML = p2.name;
    avatarP1.src = p1.avatar;
    avatarP2.src = p2.avatar;
    lifeP1.style.width = p1.life + "%";
    lifeP1.innerHTML = p1.life + "%";
    lifeP2.style.width = p2.life + "%";
    lifeP2.innerHTML = p2.life + "%";
    infoP1.innerHTML = `race : ${p1.race} <br> item : ${p1.item}`;
    infoP2.innerHTML = `race : ${p2.race} <br> item : ${p2.item}`;
    // petite animation sans interet 
    for (var i=0;i<20;i++){
        switch (i%3){
            case 0:
                journalLog.innerHTML = "Veuillez patienter.   <br> nous allons choisir qui va commencer";
                await sleep(150);
            break;
            case 1:
                journalLog.innerHTML = "Veuillez patienter..  <br> nous allons choisir qui va commencer";
                await sleep(150);
            break;
            case 2:
                journalLog.innerHTML = "Veuillez patienter... <br> nous allons choisir qui va commencer";
                await sleep(150);
            break;    
        }
    }
    // on calcule qui sait qui commence
    turn = Math.round(Math.random()* 100)%2;
    if (turn == 0){
        journalLog.innerHTML = `C'est au tour de ${p1.name}`;
        disableBlue();
    }else{
        journalLog.innerHTML = `C'est au tour de ${p2.name}`;
        disableRed();
    }



}
