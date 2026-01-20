from flask import jsonify
from config_db import app
from models.models import db, User, Post # Importe o que precisar usar nas rotas
from routes.user import user_bp
from routes.post import post_bp
from routes.comment import comment_bp
from flask_cors import CORS

@app.route('/')
def home():
    return jsonify({"message": "Bem-vinda ao Entre Vozes API", "status": "online"})

CORS(app)
app.register_blueprint(user_bp, url_prefix='/users')
app.register_blueprint(post_bp, url_prefix='/posts')
app.register_blueprint(comment_bp, url_prefix='/comments')

if __name__ == '__main__':
    app.run(debug=True, port=5000) 