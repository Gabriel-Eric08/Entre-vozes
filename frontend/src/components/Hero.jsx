// 1. IMPORTAÇÃO: O '../' significa "voltar uma pasta" (sair de components) para entrar em assets
import heroImg from '../assets/svg/mulheres-conversa.svg'; 

const Hero = () => {
  return (
    <header className="hero-section d-flex align-items-center mt-5">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6 mb-4 mb-lg-0">
                    <h1 className="display-4 mb-3">Silêncio que acolhe, voz que transforma.</h1>
                    <p className="lead text-muted mb-4">
                        Uma plataforma segura para mulheres compartilharem vivências terapêuticas, encontrarem identificação e apoio ético.
                    </p>
                    <div className="d-flex gap-3">
                        <a href="#" className="btn btn-primary-ev btn-lg">Ler Relatos</a>
                        <a href="#" className="btn btn-outline-ev btn-lg">Sobre nós</a>
                    </div>
                    <p className="small text-muted mt-3">
                        <i className="fa-solid fa-lock me-1"></i> Seus dados estão protegidos. Postagem anônima disponível.
                    </p>
                </div>
                
                <div className="col-lg-6 text-center">
                    {/* 2. USO DA IMAGEM: Note que usamos {heroImg} entre chaves */}
                    <img 
                        src={heroImg} 
                        alt="Ilustração de mulheres conversando e se apoiando" 
                        className="img-fluid" 
                        // Ajuste de estilo para garantir que não fique gigante
                        style={{ maxHeight: '450px' }} 
                    />
                </div>
            </div>
        </div>
    </header>
  );
};

export default Hero;