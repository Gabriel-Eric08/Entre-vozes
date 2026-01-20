from models.models import Post, db

class PostRepository:
    def create(self, title, content, post_type, user_id, is_anonymous):
        # Nota: created_at será gerado automaticamente pelo DB devido ao default no Model
        new_post = Post(
            title=title, 
            content=content, 
            post_type=post_type, 
            user_id=user_id, 
            is_anonymous=is_anonymous
        )
        db.session.add(new_post)
        db.session.commit()
        return new_post

    def get_all(self):
        # Útil para alimentar a timeline do React depois
        return Post.query.order_by(Post.created_at.desc()).all()
    def get_by_id(self, post_id):
        # Busca o post pelo ID primário
        return Post.query.get(post_id)