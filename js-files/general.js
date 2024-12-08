function ChangePage(url){
    window.location = url
}

function LoadTemplate(idTemplate, idParent){
    main = document.getElementById(idParent);
    main.innerHTML = "";
    var template = document.getElementById(idTemplate);
    var clone = template.content.cloneNode(true);
    main.appendChild(clone);
}