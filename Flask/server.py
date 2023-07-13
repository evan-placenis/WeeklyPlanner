from flask import Flask, request
from flask_sqlalchemy import SQLAlchemy


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.sqlite3'
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db = SQLAlchemy(app)

class users(db.Model):
    _id = db.Column("id", db.Integer, primary_key=True)
    name = db.Column("name", db.String(100))
    passw = db.Column("passw", db.String(100))
    score = db.Column("score", db.Integer)

    def __init__(self, username, password):
        self.name = username 
        self.passw = password
        self.score = 0

#LOGIN
@app.route("/Login", methods = ['GET', 'POST'])
def Login():
    if request.method == 'POST':
        #FORM METHOD
        # username = request.form["username"]
        # password = request.form["password"]
        user = request.get_json()
        username = user.get("username")
        password = user.get("password")

        found_user = users.query.filter_by(name = username).first()
        try:
            if found_user.name == username and found_user.passw == password:
                #FOUND USER
                return {found_user.name: [found_user.passw, found_user.score]}
            else:
                return {None: ['username or password incorrect', 0]}
        except:
            return {None: ['No user found with this username', 0]}



#REGISTER
@app.route("/Register", methods = ['POST', 'GET'])
def Register():
    
    if request.method == 'POST':
        user = request.get_json()
        username = user.get("username")
        password = user.get("password")

        found_user = users.query.filter_by(name = username).first()
    try:
        if found_user:
            return {None: ['DISPLAY USER ALR TAKEN', 0]}
        else:
            user = users(username, password)
            db.session.add(user)
            db.session.commit()
            return {username: [password, 0]}
    except:
        return {None: ["Error", 0]}
        





if __name__ == "__main__":
    with app.app_context():
        db.create_all()
    app.run(debug = True)