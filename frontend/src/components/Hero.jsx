// src/components/Hero.jsx
import heroImg from '../assets/svg/mulheres-conversa.svg'; 

const Hero = () => {
  return (
    <header className="hero-section d-flex align-items-center mt-5 py-5">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6 mb-5 mb-lg-0">
                    <h1 className="display-4 mb-3 fw-bold">Silêncio que acolhe, voz que transforma.</h1>
                    <p className="lead text-muted mb-4">
                        Uma plataforma segura para mulheres compartilharem vivências terapêuticas, encontrarem identificação e apoio ético.
                    </p>
                    
                    <div className="d-flex flex-wrap gap-3 mb-4">
                        <a href="#relatos" className="btn btn-primary-ev btn-lg px-4">
                            Ler Relatos
                        </a>
                        
                        {/* NOVO LINK ATUALIZADO */}
                        <a 
                            href="https://institutoparatodas.org.br/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="btn btn-outline-ev btn-lg px-4"
                        >
                            Instituto Para Todas
                        </a>
                    </div>

                    <div className="d-grid d-md-block">
                        <a href="tel:188" className="btn btn-danger btn-lg px-4 py-3 shadow-sm d-inline-flex align-items-center justify-content-center gap-2">
                            <i className="fa-solid fa-phone-flip"></i>
                            AJUDA AGORA: LIGUE 188 (CVV)
                        </a>
                    </div>
                </div>
                
                <div className="col-lg-6 text-center">
                    <img src={heroImg} alt="Ilustração" className="img-fluid" style={{ maxHeight: '480px' }} />
                </div>
            </div>
        </div>
    </header>
  );
};

export default Hero;