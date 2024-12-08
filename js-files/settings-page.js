var current;
var secondaryColor;
var main
onload = function(){
    current = document.getElementById("appearance-li");
    current.classList.add("selected");
    secondaryColor = getComputedStyle(document.querySelector('.dark-mode')).getPropertyValue('--secondary-color');
    current.style.backgroundColor = (secondaryColor);
    LoadTemplate("appearance-settings-template", "main");
    
}

function LiSettingsButton(id, idTemplate, idParent){
    current.classList.remove("selected");
    current.style.backgroundColor = ("transparent");
    li = document.getElementById(id);
    li.style.backgroundColor = (secondaryColor);
    li.classList.add("selected");
    current = li;

}

function LoadTemplate(idTemplate, idParent){
    main = document.getElementById(idParent);
    var template = document.getElementById(idTemplate);
    var clone = template.content.cloneNode(true);
    main.appendChild(clone);
}