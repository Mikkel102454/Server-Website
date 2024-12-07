from flask import jsonify
from backend.database.database import CheckValue
from backend.database.database import InsertValue

from backend.stdlib import hash256
from backend.stdlib import GenerateUUID
def CreateAccount(username, email, password):
    try:
        reponse = {'usernameTaken': 0, 'emailTaken': 0, 'exitCode': 0, 'status' : "failure"}
        # Checks mail and username
        if(CheckValue("users", "username", username) != 0):
            print("username already exists")
            reponse['usernameTaken'] = 1
        if(CheckValue("users", "email", email) != 0):
            print("email already exists")
            reponse['emailTaken'] = 1

        
        if(reponse['usernameTaken'] == 0 and reponse['emailTaken'] == 0):
            # Hahes password 256 x 10
            password = hash256(password, 16)
            # Create UUID
            uuid = GenerateUUID(username)
            # Insert to database
            InsertValue('users', ['username', 'email', 'password', 'uuid'], [username, email, password, uuid])
            #return
            reponse['exitCode'] = 201
            reponse['status'] = "sucsess"
        else:
            reponse['exitCode'] = 409
            reponse['status'] = "failure"
        return reponse
    except Exception as e:
        print(f"Error while creating account: {e}")
        return {"status": "failure", "exitCode:": 500}