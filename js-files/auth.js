

var token = null;
var isLoggedIn = false;

window.onload = function() {
    try {
        token = GetToken();
    
        if(token){
            isLoggedIn = true;
        }
    } catch (e) {
        console.log(e);
    }

    console.log("LOADING");
    console.log(token);
    console.log(isLoggedIn);
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
        document.cookie = `token=${data.newToken}; path=/; secure; samesite=strict`;
        token = data.newToken;
    }
    console.log(data);
    return data;
}


function GetToken() {
    const cookies = document.cookie.split(';');

    for (const cookie of cookies) {
        const [name, value] = cookie.trim().split('=');
        if (name === 'token') {
            return value;
        }
    }

    return null;
}
function GetEmail(){
    if(!isLoggedIn){return null;}
    var decoded = jwtDecode(token);
    return decoded.email
}
function GetUsername(){
    if(!isLoggedIn){return null;}
    var decoded = jwtDecode(token);
    return decoded.username
}
function GetUUID(){
    if(!isLoggedIn){return null;}
    var decoded = jwtDecode(token);
    return decoded.userUUID
}
function GetAuthority(){
    if(!isLoggedIn){return null;}
    var decoded = jwtDecode(token);
    return decoded.authority
}