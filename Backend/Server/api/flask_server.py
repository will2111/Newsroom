import flask
from flask import jsonify

import sqlite3
from sqlite3 import Error

app = flask.Flask(__name__)
app.config["DEBUG"] = True


# <file>.db path
Database= r'/Users/williamfotso/Workspace/Newsroom/Backend/Database/db_api.db'

# [CREATE] [SQL : CREATE TABLE IF NOT EXISTS] [>>> start_db()]
def create_tables(conn, create_table_sql):
    try:
        c = conn.cursor()
        c.execute(create_table_sql)
    except Error as e:
        print(e)
    finally:
        if c:
            c.close()

# [CREATE] [>>> execute()]
def dict_factory(cursor, row):
    d = {}
    for idx, col in enumerate(cursor.description):
        d[col[0]] = row[idx]
    return d

def execute(sql,isSelect = True):
    conn = sqlite3.connect(Database)
    conn.row_factory = dict_factory
    cur = conn.cursor()
    if isSelect:
        return cur.execute(sql).fetchall()
    else:
        result = cur.execute(sql)
        conn.commit()
        return result


"""
@app.route('/user', methods=['POST'])
def post_users():
    user = request.get_json()
    _age = user['age']
    _name = user['name']

    sql = f"INSERT INTO user (age, name) VALUES ({_age}, '{_name}');"

    result = execute(sql,False)
    user['id'] = result.lastrowid
    return jsonify(user)

@app.route('/user', methods=['PUT'])
def put_users():
    user = request.get_json()
    _id = user['id']
    _age = user['age']
    _name = user['name']

    sql = f"UPDATE user SET age = {_age}, name = '{_name}' WHERE id = {_id} ;"

    execute(sql,False)
    return {}
"""

@app.route('/Articles', methods=['GET'])
def get_articles():
    sql = f"""SELECT * FROM Articles;"""

    users = execute(sql)
    return jsonify(users)

@app.route('/Youtube', methods=['GET'])
def get_youtube():
    sql = f"""SELECT * FROM Youtube;"""

    users = execute(sql)
    return jsonify(users)

"""
@app.route('/user/<_id>', methods=['DELETE'])
def delete_users(_id):

    sql = f"DELETE FROM user WHERE id = {int(_id)} ;"

    execute(sql,False)
    return {}
"""

app.run(host='192.168.1.24', port=5000, debug=True, threaded=False)