const VideoCarousel = () => {
  const videos = [
    { id: "eRe2m5I86Hc", titulo: "Existe vida além da agressão" },
    { id: "ea7PQefzNz8", titulo: "Feminicídio Zero" },
    { id: "0mVGbFG0KU8", titulo: "Quebre o silêncio" },
    { id: "jv7FWOmMU70", titulo: "Violência Doméstica, 2 Minutos para Entender" },
    
  ];

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-5">Vozes que Inspiram</h2>
        <div id="videoCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            {videos.map((video, index) => (
              <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                <div className="ratio ratio-16x9 mx-auto" style={{ maxWidth: '800px' }}>
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            ))}
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#videoCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon bg-dark rounded-circle"></span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#videoCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon bg-dark rounded-circle"></span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default VideoCarousel;