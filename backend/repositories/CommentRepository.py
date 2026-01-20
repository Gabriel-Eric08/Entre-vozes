from models.models import Comment, db

class CommentRepository:
    def create(self, content, user_id, post_id, is_professional_advice):
        new_comment = Comment(
            content=content, 
            user_id=user_id, 
            post_id=post_id,
            is_professional_advice=is_professional_advice
        )
        db.session.add(new_comment)
        db.session.commit()
        return new_comment

    def get_by_post(self, post_id):
        return Comment.query.filter_by(post_id=post_id).order_by(Comment.created_at.asc()).all()