from flask import Blueprint, jsonify, request
from services.CommentService import CommentService

comment_bp = Blueprint('comment_bp', __name__)
comment_service = CommentService()

@comment_bp.route('/', methods=['POST'])
def create():
    try:
        data = request.json
        
        # O post_id geralmente virá do contexto do post que a usuária está lendo
        comment = comment_service.leave_comment(
            content=data.get('content'),
            user_id=data.get('user_id'),
            post_id=data.get('post_id'),
            is_professional=data.get('is_professional', False)
        )
        
        return jsonify({
            "id": comment.id,
            "message": "Comentário enviado com sucesso!"
        }), 201

    except ValueError as e:
        return jsonify({"error": str(e)}), 400
    except Exception as e:
        return jsonify({"error": "Erro ao processar comentário"}), 500