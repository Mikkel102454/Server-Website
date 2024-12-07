import jwt
import datetime
from backend.database.database import GetValue
secretKey = "5cd50fae135948f4f7cc14e05f02ded8396d6144ae8a27907f2a6ff026c3bbbf"

def GenerateNewToken(uuid):
    payload = {
        "userUUID": uuid,
        "username": GetValue('users', 'username', 'uuid', uuid),
        "email": GetValue('users', 'email', 'uuid', uuid),
        "authority": GetValue('users', 'authority', 'uuid', uuid),
        "exp": datetime.datetime.utcnow() + datetime.timedelta(hours=1)
    }
    return jwt.encode(payload, secretKey, algorithm="HS256")

def VerifyToken(token):
    try:
        # Decode the token
        _ = jwt.decode(token, secretKey, algorithms=["HS256"])
        return 0
    except jwt.ExpiredSignatureError:
        return 1
    except jwt.InvalidTokenError:
        return 1
def DecodeToken(token):
    return jwt.decode(token, options={"verify_signature": False})
    