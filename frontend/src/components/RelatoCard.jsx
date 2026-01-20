import { useNavigate } from 'react-router-dom';

const RelatoCard = ({ id, titulo, texto, autor, tags, tempo }) => {
  const navigate = useNavigate();
  
  // Função para definir a cor da tag baseada no texto
  const getTagClass = (tag) => {
    const t = tag.toLowerCase();
    if (t.includes('melhora')) return 'badge-melhora';
    if (t.includes('desabafo')) return 'badge-desabafo';
    if (t.includes('info')) return 'badge-informativo';
    return 'badge-caso';
  };

  return (
    <div className="col-md-4 mb-4" onClick={() => navigate(`/relato/${id}`)}>
      <div className="card h-100 shadow-sm p-4 relato-card-hover" style={{ borderRadius: '16px' }}>
        <div className="d-flex mb-3">
          {tags && tags.map((tag, i) => (
            <span key={i} className={`badge rounded-pill me-2 px-3 py-2 ${getTagClass(tag)}`}>
              {tag.replace('_', ' ')}
            </span>
          ))}
        </div>
        
        <h5 className="fw-bold mb-3" style={{ color: '#2d3436' }}>{titulo}</h5>
        
        <p className="text-muted mb-4" style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
          {texto.length > 120 ? texto.substring(0, 120) + '...' : texto}
        </p>

        <div className="mt-auto pt-3 border-top d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <div className="rounded-circle bg-light d-flex align-items-center justify-content-center me-2" style={{ width: '30px', height: '30px' }}>
              <i className="fa-solid fa-user text-secondary" style={{ fontSize: '0.8rem' }}></i>
            </div>
            <span className="small fw-bold">{autor}</span>
          </div>
          <span className="text-muted small">{tempo}</span>
        </div>
      </div>
    </div>
  );
};

export default RelatoCard;