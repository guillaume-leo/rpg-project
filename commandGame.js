function disableRed(){
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

    hitP2.setAttribute ("onClick", "p2.hit(p1)");
    healP2.setAttribute ("onClick", "p2.heal()");
    yieldP2.setAttribute ("onClick", "p2.yield()");
    
}

function disableBlue(){
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

    hitP1.setAttribute ("onClick", "p1.hit(p2)");
    healP1.setAttribute ("onClick", "p1.heal()");
    yieldP1.setAttribute ("onClick", "p1.yield()");
}


function disableAllButtons(){

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