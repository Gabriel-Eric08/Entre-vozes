from repositories.CommentRepository import CommentRepository

class CommentService:
    def __init__(self):
        self.repo = CommentRepository()

    def leave_comment(self, content, user_id, post_id, is_professional=False):
        # Regra de negócio: Comentário não pode ser vazio
        if not content or len(content.strip()) < 2:
            raise ValueError("O comentário é muito curto.")

        # Futura regra de negócio: Verificar se o user_id pertence a um PSICOLOGO 
        # para permitir is_professional=True (segurança)

        return self.repo.create(
            content=content,
            user_id=user_id,
            post_id=post_id,
            is_professional_advice=is_professional
        )