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
    //laver en variabel ved navn command som du kan bruge til at sende kommandoer til serveren
}

function ConsoleLogAdd(newline){
    log = document.getElementById("console-log");
    log.innerHTML += "<br>" + newline;
    //Skriver et input du giver (variablen newline) til consolen inde på hjemmesiden
}