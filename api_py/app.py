from flask import Flask
from flask import request
import json
import sqlite3

credencials_confirm = False

app = Flask(__name__)

@app.route("/",methods=['GET','POST'])
def root():
	return "root"

@app.route("/api/request/storage-data",methods=['GET','POST'])
def storage_data():
	if request.method == 'POST':
		query = "INSERT INTO clients VALUES ({} , {} , {})".format(request.form['name'],request.form['age'],request.form['email'])
		database = sqlite3.connect("main.db")
		database.cursor().execute(query)
		database.commit()
		database.close()
		print("Save Data Request")
		return 0;
	else:
		return "This api not receive GET request ERRO 404"

@app.route("/api/response/show-data",methods=['GET','POST'])
def show_data():
	if request.method == 'POST':
		query = "SELECT * FROM clients"
		database = sqlite3.connect("main.db")
		cursor = database.cursor()
		cursor.execute(query)
		data = cursor.fetchall()[0]
		 
		resp = {
			"id":data[0],
			"name":data[1],
			"idade":data[2],
			"email":data[3]
		}
		respformat = json.dumps(resp,ensure_ascii=False)
		return respformat
	else:
		return "This api not receive GET request ERRO 404"
