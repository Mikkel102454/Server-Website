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
    console.log('Send: "' + command + '" to Console')
    //Her kommer alle de commands der skal sendes ind til consolen fra diverse steder, inklusiv user input, så ikke alle commands kommer til at være gyldige

}

function OpPlayer(button){
    player = button.target.parentNode.parentNode.querySelector(".player-name").innerHTML;
    CommandSend("op " + player);
    //Sender command til CommandSend funktionen om at op en bestemt spiller
}

function DeopPlayer(button){
    player = button.target.parentNode.parentNode.querySelector(".player-name").innerHTML;
    CommandSend("deop " + player);
    //Sender command til CommandSend funktionen om at deop en bestemt spiller
}

function BanPlayer(button){
    player = button.target.parentNode.parentNode.querySelector(".player-name").innerHTML;
    CommandSend("ban " + player);
    try {
        LoadPlayerList()
    }
    catch(e){
        console.log("Player list not loaded")
    }
    //Sender command til CommandSend funktionen om at banne en bestemt spiller
}
function KickPlayer(button){
    player = button.target.parentNode.parentNode.querySelector(".player-name").innerHTML;
    CommandSend("kick " + player);
    try {
        LoadPlayerList()
    }
    catch(e){
        console.log("Player list not loaded")
    }
    //Sender command til CommandSend funktionen om at kicke en bestemt spiller
}

function UnWhitelistPlayer(button){
    player = button.target.parentNode.parentNode.querySelector(".player-name").innerHTML;
    CommandSend("whitelist remove " + player);
    LoadWhiteList()
    //Sender command til CommandSend funktionen om at fjerne whitelist fra en bestemt spiller
}

function WhitelistOn(){
    CommandSend("whitelist on");
}

function WhitelistOff(){
    CommandSend("whitelist off");
}
function WhitelistSpecificPlayer(){
    player = document.getElementById("whitelist-player-input").value;
    CommandSend("whitelist add " + player);
    LoadWhiteList()
}

function UnwhitelistSpecificPlayer(){
    player = document.getElementById("whitelist-player-input").value;
    CommandSend("whitelist add " + player);
    LoadWhiteList()
}




function ConsoleLogAdd(newline){    
    log = document.getElementById("console-log");
    log.innerHTML += "<br>" + newline;
    //Skriver et input du giver (variablen newline) til consolen inde på hjemmesiden
}

function LoadPlayerList(){
    var playerjson = JSON.stringify({
        "names": ["Dopelegend", "xinus_"]
    });
    //playerjson skal være et JSON objekt, du sender med online spillere
    inputbox = document.getElementById("searchbar");
    input = inputbox.value.toLowerCase();
    playerjson = JSON.parse(playerjson)
    const playerTemplate = document.getElementById("player-template");
    const playerlist = document.getElementById("player-list");
    const noPlayerTemplate = document.getElementById("no-player-template");
    playerlist.innerHTML = "";
    playerarray = playerjson.names;
    totalPlayers = document.getElementById("total-players")
    totalPlayers.innerHTML = "Total Players: " + playerarray.length;
    playerarray.forEach(player => {
        if(player.toLowerCase().includes(input.trim())){
            templateclone = playerTemplate.content.cloneNode(true);
            templateclone.querySelector(".player-name").innerHTML = player;
            templateclone.querySelector(".player-head").src = "https://minotar.net/helm/" + player + ".png"; 
            playerlist.appendChild(templateclone);
            foundplayer = true;
        }       
    })
    if(!foundplayer){
        templateclone = noPlayerTemplate.content.cloneNode(true);
        playerlist.appendChild(templateclone);
    }
    foundplayer = false;
}

function LoadWhiteList(){
    var playerwhitelistjson = JSON.stringify({
        "names": ["CraftyHunter", "EpicGamer", "EnderLord", "DiamondKing", "PixelMaster", "StealthNinja", "ShadowWalker",
  "DarkAssassin", "IronKnight", "FireDragon", "MegaWarlord", "StormBreaker", "GoldenMage", "LunarKnight", "GalaxyWarrior", "TitanCrusher", "SwiftArrow",
  "RedWolf", "RogueWarrior"]
    });
    //playerjson skal være et JSON objekt, du sender med whitelistede spillere
    inputbox = document.getElementById("whitelist-searchbar");
    input = inputbox.value.toLowerCase();
    playerwhitelistjson = JSON.parse(playerwhitelistjson)
    const playerTemplate = document.getElementById("player-whitelist-template");
    const playerlist = document.getElementById("player-list");
    const noPlayerTemplate = document.getElementById("no-player-template");
    playerlist.innerHTML = "";
    playerwhitelistarray = playerwhitelistjson.names;
    totalPlayers = document.getElementById("total-players")
    totalPlayers.innerHTML = "Total Whitelisted Players: " + playerwhitelistarray.length;
    playerwhitelistarray.forEach(player => {
        if(player.toLowerCase().includes(input.trim())){
            templateclone = playerTemplate.content.cloneNode(true);
            templateclone.querySelector(".player-name").innerHTML = player;
            templateclone.querySelector(".player-head").src = "https://minotar.net/helm/" + player + ".png"; 
            playerlist.appendChild(templateclone);
            foundplayer = true;
        }       
    })
    if(!foundplayer){
        templateclone = noPlayerTemplate.content.cloneNode(true);
        playerlist.appendChild(templateclone);
    }
    foundplayer = false;
}
