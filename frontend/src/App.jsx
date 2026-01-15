import Navbar from './components/Navbar';
import Hero from './components/Hero';
import RelatoCard from './components/RelatoCard';
import Footer from './components/Footer';

function App() {
  
  // Simulando dados vindo de um banco de dados (JSON)
  const relatos = [
    {
      tags: ['Superação', 'TCC'],
      titulo: 'Reencontrando minha voz',
      texto: 'Demorei anos para entender que o que senti não era culpa minha. Durante as sessões, aprendi a separar a minha identidade do trauma...',
      autor: 'Anônima',
      tempo: '2h atrás'
    },
    {
      tags: ['Luto', 'Psicanálise'],
      titulo: 'O processo não é linear',
      texto: 'Existem dias em que acho que estou curada, e outros em que a dor volta. Minha psicóloga me ajudou a acolher essas recaídas.',
      autor: 'Mariana S.',
      tempo: '1 dia atrás'
    },
    {
      tags: ['Rede de Apoio'],
      titulo: 'A importância de ouvir',
      texto: 'Sair de um ciclo de violência parecia impossível até eu encontrar um grupo de apoio. Ouvir outras mulheres foi o primeiro passo.',
      autor: 'Anônima',
      tempo: '3 dias atrás'
    }
  ];

  return (
    <div>
      <Navbar />
      <Hero />
      
      {/* Seção Pilares (Simplificada para o exemplo) */}
      <section id="sobre" className="py-5 container">
        <div className="text-center mb-5">
            <h2>Um espaço de cuidado</h2>
            <p className="text-muted">Segurança, anonimato e apoio profissional.</p>
        </div>
      </section>

      {/* Seção de Relatos com Loop (Map) */}
      <section id="relatos" className="py-5 bg-white">
        <div className="container">
            <h2 className="mb-4">Relatos Recentes</h2>
            <div className="row g-4">
                {relatos.map((relato, index) => (
                    <RelatoCard 
                        key={index}
                        tags={relato.tags}
                        titulo={relato.titulo}
                        texto={relato.texto}
                        autor={relato.autor}
                        tempo={relato.tempo}
                    />
                ))}
            </div>
        </div>
      </section>

      {/* Seção Psicólogas */}
      <section className="container">
        <div className="section-psi text-center">
            <h2 className="mb-3">Para Psicólogas</h2>
            <p className="mb-4">Deseja contribuir para uma rede de apoio ética?</p>
            <button className="btn btn-light" style={{color: 'var(--purple-main)', fontWeight: '700'}}>Saiba como contribuir</button>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default App;