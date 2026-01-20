from flask import Flask
from flask_cors import CORS # Importante para o React conseguir acessar o Flask
from models.models import db

app = Flask(__name__)
CORS(app) # Libera o acesso para o seu frontend React

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)

# O db.create_all() pode ficar aqui ou no main, 
# mas garantir que os models foram importados antes de rodar:
with app.app_context():
    from models.models import User, Post, Comment, Video # Garante que o SQLAlchemy "enxergue" as tabelas
    db.create_all()