from backend.database.database import InsertValue
def CreateServer(ownerUuid, servernName = "New Server", maxRam = "2GB"):
    print("Creating...")
    InsertValue("servers", "serverUuid, owner, created, ram")


def GetServer():
    print("Getting...")