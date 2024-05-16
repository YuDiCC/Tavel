fetch('js/destinos.json')
  .then(response => response.json())
  .then(data => {

    const destinosContainer = document.getElementById('destinos-container');

    data.forEach(destino => {
      const destinoHTML = `
      <div class="col-12 col-lg-6" >
        <div class="single-top-popular-course d-flex align-items-center flex-wrap mb-30 wow fadeInUp" data-wow-delay="${destino.delay}">
            <div class="popular-course-content">
                <h5>${destino.nombre}</h5>
                <p>${destino.informacion}</p>
                <a href="${destino.link}" class="btn academy-btn btn-sm">Ver más</a>
            </div>
            <div class="popular-course-thumb bg-img" style="background-image: url(${destino.img});">
            </div>
        </div>
      </div>
    `;
      destinosContainer.innerHTML += destinoHTML;
    });
  })
  .catch(error => console.error('Error al cargar los proyectos:', error));
  