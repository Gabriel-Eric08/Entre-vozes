import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const PostarRelato = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    title: '',
    content: '',
    post_type: 'Relato', // Valor padrão
    is_anonymous: true
  });

  const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);

  const payload = {
    title: form.title,
    content: form.content,
    post_type: form.post_type,
    is_anonymous: form.is_anonymous,
    user_id: 1 // Conforme solicitado, ID padrão 1
  };

  try {
    const response = await axios.post('http://localhost:5000/posts/', payload);
    console.log("Sucesso:", response.data);
    alert("Relato publicado com sucesso!");
    navigate('/relatos'); // Redireciona para a lista
  } catch (error) {
    // Se o erro for 400 ou 500, o Flask enviará a mensagem no error.response.data
    const msgErro = error.response?.data?.error || "Erro de conexão";
    alert("Erro: " + msgErro);
    console.error("Detalhes do erro:", error.response);
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="container mt-5 pt-5 pb-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card-relato shadow-lg border-0">
            <h2 className="text-center mb-4" style={{ color: 'var(--purple-main)' }}>
              Compartilhe sua Vivência
            </h2>
            <p className="text-center text-muted mb-4">
              Este é um espaço seguro. Sinta-se livre para desabafar.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label fw-bold">Título do seu relato</label>
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Dê um título para sua história..."
                  value={form.title}
                  onChange={(e) => setForm({...form, title: e.target.value})}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-bold">Categoria</label>
                <select 
                    className="form-select"
                    value={form.post_type}
                    onChange={(e) => setForm({...form, post_type: e.target.value})}
                >
                    {/* O "value" deve ser exatamente o que está no seu Enum PostType no Python */}
                    <option value="melhora">Relato de Superação (Melhora)</option>
                    <option value="desabafo">Desabafo (Preciso de apoio)</option>
                    <option value="informativo">Conteúdo Informativo/Educativo</option>
                    {/* Nota: 'caso' geralmente seria para uso dos psicólogos conforme seu model */}
                    <option value="caso">Caso Clínico (Apenas Profissionais)</option>
                </select>
                </div>

              <div className="mb-3">
                <label className="form-label fw-bold">Sua história</label>
                <textarea 
                  className="form-control" 
                  rows="6" 
                  placeholder="Escreva aqui..."
                  value={form.content}
                  onChange={(e) => setForm({...form, content: e.target.value})}
                  required
                ></textarea>
              </div>

              <div className="form-check form-switch mb-4">
                <input 
                  className="form-check-input" 
                  type="checkbox" 
                  id="anonimoSwitch"
                  checked={form.is_anonymous}
                  onChange={(e) => setForm({...form, is_anonymous: e.target.checked})}
                />
                <label className="form-check-label" htmlFor="anonimoSwitch">
                  Postar anonimamente (Seu nome não aparecerá)
                </label>
              </div>

              <div className="d-grid gap-2">
                <button 
                  type="submit" 
                  className="btn btn-primary-ev btn-lg"
                  disabled={loading}
                >
                  {loading ? 'Publicando...' : 'Publicar Relato'}
                </button>
                <button 
                  type="button" 
                  className="btn btn-link text-muted"
                  onClick={() => navigate('/')}
                >
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostarRelato;