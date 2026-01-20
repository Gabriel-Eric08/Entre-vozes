from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
from enum import Enum

db = SQLAlchemy()

# Definindo os papéis de usuário
class UserRole(Enum):
    PACIENTE = "paciente"
    PSICOLOGO = "psicologo"

# Definindo os tipos de posts
class PostType(Enum):
    MELHORA = "melhora"          # Relatos de superação
    CASO_CLINICO = "caso"        # Relatos de psicólogos sobre casos (anonimizados)
    DESABAFO = "desabafo"        # Mulheres que ainda não buscaram ajuda
    INFORMATIVO = "informativo"  # Posts educativos

class User(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password_hash = db.Column(db.String(256), nullable=False)
    role = db.Column(db.Enum(UserRole), default=UserRole.PACIENTE)
    
    # Se for psicólogo, pode ter campos extras (como CRP)
    crp = db.Column(db.String(20), nullable=True)
    bio = db.Column(db.Text, nullable=True)
    
    # Relacionamentos
    posts = db.relationship('Post', backref='author', lazy=True)
    comments = db.relationship('Comment', backref='author', lazy=True)

class Post(db.Model):
    __tablename__ = 'posts'
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(150), nullable=False)
    content = db.Column(db.Text, nullable=False)
    post_type = db.Column(db.Enum(PostType), nullable=False)
    is_anonymous = db.Column(db.Boolean, default=True) # Opção de postar sem nome
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    
    # FK para usuário
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    
    # Relacionamento com comentários
    comments = db.relationship('Comment', backref='post', cascade="all, delete-orphan", lazy=True)

class Comment(db.Model):
    __tablename__ = 'comments'
    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.Text, nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    
    # Um comentário técnico de psicólogo pode ter um flag de "Instrução Profissional"
    is_professional_advice = db.Column(db.Boolean, default=False)
    
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    post_id = db.Column(db.Integer, db.ForeignKey('posts.id'), nullable=False)

class Video(db.Model):
    __tablename__ = 'videos'
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(150), nullable=False)
    url = db.Column(db.String(255), nullable=False) # Link do YouTube/Vimeo
    description = db.Column(db.Text, nullable=True)
    category = db.Column(db.String(50)) # Ex: "Incentivo", "Educativo"
    created_at = db.Column(db.DateTime, default=datetime.utcnow)