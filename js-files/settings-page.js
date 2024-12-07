var current;
var secondaryColor;

onload = function(){
    current = document.getElementById("appearance-li");
    current.classList.add("selected");
    secondaryColor = getComputedStyle(document.querySelector('.dark-mode')).getPropertyValue('--secondary-color');
    current.style.backgroundColor = (secondaryColor);
    
}

function LiSettingsButton(id){
    current.classList.remove("selected");
    current.style.backgroundColor = ("transparent");
    li = document.getElementById(id);
    li.style.backgroundColor = (secondaryColor);
    li.classList.add("selected");
    current = li;

}
