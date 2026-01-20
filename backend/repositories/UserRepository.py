from models.models import User, db

class UserRepository:
    def create(self, username, email, password_hash, role):
        new_user = User(username=username, email=email, password_hash=password_hash, role=role)
        db.session.add(new_user)
        db.session.commit()
        return new_user