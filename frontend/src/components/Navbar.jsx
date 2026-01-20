import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top shadow-sm bg-white">
        <div className="container">
            {/* Link para a Home clicando na Logo */}
            <Link className="navbar-brand d-flex align-items-center" to="/">
                <i className="fa-solid fa-hands-holding-circle me-2" style={{color: 'var(--purple-main)'}}></i>
                <span className="fw-bold" style={{color: 'var(--purple-main)'}}>Entre Vozes</span>
            </Link>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item">
                        <Link className="nav-link active" to="/">Início</Link>
                    </li>
                    
                    {/* Usamos href="/#sobre" para que ele funcione mesmo estando em outras páginas */}
                    <li className="nav-item">
                        <a className="nav-link" href="/#sobre">O Projeto</a>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to="/relatos">Relatos</Link>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" href="/#profissionais">Para Psicólogas</a>
                    </li>

                    <li className="nav-item ms-lg-3">
                        <Link to="/login" className="btn btn-outline-ev btn-sm w-100 mb-2 mb-lg-0">
                            Entrar
                        </Link>
                    </li>

                    <li className="nav-item ms-lg-2">
                        <Link to="/postar" className="btn btn-primary-ev btn-sm w-100">
                            Compartilhar
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  );
};

export default Navbar;