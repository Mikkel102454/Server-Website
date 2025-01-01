var current;
var secondaryColor;
var main
window.addEventListener("load", function () {
    current = document.getElementById("status-li");
    current.classList.add("selected");
    try{
        secondaryColor = getComputedStyle(document.querySelector('.dark-mode')).getPropertyValue('--secondary-color');
    }
    catch(e){
        secondaryColor = getComputedStyle(document.querySelector('.light-mode')).getPropertyValue('--secondary-color');
    }
    current.style.backgroundColor = (secondaryColor);
    LoadTemplate("status-tab-template", "main");
    
})

function LiSettingsButton(id, idTemplate, idParent){
    current.classList.remove("selected");
    current.style.backgroundColor = ("transparent");
    li = document.getElementById(id);
    li.style.backgroundColor = (secondaryColor);
    li.classList.add("selected");
    current = li;
    LoadTemplate(idTemplate, idParent);

}

function ConsoleInput(){
    input = document.getElementById("console-input");
    command = input.value
    input.value = "";
    CommandSend(command);
    //laver en variabel ved navn command som er det input spilleren giver og sender til til CommandSend funktionen
}

function CommandSend(command){
    console.log("Send:" + command + " to Console")
    //Her kommer alle de commands der skal sendes ind til consolen fra diverse steder, inklusiv user input, så ikke alle commands kommer til at være gyldige

}

function OpPlayer(event){
    player = event.target.parentNode.parentNode.querySelector(".player-name").innerHTML;
    CommandSend("op " + player);
    //Sender command til CommandSend funktionen om at op en bestemt spiller
}

function DeopPlayer(event){
    player = event.target.parentNode.parentNode.querySelector(".player-name").innerHTML;
    CommandSend("deop " + player);
    //Sender command til CommandSend funktionen om at deop en bestemt spiller
}

function BanPlayer(event){
    player = event.target.parentNode.parentNode.querySelector(".player-name").innerHTML;
    CommandSend("ban " + player);
    //Sender command til CommandSend funktionen om at banne en bestemt spiller
}

function ConsoleLogAdd(newline){
    log = document.getElementById("console-log");
    log.innerHTML += "<br>" + newline;
    //Skriver et input du giver (variablen newline) til consolen inde på hjemmesiden
}