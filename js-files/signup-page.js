onload = function() {
    token = this.sessionStorage.getItem('token');
    console.log(token);
    if(token != null){
        ChangePage("/html-files/landing-page.html");
    }
}

function OnSignupGoogleButtonClick(){
    console.log("Clicked signup with google button");
}

async function OnSignupButtonClick(){
    var username = document.getElementById("username-input").value.trim();
    var email = document.getElementById("email-input").value.trim();
    var password = document.getElementById("password-input").value.trim();

    var data = {"handleCode": 101, "username": username, "email": email, "password": password};
    data = ExchangeServer(data)
    if (data.exitCode === 201) {
        ChangePage("/html-files/login-page.html");
    }
    console.log(data);
}