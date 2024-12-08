var token = null;
var isLoggedIn = false;

window.addEventListener("load", function () {
    try {
        token = GetToken();
        if(token){
            isLoggedIn = true;
        }
    } catch (e) {
        console.log(e);
    }
})

async function ExchangeServer(request){
    console.log(request);
    var response = await fetch("http://127.0.0.1:5000/exchange", {
        method: "POST",
        headers: {'Content-Type': 'application/json' },
        body: JSON.stringify(request)
    });
    var data = await response.json();

    if(data.newToken) {
        SetToken(data.newToken);
        token = data.newToken;
    }
    console.log(data);
    return data;
}

function SetToken(token) {
    const maxAge = 10 * 365 * 24 * 60 * 60; // Approx. 10 years 
    document.cookie = `token=${token}; path=/; secure; samesite=strict; max-age=${maxAge}`;
}

class userData {
    constructor(username, email, uuid, authority) {
        this.username = username;
        this.email = email;
        this.uuid = uuid;
        this.authority = authority;
    }
}

function GetToken() {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; token=`);
    if (parts.length === 2) {
        return parts.pop().split(';').shift();
    }
    return null;
}
function GetUserData(){
    if(!isLoggedIn){return null;}
    var decoded = jwtDecode(token);
    return new userData(decoded.username, decoded.email, decoded.userUUID, decoded.authority)
}