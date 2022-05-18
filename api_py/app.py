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
	if request.methods == 'POST':
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
	if request.methods == 'POST':
		query = "SELECT * FROM clients"
		database = sqlite3.connect("main.db")
		database.cursor().execute(query)
		data = database.fetchall()
		database.close()
		return data
	else:
		return "This api not receive GET request ERRO 404"
