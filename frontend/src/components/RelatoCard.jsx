const RelatoCard = ({ tags, titulo, texto, autor, tempo }) => {
  return (
    <div className="col-md-4">
        <div className="card-relato h-100 d-flex flex-column">
            <div className="mb-2">
                {tags.map((tag, index) => (
                    <span key={index} className="tag-pill">{tag}</span>
                ))}
            </div>
            <h5 className="mb-3">{titulo}</h5>
            <p className="text-muted flex-grow-1">"{texto}"</p>
            <div className="d-flex align-items-center mt-3 pt-3 border-top border-light">
                <div className="small text-muted w-100 d-flex justify-content-between">
                    <span><i className="fa-regular fa-user me-1"></i> {autor}</span>
                    <span><i className="fa-regular fa-clock me-1"></i> {tempo}</span>
                </div>
            </div>
        </div>
    </div>
  );
};

export default RelatoCard;