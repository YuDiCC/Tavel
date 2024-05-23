document.addEventListener("DOMContentLoaded", function() {
    // Cargar los datos del JSON
    fetch('js/paquetes.json')
    .then(response => response.json())
    .then(data => {
        // Obtener la lista de paquetes
        const paquetes = data.paquetes;

        // Mostrar los paquetes en la página
        const paquetesContainer = document.getElementById('paquetes-container');
        paquetes.forEach(paquete => {
            const paqueteHTML = `
            <div class="col-12 col-lg-6" >
            <div class="single-top-popular-course d-flex align-items-center flex-wrap mb-30 wow fadeInUp" data-wow-delay="400ms">
                <div class="popular-course-content">
                    <h5>${paquete.nombre}</h5>
                    <span>Recorrido: ${paquete.recorrido}</span>
                    <span>Punto de partida: ${paquete.punto_de_partida}</span><br>
                    
                    <p class="d-inline-flex gap-1">
                        <button class="btn" type="button" data-bs-toggle="collapse" data-bs-target="#comida-${paquete.nombre.replace(/ /g, '-')}" aria-expanded="false" aria-controls="collapseExample">
                        <i class="bi bi-cup-hot"> Restaurantes en ${paquete.id}</i>
                        </button>
                    </p>
                    <div class="collapse" id="comida-${paquete.nombre.replace(/ /g, '-')}">
                        <div class="card card-body">
                            ${renderLugares(paquete.lugares_para_comer)}
                        </div>
                    </div><br>

                    <p class="d-inline-flex gap-1">
                        <button class="btn" type="button" data-bs-toggle="collapse" data-bs-target="#hospedaje-${paquete.nombre.replace(/ /g, '-')}" aria-expanded="false" aria-controls="collapseExample">
                        <i class="bi bi-house-check"> Hospedajes en ${paquete.id}</i>
                        </button>
                    </p>
                    <div class="collapse" id="hospedaje-${paquete.nombre.replace(/ /g, '-')}">
                        <div class="card card-body">
                            ${renderLugares(paquete.lugares_para_hospedarse)}
                        </div>
                    </div><br>
                </div>
                <div class="popular-course-thumb bg-img" style="background-image: url(${paquete.imagen});"></div>
            </div>
            </div>
            `;
            paquetesContainer.innerHTML += paqueteHTML;
        });
    })
    .catch(error => console.error('Error al cargar los datos:', error));

    // Función para renderizar los lugares
    function renderLugares(lugares) {
        return lugares.map(lugar => `
            <div>
                <h6>${lugar.nombre}</h6>
                <span>Ubicación: ${lugar.ubicacion}</span>
                <iframe src="${lugar.src_ubicacion}" width="200" height="200" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                ${lugar.platos ? `<ul>${lugar.platos.map(plato => `<li><i class="bi bi-cup-straw">${plato}</i></li>`).join('')}</ul>` : ''}
                ${lugar.precio_por_noche ? `<p>Precio por noche: ${lugar.precio_por_noche}</p>` : ''}
                ${lugar.precio ? `<p>Precio: ${lugar.precio}</p>` : ''}
            </div><br>
        `).join('');
    }
});
