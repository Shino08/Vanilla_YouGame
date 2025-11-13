import imgCarousel1 from "../assets/images/imgCarousel/nintendo_juegos.png";
import imgCarousel2 from "../assets/images/imgCarousel/ps5_juegos.png";
import imgCarousel3 from "../assets/images/imgCarousel/xbox_juegos.png";
import imgBannerNintendo from "../assets/images/imgCarousel/imgBannerNintendo.png";
import imgBannerPS5 from "../assets/images/imgCarousel/imgBannerPs5.png";
import imgBannerXbox from "../assets/images/imgCarousel/imgBannerXbox.png";

const Carousel = () => {
  // Objeto que guarda las rutas de las imágenes, textos y colores dinámicos del carousel
  const carouselData = [
    {
      banner: imgBannerNintendo,
      image: imgCarousel1, // Imagen principal del carousel
      title: "La Mejor Oferta Online en Videojuegos",
      subtitle: "EXPERIENCIAS ÉPICAS.",
      discount: "HASTA 70% DE DESCUENTO",
      color: "#FFFFFF", // Color blanco para Nintendo
    },
    {
      banner: imgBannerPS5,
      image: imgCarousel2,
      title: "Consolas de Última Generación",
      subtitle: "IMAGINA LO IMPOSIBLE.",
      discount: "HASTA 50% DE DESCUENTO",
      color: "#00F0FF", // Color azul cian para PS5
    },
    {
      banner: imgBannerXbox,
      image: imgCarousel3,
      title: "Accesorios Gaming Exclusivos",
      subtitle: "DOMINA EL JUEGO.",
      discount: "HASTA 40% DE DESCUENTO",
      color: "#1CE81C", // Color verde para Xbox
    },
  ];

  let currentIndex = 0; // Índice actual del carousel
  let autoChangeInterval; // Variable para almacenar el intervalo

  const html = `
     <section class="my-6">
        <div class="container mx-auto px-4 overflow-visible relative">
          <!-- Contenedor principal del carousel -->
          <div id="carousel-container" class="relative overflow-hidden shadow-md w-full h-[400px] sm:h-[500px] rounded-lg">
            <!-- Fondo desenfocado -->
            <div class="absolute inset-0 z-0 bg-cover bg-center rounded-lg transition-all duration-500" style="background-image: url('${carouselData[currentIndex].banner}');"></div>
  
            <!-- Contenido del carousel -->
            <div class="flex flex-col sm:flex-row items-center justify-center h-full relative z-10 transition-opacity duration-500" id="carousel-content">
              <!-- Panel de imagen (primero en móvil) -->
              <div class="w-full sm:w-1/2 flex justify-center p-4">
                <img id="carousel-image" src="${carouselData[currentIndex].image}" alt="Carousel Image" class="max-h-[200px] sm:max-h-[300px] object-contain transition-opacity duration-500">
              </div>
  
              <!-- Panel de texto -->
              <div class="w-full sm:w-1/2 p-4 text-center sm:text-left overflow-hidden text-white">
                <h2 id="carousel-title" class="text-lg sm:text-xl font-medium mb-2">${carouselData[currentIndex].title}</h2>
                <h1 id="carousel-subtitle" class="text-3xl sm:text-5xl font-bold mb-4 line-clamp-2">${carouselData[currentIndex].subtitle}</h1>
                <p id="carousel-discount" class="text-xl sm:text-3xl font-bold">${carouselData[currentIndex].discount}</p>
              </div>
            </div>
  
            <!-- Botón izquierdo -->
            <button id="carousel-prev" class="absolute top-1/2 -translate-y-1/2 left-4 sm:left-8 bg-gray-700 rounded-full p-3 shadow-md flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 z-10">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
  
            <!-- Botón derecho -->
            <button id="carousel-next" class="absolute top-1/2 -translate-y-1/2 right-4 sm:right-8 bg-gray-700 rounded-full p-3 shadow-md flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 z-10">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
  
            <!-- Indicadores -->
            <div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
              ${carouselData.map((_, index) => `
                <button id="indicator-${index}" class="transition-all duration-300 h-2 sm:h-3 ${index === currentIndex ? 'w-6 sm:w-8 bg-white' : 'w-2 sm:w-3 bg-white bg-opacity-50'} rounded-full"></button>
              `).join('')}
            </div>
          </div>
        </div>
      </section>
  `;

  const init = () => {
    const container = document.getElementById("carousel-container");

    if (!container) return;

    const title = document.getElementById("carousel-title");
    const subtitle = document.getElementById("carousel-subtitle");
    const discount = document.getElementById("carousel-discount");
    const image = document.getElementById("carousel-image");
    const content = document.getElementById("carousel-content");
    const prevButton = document.getElementById("carousel-prev");
    const nextButton = document.getElementById("carousel-next");

    // Función para actualizar el carousel con animación
    const updateCarousel = (index) => {
      // Desvanecer el contenido actual
      content.style.opacity = "0";

      setTimeout(() => {
        // Actualizar datos del carousel
        currentIndex = index;
        title.textContent = carouselData[currentIndex].title;
        subtitle.textContent = carouselData[currentIndex].subtitle;
        discount.textContent = carouselData[currentIndex].discount;
        image.src = carouselData[currentIndex].image;

        // Actualizar fondo desenfocado
        const backgroundDiv = container.querySelector('.bg-cover');
        backgroundDiv.style.backgroundImage = `url('${carouselData[currentIndex].banner}')`;

        // Obtener el color dinámico
        const color = carouselData[currentIndex].color;

        // Actualizar color del texto
        title.style.color = color;
        subtitle.style.color = color;
        discount.style.color = color;

        // Actualizar color de los botones de navegación
        prevButton.style.backgroundColor = color;
        nextButton.style.backgroundColor = color;

        // Asegurar que el texto dentro de los botones sea oscuro
        prevButton.querySelector('svg').style.color = "#1E293B"; // Texto oscuro
        nextButton.querySelector('svg').style.color = "#1E293B"; // Texto oscuro

        // Actualizar indicadores
        document.querySelectorAll('[id^="indicator-"]').forEach((indicator, i) => {
          indicator.classList.toggle("w-6", i === currentIndex);
          indicator.classList.toggle("w-2", i !== currentIndex);

          // Cambiar el color del indicador activo
          indicator.style.backgroundColor = i === currentIndex ? color : `${color}80`; // Opacidad reducida para inactivos
        });

        // Mostrar el nuevo contenido con fadeIn
        setTimeout(() => {
          content.style.opacity = "1";
        }, 100); // Pequeño retraso para sincronizar la animación
      }, 500); // Duración de la animación de desvanecimiento
    };

    // Aplicar estilos iniciales al cargar la página
    const initialColor = carouselData[currentIndex].color;
    prevButton.style.backgroundColor = initialColor;
    nextButton.style.backgroundColor = initialColor;
    prevButton.querySelector('svg').style.color = "#1E293B"; // Texto oscuro
    nextButton.querySelector('svg').style.color = "#1E293B"; // Texto oscuro

    // Función para avanzar automáticamente
    const autoChange = () => {
      const newIndex = currentIndex === carouselData.length - 1 ? 0 : currentIndex + 1;
      updateCarousel(newIndex);
    };

    // Iniciar el intervalo automático
    autoChangeInterval = setInterval(autoChange, 5000);

    // Evento para el botón anterior
    prevButton.addEventListener("click", () => {
      clearInterval(autoChangeInterval); // Detener el intervalo al interactuar manualmente
      const newIndex = currentIndex === 0 ? carouselData.length - 1 : currentIndex - 1;
      updateCarousel(newIndex);
      autoChangeInterval = setInterval(autoChange, 5000); // Reiniciar el intervalo
    });

    // Evento para el botón siguiente
    nextButton.addEventListener("click", () => {
      clearInterval(autoChangeInterval); // Detener el intervalo al interactuar manualmente
      const newIndex = currentIndex === carouselData.length - 1 ? 0 : currentIndex + 1;
      updateCarousel(newIndex);
      autoChangeInterval = setInterval(autoChange, 5000); // Reiniciar el intervalo
    });

    // Evento para los indicadores
    document.querySelectorAll('[id^="indicator-"]').forEach((indicator, index) => {
      indicator.addEventListener("click", () => {
        clearInterval(autoChangeInterval); // Detener el intervalo al interactuar manualmente
        updateCarousel(index);
        autoChangeInterval = setInterval(autoChange, 5000); // Reiniciar el intervalo
      });
    });
  };

  return { html, init };
};

export default Carousel;