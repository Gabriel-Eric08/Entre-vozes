from flask import Blueprint, jsonify, request
from services.PostService import PostService

post_bp = Blueprint('post_bp', __name__)
post_service = PostService()

@post_bp.route('/', methods=['POST'])
def create():
    try:
        data = request.json
        
        # 1. Verificação mínima de presença de dados
        if not data:
            return jsonify({"error": "Dados não fornecidos"}), 400

        # 2. Chamada ao serviço 
        # Passamos os dados brutos, o Service se encarrega de validar e converter o Enum
        post = post_service.publish_post(
            title=data.get('title'),
            content=data.get('content'),
            post_type=data.get('post_type'),
            user_id=data.get('user_id'),
            is_anonymous=data.get('is_anonymous', True)
        )
        
        return jsonify({
            "id": post.id,
            "title": post.title,
            "message": "Relato publicado com sucesso!"
        }), 201

    except ValueError as e:
        # Aqui capturamos os erros de validação do Service (tamanho de texto, enum inválido)
        return jsonify({"error": str(e)}), 400
    except Exception as e:
        # Erros inesperados de sistema
        return jsonify({"error": "Erro interno ao processar o post"}), 500

@post_bp.route('/', methods=['GET'])
def list_posts():
    posts = post_service.get_all_posts() # Ou a lógica que você usa no service
    
    # Converter os objetos do banco para um formato JSON
    output = []
    for post in posts:
        output.append({
            "id": post.id,
            "title": post.title,
            "content": post.content,
            "post_type": post.post_type.value, # Pega o valor da string do Enum
            "is_anonymous": post.is_anonymous,
            "created_at": post.created_at.isoformat(),
            "author": {"username": post.author.username} if not post.is_anonymous else None
        })
    return jsonify(output), 200

@post_bp.route('/<int:post_id>', methods=['GET'])
def get_detail(post_id):
    post = post_service.get_post_by_id(post_id)
    
    if not post:
        return jsonify({"error": "Relato não encontrado"}), 404
        
    return jsonify({
        "id": post.id,
        "title": post.title,
        "content": post.content,
        "post_type": post.post_type.value,
        "is_anonymous": post.is_anonymous,
        "created_at": post.created_at.isoformat(),
        "author": {"username": post.author.username} if not post.is_anonymous else None,
        # Preparado para quando criarmos os comentários
        "comments": [{
            "id": c.id,
            "content": c.content,
            "username": c.author.username,
            "is_professional": c.is_professional_advice,
            "created_at": c.created_at.isoformat()
        } for c in post.comments]
    }), 200