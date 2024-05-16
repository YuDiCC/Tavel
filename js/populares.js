fetch('js/populares.json')
  .then(response => response.json())
  .then(data => {

    const popularesContainer = document.getElementById('destinos-populares');

    data.forEach(popular => {
      const popularHTML = `
      <div class="col-12 col-lg-6" >
        <div class="single-top-popular-course d-flex align-items-center flex-wrap mb-30 wow fadeInUp" data-wow-delay="${popular.delay}">
            <div class="popular-course-content">
                <h5>${popular.nombre}</h5>
                <span>${popular.lugar}</span>
                <a href="${popular.link}" class="btn academy-btn btn-sm">Ver más</a>
            </div>
            <div class="popular-course-thumb bg-img" style="background-image: url(${popular.img});height: 200px;">
            </div>
        </div>
      </div>
    `;
      popularesContainer.innerHTML += popularHTML;
    });
  })
  .catch(error => console.error('Error al cargar los proyectos:', error));