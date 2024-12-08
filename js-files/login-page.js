
onload = function() {
    token = this.sessionStorage.getItem('token');
    console.log(token);
    if(token != null){

        ChangePage("/html-files/landing-page.html");
    }
}
function OnLoginGoogleButtonClick(){
    console.log("Clicked login with google button");
}

async function OnLoginButtonClick(){
    console.log("Clicked login button");
    var username = document.getElementById("username-input").value.trim();
    var password = document.getElementById("password-input").value.trim();

    var data = {"handleCode": 102, "username": username, "password": password};
    response = await ExchangeServer(data);

    if(response.exitCode === 200){
        sessionStorage.setItem("token", response.token);
        ChangePage("/html-files/landing-page.html");
    }
    if(response.exitCode === 401){
        // Username or Password is invalid
    }
    console.log(response);
}
