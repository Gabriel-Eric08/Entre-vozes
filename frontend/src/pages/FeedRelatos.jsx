import { useState, useEffect } from 'react';
import axios from 'axios';
import RelatoCard from '../components/RelatoCard';

const FeedRelatos = () => {
  const [relatos, setRelatos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    const carregarRelatos = async () => {
      try {
        // Ajuste a URL se o seu prefixo for diferente (ex: http://localhost:5000/posts/)
        const response = await axios.get('http://localhost:5000/posts/');
        
        // Se o Flask retornar a lista direto, usamos response.data
        // Se ele retornar um objeto com a lista dentro, ajuste aqui
        setRelatos(response.data);
      } catch (err) {
        console.error("Erro ao buscar relatos:", err);
        setErro("Não foi possível carregar os relatos. Verifique se o servidor está ligado.");
      } finally {
        setLoading(false);
      }
    };

    carregarRelatos();
  }, []);

  return (
    <div className="container mt-5 pt-5 pb-5">
      <div className="text-center mb-5">
        <h1 className="display-5 fw-bold" style={{ color: 'var(--purple-main)' }}>Vozes da Comunidade</h1>
        <p className="lead text-muted">Histórias reais, apoio mútuo e acolhimento.</p>
      </div>

      {loading && (
        <div className="text-center py-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Carregando...</span>
          </div>
        </div>
      )}

      {erro && (
        <div className="alert alert-danger shadow-sm" role="alert">
          {erro}
        </div>
      )}

      {!loading && !erro && relatos.length === 0 && (
        <div className="text-center py-5">
          <p className="text-muted">Ainda não há relatos publicados. Seja a primeira a compartilhar!</p>
        </div>
      )}

      <div className="row g-4">
        {relatos.map((relato) => (
          <RelatoCard 
            key={relato.id}
            id={relato.id}
            titulo={relato.title}
            texto={relato.content}
            autor={relato.is_anonymous ? "Anônima" : (relato.author?.username || "Usuária")}
            tags={[relato.post_type]} // Transformamos o enum em tag
            tempo={new Date(relato.created_at).toLocaleDateString('pt-BR')}
          />
        ))}
      </div>
    </div>
  );
};

export default FeedRelatos;