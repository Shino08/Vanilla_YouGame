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

const AllCardsGames = () => {
  const games = [
    { background: img3, platform: "Play Station", platformLogo: logo1, discount: "HASTA 80% OFF", image: card2, alt: "Black Myth: Wukong", textColor: "text-white" },
    { background: img4, platform: "Play Station", platformLogo: logo1, discount: "HASTA 80% OFF", image: card4, alt: "God of War", textColor: "text-white" },
    { background: img1, platform: "Nintendo Switch", platformLogo: logo2, discount: "HASTA 80% OFF", image: card1, alt: "Mario Party", textColor: "text-black" },
    { background: img6, platform: "Nintendo Switch", platformLogo: logo2, discount: "HASTA 80% OFF", image: card6, alt: "Sonic", textColor: "text-black" },
    { background: img2, platform: "Xbox Series S", platformLogo: logo3, discount: "HASTA 80% OFF", image: card3, alt: "Halo 5: Guardians", textColor: "text-white" },
    { background: img5, platform: "Xbox Series S", platformLogo: logo3, discount: "HASTA 80% OFF", image: card5, alt: "Max Payne 3", textColor: "text-white" },
  ];

  const generateGameCards = () => {
    return games
      .map(
        (game) => `
        <div 
          style="background-image: url('${game.background}')" 
          class="relative rounded-xl overflow-hidden shadow-lg h-72 md:h-80 transition-all duration-500 transform hover:scale-[1.02] group bg-cover bg-center"
        >
          <div class="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
          <div class="relative flex items-center h-full p-6 z-10">
            <div class="w-1/2 flex flex-col space-y-4">
              <div class="bg-white/20 backdrop-blur-sm rounded-lg p-2 inline-flex items-center mb-4 border border-white/10">
                <img src="${game.platformLogo}" alt="${game.platform} Logo" class="h-8 w-8 mr-2">
                <span class="text-white text-xs font-bold uppercase tracking-wider">${game.platform}</span>
              </div>
              <div class="bg-purple-600/90 text-white px-3 py-1 rounded-full text-xs font-bold tracking-wider inline-block w-fit">
                ${game.discount}
              </div>
              <button class="mt-4 bg-white text-purple-800 hover:bg-purple-100 px-4 py-2 rounded-full text-sm font-bold transition-colors duration-300 flex items-center w-fit">
                Ver oferta
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </button>
            </div>
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

  const html = `
    <!-- Hero -->
    <section class="bg-white py-12 border-b border-gray-200">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
          Juegos <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-800">Destacados</span>
        </h1>
        <p class="text-gray-600 text-lg max-w-2xl mx-auto">Las mejores ofertas en juegos populares. Encontrá tu próximo favorito.</p>
      </div>
    </section>

    <!-- Grid completo -->
    <section class="py-12 bg-gray-50">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center mb-8">
          <p class="text-gray-600"><span class="font-bold text-gray-900">${games.length}</span> juegos destacados</p>
          <a href="/" class="inline-flex items-center text-purple-600 hover:text-purple-800 font-medium transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd" />
            </svg>
            Volver al inicio
          </a>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          ${generateGameCards()}
        </div>
      </div>
    </section>
  `;

  const init = () => {};

  return { html, init };
};

export default AllCardsGames;
