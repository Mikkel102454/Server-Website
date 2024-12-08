function ChangePage(url){
    window.location = url
}

async function ExchangeServer(request){
    console.log(request);
    var response = await fetch("http://127.0.0.1:5000/exchange", {
        method: "POST",
        headers: {'Content-Type': 'application/json' },
        body: JSON.stringify(request)
    });
    var data = await response.json();

    if(data.newToken) {
        sessionStorage.setItem("token", data.newToken);
    }
    console.log(data);
    return data;
}


function GetEmail(){
    var token = this.sessionStorage.getItem('token');
    if(token != null){return null;}
    var decoded = jwtDecode(token);
    return decoded.email
}
function GetUsername(){
    var token = this.sessionStorage.getItem('token');
    if(token != null){return null;}
    var decoded = jwtDecode(token);
    return decoded.username
}
function GetUUID(){
    var token = this.sessionStorage.getItem('token');
    if(token != null){return null;}
    var decoded = jwtDecode(token);
    return decoded.userUUID
}
function GetAuthority(){
    var token = this.sessionStorage.getItem('token');
    if(token != null){return null;}
    var decoded = jwtDecode(token);
    return decoded.authority
}