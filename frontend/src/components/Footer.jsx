const Footer = () => {
  return (
    <footer>
        <div className="container">
            <div className="row">
                <div className="col-md-4 mb-4">
                    <h5 className="text-dark mb-3">Entre Vozes</h5>
                    <p className="text-muted small">Uma plataforma de acolhimento, escuta e compartilhamento de experiências terapêuticas.</p>
                </div>
                <div className="col-md-4 mb-4">
                    <h6 className="text-dark">Emergência</h6>
                    <p className="small text-muted">
                        O Entre Vozes <strong>não realiza atendimento de emergência</strong>. Em caso de risco imediato, ligue 180 (Central de Atendimento à Mulher) ou 188 (CVV).
                    </p>
                </div>
                <div className="col-md-4 mb-4 text-md-end">
                    <p className="small text-muted">&copy; 2024 Entre Vozes.</p>
                </div>
            </div>
        </div>
    </footer>
  );
};

export default Footer;