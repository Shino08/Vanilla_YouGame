import Products from "./Products";
const Filter = () => {

    const html = `

        <nav aria-label="Breadcrumb" class="m-4 -mb-6">
        <ol class="flex items-center space-x-2 text-sm font-medium text-gray-500">
            <li>
                <a href="#" class="hover:text-purple-500">Inicio</a>
            </li>
            <span class="w-6 h-6">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
            </span>
            <li>
                <a href="#" class="hover:text-purple-500">Juegos Casuales</a>
            </li>
        </ol>
    </nav>
    
    <div class="flex flex-col md:flex-row p-4 container mx-auto m-4">
    <aside class="w-full rounded-lg border border-gray-300 md:w-1/4 bg-white p-4 mb-4 md:mb-0">
                <h3 class="text-lg font-bold mb-2 text-purple-600">Filtros</h3>
                <ul class="space-y-4">
                    <!-- Género -->
                    <li>
                        <details class="border-b border-gray-200 pb-2">
                            <summary class="flex justify-between cursor-pointer p-2 text-gray-700 hover:text-black">
                                Género
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M19 9l-7 7-7-7" />
                                </svg>
                            </summary>
                            <ul class="pl-4 mt-2 space-y-2">
                                <li><a href="#" class="text-gray-600 hover:text-purple-500">Acción</a></li>
                                <li><a href="#" class="text-gray-600 hover:text-purple-500">Aventura</a></li>
                                <li><a href="#" class="text-gray-600 hover:text-purple-500">RPG</a></li>
                                <li><a href="#" class="text-gray-600 hover:text-purple-500">Shooter</a></li>
                                <li><a href="#" class="text-gray-600 hover:text-purple-500">Deportes</a></li>
                                <li><a href="#" class="text-gray-600 hover:text-purple-500">Estrategia</a></li>
                            </ul>
                        </details>
                    </li>

                    <!-- Plataforma -->
                    <li>
                        <details class="border-b border-gray-200 pb-2">
                            <summary class="flex justify-between cursor-pointer p-2 text-gray-700 hover:text-black">
                                Plataforma
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M19 9l-7 7-7-7" />
                                </svg>
                            </summary>
                            <ul class="pl-4 mt-2 space-y-2">
                                <li><a href="#" class="text-gray-600 hover:text-purple-500">PC (Windows)</a></li>
                                <li><a href="#" class="text-gray-600 hover:text-purple-500">PS5</a></li>
                                <li><a href="#" class="text-gray-600 hover:text-purple-500">Xbox Series X|S</a></li>
                                <li><a href="#" class="text-gray-600 hover:text-purple-500">Nintendo Switch</a></li>
                                <li><a href="#" class="text-gray-600 hover:text-purple-500">Mobile</a></li>
                                <li><a href="#" class="text-gray-600 hover:text-purple-500">Mac</a></li>
                            </ul>
                        </details>
                    </li>

                    <!-- Precio -->
                    <li class="border-b border-gray-200 pb-2">
                        <label class="block mb-2 font-bold p-2 text-gray-700">Precio</label>
                        <input type="range" min="0" max="100" value="50"
                            class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-purple-500">
                        <div class="flex justify-between text-sm text-gray-600">
                            <span>$0</span>
                            <span>$100+</span>
                        </div>
                    </li>

                    <!-- Clasificación por edad -->
                    <li>
                        <details class="border-b border-gray-200 pb-2">
                            <summary class="flex justify-between cursor-pointer p-2 text-gray-700 hover:text-black">
                                Clasificación ESRB
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M19 9l-7 7-7-7" />
                                </svg>
                            </summary>
                            <div class="flex flex-wrap gap-2 mt-2">
                                <button
                                    class="px-3 py-1 bg-gray-100 rounded-xl text-gray-600 hover:bg-purple-500 hover:text-white">E
                                    (Todos)</button>
                                <button
                                    class="px-3 py-1 bg-gray-100 rounded-xl text-gray-600 hover:bg-purple-500 hover:text-white">E10+
                                    (10+)</button>
                                <button class="px-3 py-1 bg-black text-white rounded-xl">T (Adolescentes)</button>
                                <button
                                    class="px-3 py-1 bg-gray-100 rounded-xl text-gray-600 hover:bg-purple-500 hover:text-white">M
                                    (17+)</button>
                                <button
                                    class="px-3 py-1 bg-gray-100 rounded-xl text-gray-600 hover:bg-purple-500 hover:text-white">AO
                                    (Solo adultos)</button>
                            </div>
                        </details>
                    </li>

                    <!-- Desarrollador -->
                    <li>
                        <details>
                            <summary class="flex justify-between cursor-pointer p-2 text-gray-700 hover:text-black">
                                Desarrollador
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M19 9l-7 7-7-7" />
                                </svg>
                            </summary>
                            <ul class="pl-4 mt-2 space-y-2">
                                <li><a href="#" class="text-gray-600 hover:text-purple-500">Rockstar Games</a></li>
                                <li><a href="#" class="text-gray-600 hover:text-purple-500">Epic Games</a></li>
                                <li><a href="#" class="text-gray-600 hover:text-purple-500">Valve</a></li>
                                <li><a href="#" class="text-gray-600 hover:text-purple-500">Ubisoft</a></li>
                                <li><a href="#" class="text-gray-600 hover:text-purple-500">Bethesda</a></li>
                                <li><a href="#" class="text-gray-600 hover:text-purple-500">Activision</a></li>
                            </ul>
                        </details>
                    </li>

                    <!-- Botón "Aplicar Filtros" -->
                    <li>
                        <button
                            class="w-full px-4 py-2 mt-4 bg-black text-white rounded-lg hover:bg-purple-600 transition-colors">
                            Aplicar Filtros
                        </button>
                    </li>
                </ul>
            </aside>

            ${Products().html}
            </div>
    `;

    const init = () =>{
        
    }

    return{
        html,
        init

    }
}

export default Filter;