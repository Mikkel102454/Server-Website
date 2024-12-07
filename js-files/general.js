import jwtDecode from "jwt-decode";

function ChangePage(url){
    window.location = url
}

function GetEmail(){
    token = this.sessionStorage.getItem('token');
    if(token != null){return null;}
    decoded = jwtDecode(token);
    return decoded.email
}
function GetUsername(){
    token = this.sessionStorage.getItem('token');
    if(token != null){return null;}
    decoded = jwtDecode(token);
    return decoded.username
}
function GetUUID(){
    token = this.sessionStorage.getItem('token');
    if(token != null){return null;}
    decoded = jwtDecode(token);
    return decoded.userUUID
}
function GetAuthority(){
    token = this.sessionStorage.getItem('token');
    if(token != null){return null;}
    decoded = jwtDecode(token);
    return decoded.authority
}