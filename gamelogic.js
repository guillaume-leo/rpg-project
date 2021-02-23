function init(){
   var player = {
       name: "",
       race: "",
       item: "",
       player: 1,
       avatar: ""
   };
   player.name = document.getElementById('typePlayer1').value;
   player.race = ["Humans", "Orcs","Elves","Vampires"][parseInt(document.getElementById('races').value)];
   player.item = ["Boots","Staff","Sword","Bow"][parseInt(document.getElementById('items').value)];
   player.avatar = ["Img01","Img02","Img03"][parseInt(document.getElementById('avatar').value)];
   if (player.player == "1"){
    p1 = new Player(player.name, player.race, player.item);
    players[0] = p1;
   }else{
    p2 = new Player(player.name, player.race, player.item);
    players[1] = p2;
    }
console.log(players);
}

