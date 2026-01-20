from repositories.UserRepository import UserRepository
from werkzeug.security import generate_password_hash

class UserService:
    def __init__(self):
        self.repo = UserRepository()

    def register_user(self, username, email, password, role):
        # Regra de negócio: Hash de senha
        hashed_pw = generate_password_hash(password)
        return self.repo.create(username, email, hashed_pw, role)