const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container">
            <a className="navbar-brand" href="#">
                <i className="fa-solid fa-hands-holding-circle me-2"></i>Entre Vozes
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item"><a className="nav-link active" href="#">Início</a></li>
                    <li className="nav-item"><a className="nav-link" href="#sobre">O Projeto</a></li>
                    <li className="nav-item"><a class="nav-link" href="#relatos">Relatos</a></li>
                    <li className="nav-item"><a className="nav-link" href="#profissionais">Para Psicólogas</a></li>
                    <li className="nav-item ms-lg-3">
                        <a href="#" className="btn btn-outline-ev btn-sm">Entrar</a>
                    </li>
                    <li className="nav-item ms-2">
                        <a href="#" className="btn btn-primary-ev btn-sm">Compartilhar</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  );
};

export default Navbar;