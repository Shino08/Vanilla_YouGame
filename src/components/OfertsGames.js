import img1 from "../assets/images/imgOfertsGames/Dragon Ball Sparking Zero.png";
import img2 from "../assets/images/imgOfertsGames/Re4.png";
import img3 from "../assets/images/imgOfertsGames/Spiderman-2.png";
import img4 from "../assets/images/imgOfertsGames/1624924582-call-of-duty-modern-warfare-ps5.png";
import img5 from "../assets/images/imgOfertsGames/Spider-Man_Miles_Morales.png";
import img6 from "../assets/images/imgOfertsGames/MIRAGEps5.png";
import img7 from "../assets/images/imgOfertsGames/StreetFightersPS5.png";
import img8 from "../assets/images/imgOfertsGames/MKPS5.png";
import img9 from "../assets/images/imgOfertsGames/RachetPs5.png";
import img10 from "../assets/images/imgOfertsGames/GOW PS5.png";

const OfertsGames = () => {
  // Datos de los juegos (se mantiene igual)
  const games = [
    {
      title: "Dragon Ball Sparking Zero",
      image: img1,
      discount: "40% OFF",
      price: "$59.99",
      originalPrice: "$99.99",
      savings: "$39.99",
    },
    {
      title: "Resident Evil 4 Remake",
      image: img2,
      discount: "40% OFF",
      price: "$47.99",
      originalPrice: "$99.99",
      savings: "$32.00",
    },
    {
      title: "Spider-Man 2",
      image: img3,
      discount: "40% OFF",
      price: "$41.99",
      originalPrice: "$59.99",
      savings: "$18.00",
    },
    {
      title: "Call of Duty: Modern Warfare",
      image: img4,
      discount: "40% OFF",
      price: "$35.99",
      originalPrice: "$59.99",
      savings: "$24.00",
    },
    {
      title: "Spider-Man Miles Morales",
      image: img5,
      discount: "40% OFF",
      price: "$34.99",
      originalPrice: "$49.99",
      savings: "$15.00",
    },
    {
      title: "Assassin's Creed Mirage",
      image: img6,
      discount: "30% OFF",
      price: "$49.99",
      originalPrice: "$69.99",
      savings: "$20.00",
    },
    {
      title: "Street Fighter 6",
      image: img7,
      discount: "25% OFF",
      price: "$44.99",
      originalPrice: "$59.99",
      savings: "$15.00",
    },
    {
      title: "Mortal Kombat 1",
      image: img8,
      discount: "35% OFF",
      price: "$38.99",
      originalPrice: "$59.99",
      savings: "$21.00",
    },
    {
      title: "Ratchet & Clank: Rift Apart",
      image: img9,
      discount: "50% OFF",
      price: "$29.99",
      originalPrice: "$59.99",
      savings: "$30.00",
    },
    {
      title: "Assassin's Creed Valhalla",
      image: img10,
      discount: "60% OFF",
      price: "$19.99",
      originalPrice: "$49.99",
      savings: "$30.00",
    }, // ... (tus datos actuales de games)
  ];

  // Función para mezclar (shuffle) un array (se mantiene igual)
  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  // Mezclar los juegos (se mantiene igual)
  const shuffledGames = shuffleArray([...games]).slice(0, 5);

  // Función para generar el HTML dinámico (mejorada visualmente)
  const generateGameCards = () => {
    return shuffledGames
      .map(
        (game) => `
        <div class="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 hover:border-purple-500 relative group">
          <!-- Badge de descuento -->
          <div class="absolute top-3 right-3 bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full z-10">
            ${game.discount}
          </div>
          
          <!-- Contenedor de imagen con hover effect -->
          <div class="relative overflow-hidden">
            <div class="p-4 flex justify-center bg-gray-50 h-60">
              <img src="${game.image}" alt="${game.title}" class="h-full object-contain transition-transform duration-300 group-hover:scale-105">
            </div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          
          <!-- Detalles del juego -->
          <div class="p-4">
            <h3 class="font-bold text-gray-800 text-sm md:text-base line-clamp-2 min-h-[2.5rem]">${game.title}</h3>
            
            <!-- Precios -->
            <div class="mt-2 flex items-baseline">
              <span class="text-lg font-bold text-gray-900">${game.price}</span>
              <span class="text-sm text-gray-500 line-through ml-2">${game.originalPrice}</span>
            </div>
            
            <!-- Ahorro y botón -->
            <div class="mt-2 flex justify-between items-center">
              <span class="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded">Ahorras ${game.savings}</span>
              <button class="text-xs bg-black hover:bg-gray-800 text-white px-3 py-1 rounded-full transition-colors duration-200">
                + Carrito
              </button>
            </div>
          </div>
        </div>
      `
      )
      .join("");
  };

  // HTML dinámico mejorado
  const html = `
    <section class="py-12 bg-gray-50">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Encabezado mejorado -->
        <div class="flex flex-col md:flex-row justify-between items-start md:items-end mb-8">
          <div>
            <h2 class="text-2xl md:text-3xl font-bold text-gray-900">
              Ofertas <span class="text-purple-600">Exclusivas</span>
            </h2>
            <p class="text-gray-600 mt-1">Los mejores descuentos en juegos premium</p>
          </div>
          <a href="/ofertas" class="mt-4 md:mt-0 inline-flex items-center text-purple-600 hover:text-purple-800 font-medium transition-colors">
            Ver todas las ofertas
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </a>
        </div>

        <!-- Grid de juegos mejorado -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          ${generateGameCards()}
        </div>
      </div>
    </section>
  `;

  const init = () => {
    // Lógica adicional si es necesario
  };

  return { html, init };
};

export default OfertsGames;