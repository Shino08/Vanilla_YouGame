import ico1 from "../assets/images/icoGenders/icons8-estrategia-100.png";
import ico2 from "../assets/images/icoGenders/icons8-puñetazo-frontal-100.png";
import ico3 from "../assets/images/icoGenders/icons8-leyendas-moviles-bb-100.png";
import ico4 from "../assets/images/icoGenders/icons8-aventura-100.png";
import ico5 from "../assets/images/icoGenders/icons8-trofeo-100.png";
import ico6 from "../assets/images/icoGenders/icons8-rpg-game-100.png";
import ico7 from "../assets/images/icoGenders/icons8-car-100.png";
import ico8 from "../assets/images/icoGenders/icons8-jet-100.png";
import ico9 from "../assets/images/icoGenders/icons8-phantom.gif";
import ico10 from "../assets/images/icoGenders/icons8-gamepad-100.png";

const GendersGames = () => {
    // Datos de los géneros (se mantiene igual)
    const genders = [
        { name: "Estrategia", icon: ico1 },
        { name: "Acción", icon: ico2 },
        { name: "Multijugador", icon: ico3 },
        { name: "Aventura", icon: ico4 },
        { name: "Deportes", icon: ico5 },
        { name: "Rol (RPG)", icon: ico6 },
        { name: "Carreras", icon: ico7 },
        { name: "Simulación", icon: ico8 },
        { name: "Terror", icon: ico9 },
        { name: "Plataformas", icon: ico10 },
    ];

    // Función para mezclar (shuffle) un array (se mantiene igual)
    const shuffleArray = (array) => {
        return array.sort(() => Math.random() - 0.5);
    };

    // Mezclar los géneros (se mantiene igual)
    const shuffledGenders = shuffleArray([...genders]).slice(0, 5);

    // Función para generar las tarjetas de género (mejorada visualmente)
    const generateGenderCards = () => {
        return shuffledGenders
            .map(
                (gender) => `
                <div class="group flex flex-col items-center transition-all duration-300 hover:-translate-y-1">
                    <div class="w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-purple-500/20 p-2 group-hover:border-purple-500/50 group-hover:shadow-lg transition-all duration-300">
                        <div class="bg-gradient-to-br from-gray-50 to-gray-100 w-full h-full rounded-full flex items-center justify-center group-hover:bg-white transition-all duration-300">
                            <img src="${gender.icon}" alt="${gender.name}" class="w-12 h-12 md:w-14 md:h-14 object-contain transition-transform duration-300 group-hover:scale-110">
                        </div>
                    </div>
                    <span class="mt-3 text-sm md:text-base font-medium text-gray-700 group-hover:text-purple-600 transition-colors duration-300">${gender.name}</span>
                </div>
            `
            )
            .join("");
    };

    // HTML dinámico mejorado
    const html = `
        <section class="py-8 bg-gray-50 ">
            <div class="container mx-auto px-4 sm:px-6 lg:px-8">
                <!-- Encabezado mejorado -->
                <div class="flex flex-col md:flex-row justify-between items-start md:items-end mb-10">
                    <div>
                        <h2 class="text-2xl md:text-3xl font-bold text-gray-900">
                            Explora por <span class="text-purple-600">Género</span>
                        </h2>
                        <p class="text-gray-600 mt-1">Descubre juegos de tu categoría favorita</p>
                    </div>
                    <a href="/generos" class="mt-4 md:mt-0 inline-flex items-center text-purple-600 hover:text-purple-800 font-medium transition-colors">
                        Ver todos los géneros
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                        </svg>
                    </a>
                </div>

                <!-- Grid de géneros mejorado -->
                <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 md:gap-8">
                    ${generateGenderCards()}
                </div>
            </div>
        </section>
    `;

    const init = () => {
        // Lógica adicional si es necesario
    };

    return { html, init };
};

export default GendersGames;