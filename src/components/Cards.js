import img1 from "../assets/images/imgCards/MP.Banner.png";
import img2 from "../assets/images/imgCards/halo-reach-banner.png";
import img3 from "../assets/images/imgCards/blackmyth-banner.png";
import img4 from "../assets/images/imgCards/godofwar4-header-BANNER.jpg";
import img5 from "../assets/images/imgCards/MP3-Banner.jpg";
import img6 from "../assets/images/imgCards/Sonic.Banner.png";
import logo1 from "../assets/images/icoGenders/icons8-ps5-100.png";
import logo2 from "../assets/images/icoGenders/icons8-nintendo-switch-100.png";
import logo3 from "../assets/images/icoGenders/icons8-xbox-one-100.png";
import card1 from "../assets/images/imgOfertsGames/MP.png";
import card2 from "../assets/images/imgOfertsGames/1718149590-black-myth-wukong-ps5-pre-orden-0.png";
import card3 from "../assets/images/imgOfertsGames/1648326552-halo-5-guardians-xbox-series-xs-0.png";
import card4 from "../assets/images/imgOfertsGames/GOW PS5.png";
import card5 from "../assets/images/imgOfertsGames/max-payne-3-xbox-one-0.png";
import card6 from "../assets/images/imgOfertsGames/Sonic.jpg";

