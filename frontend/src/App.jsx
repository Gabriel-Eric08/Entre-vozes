import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home'; 
import FeedRelatos from './pages/FeedRelatos'; 
import PostarRelato from './pages/PostarRelato';
import DetalheRelato from './pages/DetalheRelato';

function App() {
  return (
    <Router>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/relatos" element={<FeedRelatos />} />
        <Route path="/postar" element={<PostarRelato />} />
        <Route path="/relato/:id" element={<DetalheRelato />} />
      </Routes>

      <Footer />

      {/* Botões flutuantes globais (aparecem em todas as páginas) */}
      <a href="tel:188" className="float-btn btn-emergency-float" data-label="Ligar 188">
          <i className="fa-solid fa-phone"></i>
      </a>
      <a href="https://institutoparatodas.org.br/" target="_blank" rel="noopener noreferrer" className="float-btn btn-psi-float" data-label="Apoio Gratuito">
          <i className="fa-solid fa-hand-holding-heart"></i>
      </a>
    </Router>
  );
}

export default App;