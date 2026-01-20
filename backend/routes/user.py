from flask import Blueprint, jsonify, request
from services.UserService import UserService

# Criamos o Blueprint
user_bp = Blueprint('user_bp', __name__)
user_service = UserService()

@user_bp.route('/register', methods=['POST'])
def register():
    try:
        data = request.json
        
        # Validação básica de campos obrigatórios
        required = ['username', 'email', 'password', 'role']
        if not all(field in data for field in required):
            return jsonify({"error": "Campos obrigatórios ausentes"}), 400
            
        # Chamamos o service
        user = user_service.register_user(
            username=data['username'],
            email=data['email'],
            password=data['password'],
            role=data['role']
        )
        
        return jsonify({
            "id": user.id,
            "username": user.username,
            "message": "Usuário criado com sucesso!"
        }), 201
        
    except Exception as e:
        return jsonify({"error": str(e)}), 500