const CardsGames = () => {
  // Datos de los juegos populares (se mantiene igual)
  const games = [
    {
      background: img3,
      platform: "Play Station",
      platformLogo: logo1,
      discount: "HASTA 80% OFF",
      image: card2,
      alt: "Black Myth: Wukong",
      textColor: "text-white",
    },
    {
      background: img4,
      platform: "Play Station",
      platformLogo: logo1,
      discount: "HASTA 80% OFF",
      image: card4,
      alt: "Black Myth: Wukong",
      textColor: "text-white",
    },
    {
      background: img1,
      platform: "Nintendo Switch",
      platformLogo: logo2,
      discount: "HASTA 80% OFF",
      image: card1,
      alt: "Mario Party",
      textColor: "text-black",
    },
    {
      background: img6,
      platform: "Nintendo Switch",
      platformLogo: logo2,
      discount: "HASTA 80% OFF",
      image: card6,
      alt: "Mario Party",
      textColor: "text-black",
    },
    {
      background: img2,
      platform: "Xbox Series S",
      platformLogo: logo3,
      discount: "HASTA 80% OFF",
      image: card3,
      alt: "Halo 5: Guardians",
      textColor: "text-white",
    },
    {
      background: img5,
      platform: "Xbox Series S",
      platformLogo: logo3,
      discount: "HASTA 80% OFF",
      image: card5,
      alt: "Halo 5: Guardians",
      textColor: "text-white",
    },
  ];

  let currentIndex = 0;

  // Función para generar las tarjetas (mejorada visualmente)
  const generateGameCards = (startIndex) => {
    const visibleGames = games.slice(startIndex, startIndex + 3);
    return visibleGames
      .map(
        (game) => `
        <div 
          style="background-image: url('${game.background}')" 
          class="relative rounded-xl overflow-hidden shadow-lg h-72 md:h-80 transition-all duration-500 transform hover:scale-[1] group"
        >
          <!-- Overlay para mejorar legibilidad -->
          <div class="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
          <div class="relative flex items-center h-full p-6 z-10">
            <!-- Contenido izquierdo -->
            <div class="w-1/2 flex flex-col space-y-4">
              <div class="bg-white/20 backdrop-blur-sm rounded-lg p-2 inline-flex items-center mb-4 border border-white/10">
                <img src="${game.platformLogo}" alt="${game.platform} Logo" class="h-8 w-8 mr-2">
                <span class="text-white text-xs font-bold uppercase tracking-wider">${game.platform}</span>
              </div>
              <div class="bg-purple-600/90 text-white px-3 py-1 rounded-full text-xs font-bold tracking-wider inline-block">
                ${game.discount}
              </div>
              <button class="mt-4 bg-white text-purple-800 hover:bg-purple-100 px-4 py-2 rounded-full text-sm font-bold transition-colors duration-300 flex items-center w-fit">
                Ver oferta
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </button>
            </div>
            <!-- Imagen del juego -->
            <div class="w-1/2 flex justify-center relative">
              <img 
                src="${game.image}" 
                alt="${game.alt}" 
                class="h-48 md:h-56 object-contain transition-transform duration-500 group-hover:scale-110"
              >
            </div>
          </div>
        </div>
      `
      )
      .join("");
  };

  // HTML dinámico mejorado
  const html = `
    <section class="py-12 bg-gray-50 relative">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Encabezado mejorado -->
        <div class="flex flex-col md:flex-row justify-between items-start md:items-end mb-10">
          <div>
            <h2 class="text-2xl md:text-3xl font-bold text-gray-900">
              Juegos <span class="text-purple-600">Destacados</span>
            </h2>
            <p class="text-gray-600 mt-1">Las mejores ofertas en juegos populares</p>
          </div>
          <a href="#" class="mt-4 md:mt-0 inline-flex items-center text-purple-600 hover:text-purple-800 font-medium transition-colors">
            Ver todos
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </a>
        </div>
        <!-- Contenedor de tarjetas con transición -->
        <div class="relative overflow-hidden">
          <div 
            id="cardsContainer" 
            class="grid grid-cols-1 md:grid-cols-3 gap-6 transition-opacity duration-500 ease-in-out opacity-100"
          >
            ${generateGameCards(currentIndex)}
          </div>
        </div>
        <!-- Controles de navegación mejorados -->
        <div class="flex justify-center mt-8 space-x-4">
          <button 
            id="prevButton" 
            class="h-10 w-10 bg-white hover:bg-gray-100 rounded-full shadow-md flex items-center justify-center transition-all duration-300 hover:scale-110 focus:outline-none"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <!-- Indicadores circulares -->
          <div class="flex items-center space-x-2 mx-4" id="indicatorsContainer">
            ${Array.from({ length: Math.ceil(games.length / 3) })
              .map(
                (_, index) => `
                <button 
                  data-index="${index}"
                  class="indicator h-2.5 w-2.5 rounded-full transition-all duration-300 ${index === 0 ? 'bg-purple-600 w-6' : 'bg-gray-300'}"
                ></button>
              `
              )
              .join("")}
          </div>
          <button 
            id="nextButton" 
            class="h-10 w-10 bg-white hover:bg-gray-100 rounded-full shadow-md flex items-center justify-center transition-all duration-300 hover:scale-110 focus:outline-none"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  `;

  // Función de inicialización mejorada
  const init = () => {
    const cardsContainer = document.getElementById("cardsContainer");
    const prevButton = document.getElementById("prevButton");
    const nextButton = document.getElementById("nextButton");
    const indicators = document.querySelectorAll(".indicator");

    if (!cardsContainer || !prevButton || !nextButton || !indicators) return;

    // Efecto de transición suave
    const updateCards = () => {
      // Agregar clase para desvanecer las tarjetas actuales
      cardsContainer.classList.remove('opacity-100');
      cardsContainer.classList.add('opacity-0');

      setTimeout(() => {
        // Actualizar el contenido de las tarjetas
        cardsContainer.innerHTML = generateGameCards(currentIndex);

        // Restaurar la opacidad después de actualizar el contenido
        cardsContainer.classList.remove('opacity-0');
        cardsContainer.classList.add('opacity-100');

        // Actualizar indicadores
        indicators.forEach((indicator, index) => {
          const isActive = index === Math.floor(currentIndex / 3);
          indicator.classList.toggle('bg-purple-700', isActive);
          indicator.classList.toggle('bg-gray-400', !isActive);
          indicator.classList.toggle('w-6', isActive);
          indicator.classList.toggle('w-2.5', !isActive);
        });
      }, 300); // Duración de la transición
    };

    // Eventos de navegación
    prevButton.addEventListener("click", () => {
      currentIndex = currentIndex > 0 ? currentIndex - 3 : games.length - 3;
      updateCards();
    });

    nextButton.addEventListener("click", () => {
      currentIndex = currentIndex + 3 < games.length ? currentIndex + 3 : 0;
      updateCards();
    });

    // Eventos para los indicadores
    indicators.forEach(indicator => {
      indicator.addEventListener("click", () => {
        currentIndex = parseInt(indicator.dataset.index) * 3;
        updateCards();
      });
    });
  };

  return { html, init };
};

export default CardsGames;