from repositories.PostRepository import PostRepository
from models.models import PostType

class PostService:
    def __init__(self):
        self.repo = PostRepository()

    def publish_post(self, title, content, post_type, user_id, is_anonymous=True):
        # 1. Regra de Negócio: Garantir que o post_type seja um membro do Enum
        # Se post_type vier como string (ex: "melhora"), converte para PostType.MELHORA
        if isinstance(post_type, str):
            try:
                # Converte para uppercase para bater com as chaves do Enum
                post_type = PostType[post_type.upper()]
            except KeyError:
                raise ValueError(f"Tipo de post '{post_type}' é inválido.")

        # 2. Regra de Negócio: Validação básica de conteúdo
        if not title or len(title.strip()) < 5:
            raise ValueError("O título deve ter pelo menos 5 caracteres.")
            
        if not content or len(content.strip()) < 10:
            raise ValueError("O conteúdo deve ser mais detalhado.")

        # 3. Chama o repositório com os campos individuais
        return self.repo.create(
            title=title,
            content=content,
            post_type=post_type,
            user_id=user_id,
            is_anonymous=is_anonymous
        )
    def get_all_posts(self):
        # O Service apenas solicita ao Repository a lista completa
        # Aqui você poderia adicionar filtros no futuro (ex: apenas posts públicos)
        return self.repo.get_all()
    def get_post_by_id(self, post_id):
        # Chama o repositório para buscar o post específico
        return self.repo.get_by_id(post_id)