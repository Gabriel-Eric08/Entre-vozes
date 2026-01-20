import { useState, useEffect, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const DetalheRelato = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [comentario, setComentario] = useState("");
  const [enviando, setEnviando] = useState(false);

  // Função para buscar os dados do post e comentários
  const fetchPost = useCallback(async () => {
    try {
      const response = await axios.get(`http://localhost:5000/posts/${id}`);
      setPost(response.data);
    } catch (err) {
      console.error("Erro ao carregar post", err);
    }
  }, [id]);

  useEffect(() => {
    fetchPost();
  }, [fetchPost]);

  // Função para enviar novo comentário
  const handleSubmitComentario = async (e) => {
  e.preventDefault();
  if (!comentario.trim()) return;

  setEnviando(true);
  try {
    // Note que a URL mudou para bater com seu comment_bp
    // E agora passamos o post_id dentro do corpo (body) do JSON
    await axios.post(`http://localhost:5000/comments/`, {
      content: comentario,
      user_id: 1, 
      post_id: id, // O ID do post que vem do useParams()
      is_professional: false 
    });
    
    setComentario(""); 
    fetchPost(); 
  } catch (err) {
    console.error("Erro ao comentar", err);
    alert("Erro ao enviar comentário.");
  } finally {
    setEnviando(false);
  }
};

  if (!post) return (
    <div className="container mt-5 pt-5 text-center">
      <div className="spinner-border text-primary" role="status"></div>
      <p className="mt-2">Carregando acolhimento...</p>
    </div>
  );

  return (
    <div className="container mt-5 pt-5 pb-5">
      <Link to="/relatos" className="btn btn-link text-decoration-none mb-4 p-0 text-primary">
        <i className="fa-solid fa-arrow-left me-2"></i> Voltar para os relatos
      </Link>

      <div className="row">
        <div className="col-lg-8">
          {/* Post Principal */}
          <article className="bg-white p-4 p-md-5 shadow-sm rounded-4 mb-4 border-0">
            <span className="badge rounded-pill bg-light text-primary mb-3 px-3 py-2 border">
              {post.post_type?.toUpperCase()}
            </span>
            <h1 className="display-6 fw-bold mb-4" style={{ color: 'var(--purple-main)' }}>
              {post.title}
            </h1>
            
            <div className="d-flex align-items-center mb-4 text-muted border-bottom pb-3">
              <i className="fa-regular fa-calendar me-2"></i> 
              {new Date(post.created_at).toLocaleDateString('pt-BR')}
              <span className="mx-2">•</span>
              <i className="fa-regular fa-user me-2"></i> 
              {post.is_anonymous ? "Anônima" : (post.author?.username || "Usuária")}
            </div>

            <p className="lead" style={{ whiteSpace: 'pre-wrap', lineHeight: '1.8', color: '#444' }}>
              {post.content}
            </p>
          </article>

          {/* Seção de Comentários */}
          <section className="mt-5">
            <h4 className="fw-bold mb-4">
              Comentários e Apoio <span className="badge bg-secondary ms-2">{post.comments?.length || 0}</span>
            </h4>
            
            {/* Formulário de Comentário */}
            <form onSubmit={handleSubmitComentario} className="mb-5">
              <div className="card border-0 shadow-sm p-3">
                <textarea 
                  className="form-control border-0 mb-2" 
                  rows="3" 
                  style={{ resize: 'none', boxShadow: 'none' }}
                  placeholder="Deixe uma palavra de carinho ou apoio..."
                  value={comentario}
                  onChange={(e) => setComentario(e.target.value)}
                ></textarea>
                <div className="d-flex justify-content-end">
                  <button 
                    type="submit" 
                    className="btn btn-primary-ev px-4"
                    disabled={enviando || !comentario.trim()}
                  >
                    {enviando ? "Enviando..." : "Enviar Comentário"}
                  </button>
                </div>
              </div>
            </form>

            {/* Lista de Comentários Dinâmica */}
            <div className="comments-container">
              {post.comments && post.comments.length > 0 ? (
                post.comments.map((c) => (
                  <div 
                    key={c.id} 
                    className={`p-3 rounded-4 mb-3 border-start border-4 shadow-sm ${
                      c.is_professional ? 'bg-purple-light border-primary' : 'bg-white border-light'
                    }`}
                  >
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="fw-bold small">
                        {c.username || "Participante"} 
                        {c.is_professional && (
                          <span className="ms-2 badge bg-primary" style={{ fontSize: '0.65rem' }}>
                            <i className="fa-solid fa-circle-check me-1"></i> Profissional
                          </span>
                        )}
                      </span>
                      <span className="text-muted" style={{ fontSize: '0.75rem' }}>
                        {new Date(c.created_at).toLocaleDateString('pt-BR')}
                      </span>
                    </div>
                    <p className="mb-0 text-secondary" style={{ fontSize: '0.95rem' }}>{c.content}</p>
                  </div>
                ))
              ) : (
                <div className="text-center py-4 bg-white rounded-4 shadow-sm">
                  <p className="text-muted mb-0">Nenhum comentário ainda. Seja a primeira a acolher!</p>
                </div>
              )}
            </div>
          </section>
        </div>

        {/* Sidebar Lateral */}
        <div className="col-lg-4">
          <div className="sticky-top" style={{ top: '100px', zIndex: '1' }}>
            <div className="card border-0 shadow-sm p-4 mb-4" style={{ borderRadius: '16px', backgroundColor: '#f8f4ff' }}>
              <h5 className="fw-bold mb-3" style={{ color: 'var(--purple-main)' }}>Precisa de ajuda técnica?</h5>
              <p className="small text-muted mb-4">
                Lembre-se que este espaço é para acolhimento mútuo. Se você estiver em situação de risco ou precisar de atendimento clínico especializado:
              </p>
              <a href="https://institutoparatodas.org.br/" target="_blank" rel="noopener noreferrer" className="btn btn-primary-ev w-100 mb-2">
                Buscar Atendimento
              </a>
              <button className="btn btn-outline-secondary btn-sm w-100">
                Ligar para o 180
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetalheRelato;