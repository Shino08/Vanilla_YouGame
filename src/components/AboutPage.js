const AboutPage = () => {
    const html = `
    <!-- Hero Section -->
    <section class="relative bg-white text-gray-900 py-24 overflow-hidden border-b border-gray-200">
        <div class="absolute inset-0 opacity-10">
            <div class="absolute top-10 left-10 w-72 h-72 bg-purple-400 rounded-full filter blur-3xl"></div>
            <div class="absolute bottom-10 right-10 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl"></div>
        </div>
        <div class="container mx-auto px-6 text-center relative z-10">
            <span class="inline-block px-4 py-1 bg-purple-100 border border-purple-200 rounded-full text-purple-800 text-sm font-medium mb-6 tracking-wide">🎮 Para Gamers</span>
            <h2 class="text-4xl md:text-6xl font-extrabold mb-6 leading-tight text-gray-900">Sobre <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-800">YouGame</span></h2>
            <p class="text-lg md:text-xl max-w-2xl mx-auto text-gray-600 leading-relaxed">Tu destino definitivo para los últimos videojuegos, consolas y accesorios. Donde la pasión gamer se convierte en experiencia.</p>
        </div>
    </section>

    <!-- Stats Section -->
    <section class="bg-gray-50 py-12 border-b border-gray-200">
        <div class="container mx-auto px-6">
            <div class="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                <div class="text-center">
                    <p class="text-3xl md:text-4xl font-extrabold text-purple-700">+5K</p>
                    <p class="text-gray-600 text-sm mt-1 font-medium">Juegos Disponibles</p>
                </div>
                <div class="text-center">
                    <p class="text-3xl md:text-4xl font-extrabold text-purple-700">+20K</p>
                    <p class="text-gray-600 text-sm mt-1 font-medium">Clientes Activos</p>
                </div>
                <div class="text-center">
                    <p class="text-3xl md:text-4xl font-extrabold text-purple-700">24/7</p>
                    <p class="text-gray-600 text-sm mt-1 font-medium">Soporte Técnico</p>
                </div>
                <div class="text-center">
                    <p class="text-3xl md:text-4xl font-extrabold text-purple-700">4.8★</p>
                    <p class="text-gray-600 text-sm mt-1 font-medium">Calificación Promedio</p>
                </div>
            </div>
        </div>
    </section>

    <!-- About Content -->
    <section class="py-20 bg-white text-gray-800">
        <div class="container mx-auto px-6">
            <div class="max-w-5xl mx-auto">

                <!-- Nuestra Historia -->
                <div class="mb-20">
                    <h3 class="text-3xl font-bold mb-8 text-center">
                        <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-purple-900">Nuestra Historia</span>
                    </h3>
                    <div class="bg-white p-8 md:p-10 rounded-2xl border border-gray-200 shadow-xl shadow-purple-900/5">
                        <p class="text-lg text-gray-600 leading-relaxed text-center max-w-3xl mx-auto">
                            YouGame nació en 2023 con la pasión por los videojuegos y el deseo de crear una plataforma donde los gamers pudieran encontrar todo lo que necesitan en un solo lugar. Desde nuestros humildes comienzos, hemos crecido para convertirnos en uno de los destinos preferidos para los amantes de los videojuegos, ofreciendo las mejores ofertas y los lanzamientos más esperados.
                        </p>
                    </div>
                </div>

                <!-- Misión y Visión -->
                <div class="grid md:grid-cols-2 gap-8 mb-20">
                    <div class="group bg-white p-8 rounded-2xl border border-gray-200 hover:border-purple-300 transition-all duration-300 shadow-lg shadow-gray-200 hover:shadow-purple-900/10">
                        <div class="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-5 group-hover:bg-purple-200 transition-colors duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-purple-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <h4 class="text-2xl font-bold mb-4 text-gray-900">Nuestra Misión</h4>
                        <p class="text-gray-600 leading-relaxed">
                            Proporcionar a nuestros clientes acceso a los últimos títulos, consolas y accesorios gaming al mejor precio posible, con un servicio excepcional y una comunidad vibrante que comparte nuestra pasión por los videojuegos.
                        </p>
                    </div>
                    <div class="group bg-white p-8 rounded-2xl border border-gray-200 hover:border-purple-300 transition-all duration-300 shadow-lg shadow-gray-200 hover:shadow-purple-900/10">
                        <div class="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-5 group-hover:bg-purple-200 transition-colors duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-purple-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                        </div>
                        <h4 class="text-2xl font-bold mb-4 text-gray-900">Nuestra Visión</h4>
                        <p class="text-gray-600 leading-relaxed">
                            Ser la plataforma líder en distribución de videojuegos a nivel global, innovando constantemente para mejorar la experiencia de compra y fomentando la cultura gamer en todas sus formas.
                        </p>
                    </div>
                </div>

                <!-- Lo Que Ofrecemos -->
                <h3 class="text-3xl font-bold mb-10 text-center">
                    <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-purple-900">Lo Que Ofrecemos</span>
                </h3>
                <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
                    <div class="group bg-white p-6 rounded-2xl border border-gray-200 hover:border-purple-300 transition-all duration-300 hover:-translate-y-1 shadow-md shadow-gray-200 hover:shadow-xl hover:shadow-purple-900/10">
                        <div class="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-purple-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <h4 class="text-lg font-bold mb-2 text-gray-900">Juegos Nuevos</h4>
                        <p class="text-gray-500 text-sm">Los lanzamientos más esperados disponibles el día de estreno.</p>
                    </div>
                    <div class="group bg-white p-6 rounded-2xl border border-gray-200 hover:border-purple-300 transition-all duration-300 hover:-translate-y-1 shadow-md shadow-gray-200 hover:shadow-xl hover:shadow-purple-900/10">
                        <div class="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-purple-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                            </svg>
                        </div>
                        <h4 class="text-lg font-bold mb-2 text-gray-900">Ofertas Exclusivas</h4>
                        <p class="text-gray-500 text-sm">Descuentos especiales para nuestros clientes frecuentes.</p>
                    </div>
                    <div class="group bg-white p-6 rounded-2xl border border-gray-200 hover:border-purple-300 transition-all duration-300 hover:-translate-y-1 shadow-md shadow-gray-200 hover:shadow-xl hover:shadow-purple-900/10">
                        <div class="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-purple-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <h4 class="text-lg font-bold mb-2 text-gray-900">Consolas</h4>
                        <p class="text-gray-500 text-sm">Las últimas consolas de PlayStation, Xbox y Nintendo.</p>
                    </div>
                    <div class="group bg-white p-6 rounded-2xl border border-gray-200 hover:border-purple-300 transition-all duration-300 hover:-translate-y-1 shadow-md shadow-gray-200 hover:shadow-xl hover:shadow-purple-900/10">
                        <div class="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-purple-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                            </svg>
                        </div>
                        <h4 class="text-lg font-bold mb-2 text-gray-900">Accesorios Gaming</h4>
                        <p class="text-gray-500 text-sm">Desde auriculares hasta controles especializados.</p>
                    </div>
                    <div class="group bg-white p-6 rounded-2xl border border-gray-200 hover:border-purple-300 transition-all duration-300 hover:-translate-y-1 shadow-md shadow-gray-200 hover:shadow-xl hover:shadow-purple-900/10">
                        <div class="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-purple-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h4 class="text-lg font-bold mb-2 text-gray-900">Soporte 24/7</h4>
                        <p class="text-gray-500 text-sm">Asistencia técnica siempre disponible para nuestros clientes.</p>
                    </div>
                    <div class="group bg-white p-6 rounded-2xl border border-gray-200 hover:border-purple-300 transition-all duration-300 hover:-translate-y-1 shadow-md shadow-gray-200 hover:shadow-xl hover:shadow-purple-900/10">
                        <div class="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-purple-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </div>
                        <h4 class="text-lg font-bold mb-2 text-gray-900">Comunidad</h4>
                        <p class="text-gray-500 text-sm">Únete a nuestra comunidad de gamers apasionados.</p>
                    </div>
                </div>

                <!-- Nuestros Valores -->
                <h3 class="text-3xl font-bold mb-10 text-center">
                    <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-purple-900">Nuestros Valores</span>
                </h3>
                <div class="bg-gray-50 p-8 md:p-10 rounded-2xl border border-gray-200 shadow-inner mb-16">
                    <ul class="space-y-6">
                        <li class="flex items-start group">
                            <span class="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-4 mt-0.5 group-hover:bg-purple-200 transition-colors duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-purple-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </span>
                            <span class="text-gray-600"><strong class="text-gray-900">Pasión por los videojuegos:</strong> Somos gamers antes que vendedores, y eso se refleja en nuestro servicio.</span>
                        </li>
                        <li class="flex items-start group">
                            <span class="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-4 mt-0.5 group-hover:bg-purple-200 transition-colors duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-purple-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </span>
                            <span class="text-gray-600"><strong class="text-gray-900">Integridad:</strong> Transparencia en precios y políticas claras para nuestros clientes.</span>
                        </li>
                        <li class="flex items-start group">
                            <span class="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-4 mt-0.5 group-hover:bg-purple-200 transition-colors duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-purple-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                </svg>
                            </span>
                            <span class="text-gray-600"><strong class="text-gray-900">Innovación:</strong> Siempre buscamos nuevas formas de mejorar tu experiencia de compra.</span>
                        </li>
                        <li class="flex items-start group">
                            <span class="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-4 mt-0.5 group-hover:bg-purple-200 transition-colors duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-purple-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </span>
                            <span class="text-gray-600"><strong class="text-gray-900">Comunidad:</strong> Creemos en el poder de conectar a los gamers entre sí.</span>
                        </li>
                        <li class="flex items-start group">
                            <span class="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-4 mt-0.5 group-hover:bg-purple-200 transition-colors duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-purple-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                </svg>
                            </span>
                            <span class="text-gray-600"><strong class="text-gray-900">Excelencia:</strong> No nos conformamos con menos que lo mejor para nuestros clientes.</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    `;

    const init = () => {
        console.log("AboutPage initialized");
    };

    return {
        html,
        init
    };
};

export default AboutPage;