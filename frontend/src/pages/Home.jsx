import Hero from '../components/Hero';
import RelatoCard from '../components/RelatoCard';
import VideoCarousel from '../components/VideoCarousel';

// Mudamos o nome para Home
function Home() {
  
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
    <>
      <Hero />
      
      <section id="sobre" className="py-5 container">
        <div className="text-center mb-5">
            <h2 className="display-6">Um espaço de cuidado</h2>
            <p className="text-muted lead">Segurança, anonimato e apoio profissional de ponta a ponta.</p>
        </div>
      </section>

      <VideoCarousel />

      <section id="relatos" className="py-5 bg-white">
        <div className="container">
            <div className="d-flex justify-content-between align-items-end mb-4">
                <div>
                  <h2 className="mb-0">Relatos Recentes</h2>
                  <p className="text-muted mb-0">Histórias reais de quem buscou ajuda.</p>
                </div>
                <button className="btn btn-outline-ev">
                  Ver todos os relatos <i className="fa-solid fa-arrow-right ms-2"></i>
                </button>
            </div>

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

      <section className="container mb-5">
        <div className="section-psi text-center shadow">
            <h2 className="mb-3">Para Psicólogas</h2>
            <p className="mb-4">Deseja contribuir para uma rede de apoio ética e segura?</p>
            <button className="btn btn-light btn-lg px-5" style={{color: 'var(--purple-main)', fontWeight: '700'}}>
              Saiba como contribuir
            </button>
        </div>
      </section>
    </>
  )
}

export default Home;