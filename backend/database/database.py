import mysql.connector

db = mysql.connector.connect(
  host="localhost",
  user="root",
  password=""
)


def InsertValue(table, names, values):
    try:
        mycursor = db.cursor()
        sql = f"INSERT INTO {table} ({names}) VALUES (%s, %s)"
        mycursor.execute(sql, values)
        db.commit()
        mycursor.close()
        return 0
    except Exception as e:
        print (f"Error while inserting value: {e}")
        return 1
def DeleteValue(table, name, values):
    try:
        mycursor = db.cursor()
        sql = f"DELETE FROM {table} WHERE{name} = '%s'"
        mycursor.execute(sql, values)
        db.commit()
        mycursor.close()
        return 0
    except Exception as e:
        print (f"Error while deleting value: {e}")
        return 1
def CheckValue(table, names, values):
    try:
        mycursor = db.cursor()
        sql = f"SELECT {names} FROM {table} WHERE {name} = '%s' LIMIT 1"
        mycursor.execute(sql, values)
        if(mycursor.rowcount > 0):
            mycursor.close()
            return 1
        mycursor.close()
        return 0
    except Exception as e:
        print (f"Error while deleting value: {e}")
        return 1

