// =========================
// LOCALIDADES DE ECATEPEC
// =========================

const localidades = [

    "San Cristóbal Ecatepec",
    "San Pedro Xalostoc",
    "Santa María Tulpetlac",
    "Santa Clara Coatitla",
    "Santa María Chiconautla",
    "San Isidro Atlautenco",
    "San Andrés de la Cañada",
    "Santo Tomás Chiconautla",
    "Guadalupe Victoria",
    "Las Américas",
    "Ciudad Azteca",
    "Jardines de Morelos",
    "Valle de Aragón",
    "Aragón",
    "La Florida",
    "Ejidos de San Cristóbal",
    "Héroes Ecatepec",
    "Vista Hermosa",
    "Tulpetlac",
    "Valle de Guadalupe"

];

// =========================
// IMÁGENES REALES
// =========================

const imagenesEcatepec = [

    "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1200&auto=format&fit=crop",

    "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1200&auto=format&fit=crop",

    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop",

    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop",

    "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",

    "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200&auto=format&fit=crop",

    "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1200&auto=format&fit=crop",

    "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=1200&auto=format&fit=crop",

    "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=1200&auto=format&fit=crop",

    "https://images.unsplash.com/photo-1448630360428-65456885c650?q=80&w=1200&auto=format&fit=crop",

    "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1200&auto=format&fit=crop",

    "https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=1200&auto=format&fit=crop"

];

// =========================
// CONTENEDOR PROPIEDADES
// =========================

const propertyGrid = document.getElementById("propertyGrid");

// =========================
// GENERAR 200 PROPIEDADES
// =========================

for(let i = 0; i < localidades.length; i++){

    for(let j = 1; j <= 10; j++){

        // TIPO

        const tipo = j % 2 === 0 ? "venta" : "renta";

        // PRECIOS

        const precio = tipo === "venta"
            ? `$${(850000 + j * 55000).toLocaleString()} MXN`
            : `$${(6500 + j * 700).toLocaleString()} MXN`;

        // SERVICIOS

        const servicios = [
            "agua",
            "electricidad",
            "metro",
            "escuela",
            "transporte"
        ];

        // IMAGEN

        const imagenActual =
            imagenesEcatepec[(i + j) % imagenesEcatepec.length];

        // CREAR CARD

        const propiedad = document.createElement("div");

        propiedad.classList.add("property-card");

        propiedad.setAttribute(
            "data-location",
            localidades[i].toLowerCase()
        );

        propiedad.setAttribute(
            "data-tipo",
            tipo
        );

        propiedad.setAttribute(
            "data-servicios",
            servicios.join(",")
        );

        // HTML CARD

        propiedad.innerHTML = `

            <img src="${imagenActual}" alt="Casa en Ecatepec">

            <div class="property-info">

                <span class="tag">
                    ${tipo.toUpperCase()}
                </span>

                <h3>
                    Casa ${j} - ${localidades[i]}
                </h3>

                <p class="price">
                    ${precio}
                </p>

                <p>
                    3 habitaciones • 2 baños •
                    Cerca de escuelas y transporte
                </p>

            </div>

        `;

        // MODAL

        propiedad.addEventListener("click", () => {

            mostrarPropiedad(

                `Casa ${j} - ${localidades[i]}`,

                precio,

                `Hermosa propiedad ubicada en ${localidades[i]}.
                Cuenta con agua potable, electricidad,
                transporte cercano y excelente ubicación.`,

                imagenActual

            );

        });

        // AGREGAR

        propertyGrid.appendChild(propiedad);

    }

}

// =========================
// FILTRAR PROPIEDADES
// =========================

function filtrarPropiedades(){

    const texto =
        document.getElementById("searchInput")
        .value
        .toLowerCase();

    const tipo =
        document.getElementById("filtroTipo").value;

    const servicio =
        document.getElementById("filtroServicios").value;

    const propiedades =
        document.querySelectorAll(".property-card");

    propiedades.forEach(propiedad => {

        const localidad =
            propiedad.dataset.location;

        const tipoProp =
            propiedad.dataset.tipo;

        const servicios =
            propiedad.dataset.servicios;

        const coincideTexto =
            localidad.includes(texto);

        const coincideTipo =
            tipo === "" || tipoProp === tipo;

        const coincideServicio =
            servicio === "" || servicios.includes(servicio);

        if(
            coincideTexto &&
            coincideTipo &&
            coincideServicio
        ){

            propiedad.style.display = "block";

        }else{

            propiedad.style.display = "none";

        }

    });

}

// =========================
// MOSTRAR MODAL
// =========================

function mostrarPropiedad(
    titulo,
    precio,
    descripcion,
    imagen
){

    document.getElementById("modal")
        .style.display = "block";

    document.getElementById("modalTitle")
        .innerText = titulo;

    document.getElementById("modalPrice")
        .innerText = precio;

    document.getElementById("modalDescription")
        .innerText = descripcion;

    document.getElementById("modalImg")
        .src = imagen;

}

// =========================
// CERRAR MODAL
// =========================

function cerrarModal(){

    document.getElementById("modal")
        .style.display = "none";

}

// =========================
// CERRAR AL DAR CLICK AFUERA
// =========================

window.onclick = function(event){

    const modal =
        document.getElementById("modal");

    if(event.target == modal){

        modal.style.display = "none";

    }

};

// =========================
// FORMULARIO CONTACTO
// =========================

document.getElementById("formulario")
.addEventListener("submit", function(e){

    e.preventDefault();

    const datos = {

        nombre:
            document.getElementById("nombre").value,

        correo:
            document.getElementById("correo").value,

        mensaje:
            document.getElementById("mensaje").value

    };

    // GUARDAR MENSAJES

    let mensajes =
        JSON.parse(localStorage.getItem("mensajes"))
        || [];

    mensajes.push(datos);

    localStorage.setItem(
        "mensajes",
        JSON.stringify(mensajes)
    );

    alert("Mensaje enviado correctamente.");

    this.reset();

});

// =========================
// SCROLL SUAVE
// =========================

document.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        document.querySelector(
            this.getAttribute("href")
        ).scrollIntoView({

            behavior:"smooth"

        });

    });

});