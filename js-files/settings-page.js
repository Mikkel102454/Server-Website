var current;
var secondaryColor;
var main
window.addEventListener("load", function () {
    current = document.getElementById("appearance-li");
    current.classList.add("selected");
    secondaryColor = getComputedStyle(document.querySelector('.dark-mode')).getPropertyValue('--secondary-color');
    current.style.backgroundColor = (secondaryColor);
    LoadTemplate("appearance-settings-template", "main");
    
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
