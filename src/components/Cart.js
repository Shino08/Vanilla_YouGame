import Resumen from "./Resumen";
import img1 from "../assets/images/imgOfertsGames/Dragon Ball Sparking Zero.png"
import img2 from "../assets/images/imgOfertsGames/1624924582-call-of-duty-modern-warfare-ps5.png"
import img3 from "../assets/images/imgOfertsGames/1718149590-black-myth-wukong-ps5-pre-orden-0.png"

const Cart = () => {

    const html = `
     <div class="container mx-auto px-4 py-10">
        <!-- Título del Carrito -->

        <!-- Contenido del Carrito -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <!-- Lista de Juegos -->
            <div class="lg:col-span-2 bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                <!-- Encabezado (solo en desktop) -->
                <div class="hidden md:grid grid-cols-12 gap-4 pb-4 border-b border-gray-200 mb-4 text-gray-600">
                    <div class="col-span-6 font-medium">JUEGO</div>
                    <div class="col-span-2 font-medium text-center">PRECIO</div>
                    <div class="col-span-2 font-medium text-center">CANTIDAD</div>
                    <div class="col-span-2 font-medium text-right">TOTAL</div>
                </div>

                <!-- Juego 1 -->
                <div class="grid grid-cols-12 gap-4 items-center py-4 border-b border-gray-200">
                    <div class="col-span-6 flex items-center space-x-4">
                        <div class="relative">
                            <img src="${img1}" alt="Dragon Ball Sparking Zero"
                                class="w-20 h-20 object-contain border border-gray-200 rounded-lg">
                        </div>
                        <div>
                            <h3 class="font-bold text-gray-800">Dragon Ball Sparking Zero</h3>
                            <p class="text-sm text-gray-500">PS5 | Anime | Lanzamiento: 10/10/2024</p>
                            <div class="flex items-center mt-1">
                                <div class="flex text-yellow-400 text-sm">
                                    ★★★★☆
                                </div>
                                <span class="ml-2 text-xs text-gray-500">4.5/5</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-span-2 text-center">
                        <span class="text-gray-700 font-medium">$59.99</span>
                        <span class="block text-xs text-gray-400 line-through">$69.99</span>
                    </div>
                    <div class="col-span-2 flex justify-center">
                        <div class="flex items-center border border-gray-300 rounded-md">
                            <button class="px-3 py-1 bg-gray-100 hover:bg-gray-200 transition-colors">-</button>
                            <input type="number" value="1" min="1"
                                class="w-12 text-center px-0 py-1 border-x border-gray-300 focus:outline-none focus:ring-1 focus:ring-purple-500">
                            <button class="px-3 py-1 bg-gray-100 hover:bg-gray-200 transition-colors">+</button>
                        </div>
                    </div>
                    <div class="col-span-2 flex items-center justify-end space-x-3">
                        <span class="font-bold text-gray-800">$59.99</span>
                        <button class="text-red-500 hover:text-red-700 transition-colors" aria-label="Eliminar juego">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>

                <!-- Juego 2 -->
                <div class="grid grid-cols-12 gap-4 items-center py-4 border-b border-gray-200">
                    <div class="col-span-6 flex items-center space-x-4">
                        <img src="${img2}"
                            alt="Call of Duty Modern Warfare"
                            class="w-20 h-20 object-contain border border-gray-200 rounded-lg">
                        <div>
                            <h3 class="font-bold text-gray-800">Call of Duty: Modern Warfare</h3>
                            <p class="text-sm text-gray-500">PS5 | Shooter | Multijugador</p>
                            <div class="flex items-center mt-1">
                                <div class="flex text-yellow-400 text-sm">
                                    ★★★★☆
                                </div>
                                <span class="ml-2 text-xs text-gray-500">4.2/5</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-span-2 text-center">
                        <span class="text-gray-700 font-medium">$35.99</span>
                        <span class="block text-xs text-gray-400 line-through">$49.99</span>
                    </div>
                    <div class="col-span-2 flex justify-center">
                        <div class="flex items-center border border-gray-300 rounded-md">
                            <button class="px-3 py-1 bg-gray-100 hover:bg-gray-200 transition-colors">-</button>
                            <input type="number" value="1" min="1"
                                class="w-12 text-center px-0 py-1 border-x border-gray-300 focus:outline-none focus:ring-1 focus:ring-purple-500">
                            <button class="px-3 py-1 bg-gray-100 hover:bg-gray-200 transition-colors">+</button>
                        </div>
                    </div>
                    <div class="col-span-2 flex items-center justify-end space-x-3">
                        <span class="font-bold text-gray-800">$35.99</span>
                        <button class="text-red-500 hover:text-red-700 transition-colors" aria-label="Eliminar juego">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>

                <!-- Juego 3 -->
                <div class="grid grid-cols-12 gap-4 items-center py-4">
                    <div class="col-span-6 flex items-center space-x-4">
                        <div class="relative">
                            <img src="${img3}" alt="Black Myth Wukong"
                                class="w-20 h-20 object-contain border border-gray-200 rounded-lg">
                        </div>
                        <div>
                            <h3 class="font-bold text-gray-800">Black Myth: Wukong</h3>
                            <p class="text-sm text-gray-500">PS5 | Aventura | Lanzamiento: 20/08/2024</p>
                            <div class="flex items-center mt-1">
                                <div class="flex text-yellow-400 text-sm">
                                    ★★★★★
                                </div>
                                <span class="ml-2 text-xs text-gray-500">4.9/5 (Reseñas)</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-span-2 text-center">
                        <span class="text-gray-700 font-medium">$69.99</span>
                    </div>
                    <div class="col-span-2 flex justify-center">
                        <div class="flex items-center border border-gray-300 rounded-md">
                            <button class="px-3 py-1 bg-gray-100 hover:bg-gray-200 transition-colors">-</button>
                            <input type="number" value="1" min="1"
                                class="w-12 text-center px-0 py-1 border-x border-gray-300 focus:outline-none focus:ring-1 focus:ring-purple-500">
                            <button class="px-3 py-1 bg-gray-100 hover:bg-gray-200 transition-colors">+</button>
                        </div>
                    </div>
                    <div class="col-span-2 flex items-center justify-end space-x-3">
                        <span class="font-bold text-gray-800">$69.99</span>
                        <button class="text-red-500 hover:text-red-700 transition-colors" aria-label="Eliminar juego">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>

                <!-- Acciones del carrito -->
                <div class="mt-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
                    <a href="#"
                        class="text-purple-600 hover:text-purple-800 font-medium flex items-center transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path fill-rule="evenodd"
                                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                                clip-rule="evenodd" />
                        </svg>
                        Seguir comprando
                    </a>
                    <button
                        class="px-5 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md font-medium transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline mr-2" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                        Actualizar carrito
                    </button>
                </div>
            </div>

            ${Resumen().html}

        </div>
    </div>
`;

    const init = () => {
        
    }

    return{
        html,
        init
    }
}

export default Cart;