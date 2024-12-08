import jwtDecode from "jwt-decode";

function ChangePage(url){
    window.location = url
}

async function ExchangeServer(request){
    var response = await fetch("http://127.0.0.1:5000/exchange", {
        method: "POST",
        headers: {'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });
    data = await response.json();

    if(data.newToken) {
        sessionStorage.setItem("token", data.newToken);
    }
    return data
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