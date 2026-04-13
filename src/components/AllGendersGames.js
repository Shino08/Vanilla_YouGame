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

const AllGendersGames = () => {
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

    const generateGenderCards = () => {
        return genders
            .map(
                (gender) => `
                <div class="group flex flex-col items-center transition-all duration-300 hover:-translate-y-1">
                    <div class="w-24 h-24 md:w-28 md:h-28 rounded-full border-2 border-purple-500/20 p-2 group-hover:border-purple-500/50 group-hover:shadow-lg transition-all duration-300">
                        <div class="bg-gradient-to-br from-gray-50 to-gray-100 w-full h-full rounded-full flex items-center justify-center group-hover:bg-white transition-all duration-300">
                            <img src="${gender.icon}" alt="${gender.name}" class="w-14 h-14 md:w-16 md:h-16 object-contain transition-transform duration-300 group-hover:scale-110">
                        </div>
                    </div>
                    <span class="mt-3 text-sm md:text-base font-medium text-gray-700 group-hover:text-purple-600 transition-colors duration-300">${gender.name}</span>
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
                    Explora por <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-800">Género</span>
                </h1>
                <p class="text-gray-600 text-lg max-w-2xl mx-auto">Descubre juegos de tu categoría favorita. Elegí tu género y encontrá tu próxima aventura.</p>
            </div>
        </section>

        <!-- Grid completo -->
        <section class="py-12 bg-gray-50">
            <div class="container mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between items-center mb-10">
                    <p class="text-gray-600"><span class="font-bold text-gray-900">${genders.length}</span> géneros disponibles</p>
                    <a href="/" class="inline-flex items-center text-purple-600 hover:text-purple-800 font-medium transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd" />
                        </svg>
                        Volver al inicio
                    </a>
                </div>
                <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 md:gap-10">
                    ${generateGenderCards()}
                </div>
            </div>
        </section>
    `;

    const init = () => {};

    return { html, init };
};

export default AllGendersGames;
