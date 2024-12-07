function OnSignupGoogleButtonClick(){
    console.log("Clicked signup with google button");
}

async function OnSignupButtonClick(){
    var username = document.getElementById("username-input").value.trim();
    var email = document.getElementById("email-input").value.trim();
    var password = document.getElementById("password-input").value.trim();

    var data = {"handleCode": 101, "username": username, "email": email, "password": password};
    var respone = await fetch("http://127.0.0.1:5000/exchange", {
        method: "POST",
        headers: {'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });
    var data = await respone.json();
    console.log(data);
}