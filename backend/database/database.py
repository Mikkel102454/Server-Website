import mysql.connector

db = mysql.connector.connect(
  host="localhost",
  user="root",
  password="",
  database="hosting"
)


def InsertValue(table, names, values):
    try:
        mycursor = db.cursor()
        columns = ", ".join(names)
        placeholders = ", ".join(["%s"] * len(values))
        sql = f"INSERT INTO {table} ({columns}) VALUES ({placeholders})"
        mycursor.execute(sql, tuple(values))
        db.commit()
        mycursor.close()
        return 0
    except Exception as e:
        print (f"Error while inserting value: {e}")
        return 1
    finally:
        mycursor.close()
def DeleteValue(table, name, values):
    try:
        mycursor = db.cursor()
        sql = f"DELETE FROM {table} WHERE{name} = %s"
        mycursor.execute(sql, (values,))
        db.commit()
        mycursor.close()
        return 0
    except Exception as e:
        print (f"Error while deleting value: {e}")
        return 1
    finally:
        mycursor.close()
def CheckValue(table, names, values):
    try:
        mycursor = db.cursor()
        sql = f"SELECT {names} FROM {table} WHERE {names} = %s LIMIT 1"
        mycursor.execute(sql, (values,))
        result = mycursor.fetchone()
        if(result):
            mycursor.close()
            return 1
        mycursor.close()
        return 0
    except Exception as e:
        print (f"Error while checking value: {e}")
        return 1
    finally:
        mycursor.close()
def GetValue(table, name, reqName, reqValue):
    try:
        mycursor = db.cursor()
        sql = f"SELECT {name} FROM {table} WHERE {reqName} = %s LIMIT 1"
        mycursor.execute(sql, (reqValue,))
        result = mycursor.fetchone()

        if result:
            return result[0]
        return None
    except Exception as e:
        print(f"Error in GetValue: {e}")
        return None
    finally:
        mycursor.close()