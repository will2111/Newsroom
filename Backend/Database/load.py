import sqlite3

Database= r'/Users/williamfotso/Workspace/Newsroom/Backend/Database/db_api.db'

def add_obj_to_database(conn,obj,call_api,line_id):
    
    keys = list(obj.keys())
    val_str = ""
    key_str= "ID int, "
    i = 0

    while (i < len(keys)):
        
        key = keys[i]
        key_str += key+ " TEXT"
        if (i != len(keys) - 1 ):
            key_str += ", "

        val = obj[key]
        val_str += ', '
        val_str += '"' + val.replace('"',"") + '"'
         
        i+=1
    
    
    cur = conn.cursor()
    

    create_sql = "CREATE TABLE IF NOT EXISTS {0} ( {1} );".format(call_api, key_str)
    insert_sql = "INSERT INTO {0} (ID, {1}) VALUES ({2}{3});".format(call_api, ", ".join(keys), line_id, val_str)
    cur.execute(create_sql)
    cur.execute(insert_sql)

    conn.commit()
    return cur.lastrowid

def load(AllData):
    try:
        with sqlite3.connect(Database) as conn:
            
                  
            # add obj id data_k (articles,youtube)  
            line_id = 0
            for data_k in list(AllData.keys()):
                print(f'{10 * "-"} START : {data_k} {10 * "-"}')
                for obj in AllData[data_k]:
                    line_id = add_obj_to_database(conn,obj,data_k,line_id)
                    print(f'Created a obj from {data_k} with the id {line_id}')

    except sqlite3.Error as e:
        print(f'error : {e}')



