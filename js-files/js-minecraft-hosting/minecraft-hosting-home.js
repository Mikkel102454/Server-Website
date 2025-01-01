function MakeNewServer() {
    console.log("MakeNewServer() called");
    // Funktionen bliver kørt når du trykker på ting tangen ykyk
}

function LoadServerTemplate(serverName, serverIcon, serverMaxPlayers, serverOnlinePlayers, serverMOTD, serverMinecraftVersion) {
    main = document.getElementById("server-list");
    var template = document.getElementById("server-template");
    template.content.getElementById("server-name").innerHTML = serverName;
    template.content.getElementById("server-icon").src = serverIcon;
    template.content.getElementById("server-players").innerHTML =serverOnlinePlayers+"/"+serverMaxPlayers;
    template.content.getElementById("server-motd").innerHTML = serverMOTD;
    template.content.getElementById("server-minecraft-version").innerHTML = serverMinecraftVersion;
    var clone = template.content.cloneNode(true);
    main.insertBefore(clone, main.firstChild);
}