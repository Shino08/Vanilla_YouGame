const AboutPage = () => {
    const html = `
     <section class="bg-gradient-to-r from-black to-purple-900 text-white py-16">
        <div class="container mx-auto px-6 text-center">
            <h2 class="text-4xl md:text-5xl font-bold mb-4">Sobre YouGame</h2>
            <p class="text-xl md:text-2xl max-w-3xl mx-auto">Tu destino definitivo para los últimos videojuegos, consolas y accesorios</p>
        </div>
    </section>

    <!-- About Content -->
    <section class="py-16 bg-black text-white">
        <div class="container mx-auto px-6">
            <div class="max-w-4xl mx-auto">
                <h3 class="text-3xl font-bold mb-6 text-center text-purple-400">Nuestra Historia</h3>
                <p class="text-lg mb-8 text-justify">
                    YouGame nació en 2023 con la pasión por los videojuegos y el deseo de crear una plataforma donde los gamers pudieran encontrar todo lo que necesitan en un solo lugar. Desde nuestros humildes comienzos, hemos crecido para convertirnos en uno de los destinos preferidos para los amantes de los videojuegos, ofreciendo las mejores ofertas y los lanzamientos más esperados.
                </p>
                
                <div class="grid md:grid-cols-2 gap-12 mb-16">
                    <div>
                        <h4 class="text-2xl font-bold mb-4 text-blue-400">Nuestra Misión</h4>
                        <p class="text-gray-300">
                            Proporcionar a nuestros clientes acceso a los últimos títulos, consolas y accesorios gaming al mejor precio posible, con un servicio excepcional y una comunidad vibrante que comparte nuestra pasión por los videojuegos.
                        </p>
                    </div>
                    <div>
                        <h4 class="text-2xl font-bold mb-4 text-blue-400">Nuestra Visión</h4>
                        <p class="text-gray-300">
                            Ser la plataforma líder en distribución de videojuegos a nivel global, innovando constantemente para mejorar la experiencia de compra y fomentando la cultura gamer en todas sus formas.
                        </p>
                    </div>
                </div>

                <h3 class="text-3xl font-bold mb-8 text-center text-purple-400">Lo Que Ofrecemos</h3>
                <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    <div class="bg-gray-900 p-6 rounded-lg shadow-md border border-purple-900">
                        <div class="text-blue-400 mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <h4 class="text-xl font-bold mb-2 text-white">Juegos Nuevos</h4>
                        <p class="text-gray-400">Los lanzamientos más esperados disponibles el día de estreno.</p>
                    </div>
                    <div class="bg-gray-900 p-6 rounded-lg shadow-md border border-purple-900">
                        <div class="text-blue-400 mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                            </svg>
                        </div>
                        <h4 class="text-xl font-bold mb-2 text-white">Ofertas Exclusivas</h4>
                        <p class="text-gray-400">Descuentos especiales para nuestros clientes frecuentes.</p>
                    </div>
                    <div class="bg-gray-900 p-6 rounded-lg shadow-md border border-purple-900">
                        <div class="text-blue-400 mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <h4 class="text-xl font-bold mb-2 text-white">Consolas</h4>
                        <p class="text-gray-400">Las últimas consolas de PlayStation, Xbox y Nintendo.</p>
                    </div>
                    <div class="bg-gray-900 p-6 rounded-lg shadow-md border border-purple-900">
                        <div class="text-blue-400 mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                            </svg>
                        </div>
                        <h4 class="text-xl font-bold mb-2 text-white">Accesorios Gaming</h4>
                        <p class="text-gray-400">Desde auriculares hasta controles especializados.</p>
                    </div>
                    <div class="bg-gray-900 p-6 rounded-lg shadow-md border border-purple-900">
                        <div class="text-blue-400 mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h4 class="text-xl font-bold mb-2 text-white">Soporte 24/7</h4>
                        <p class="text-gray-400">Asistencia técnica siempre disponible para nuestros clientes.</p>
                    </div>
                    <div class="bg-gray-900 p-6 rounded-lg shadow-md border border-purple-900">
                        <div class="text-blue-400 mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </div>
                        <h4 class="text-xl font-bold mb-2 text-white">Comunidad</h4>
                        <p class="text-gray-400">Únete a nuestra comunidad de gamers apasionados.</p>
                    </div>
                </div>

                <h3 class="text-3xl font-bold mb-8 text-center text-purple-400">Nuestros Valores</h3>
                <div class="bg-gray-900 p-8 rounded-lg shadow-md mb-16 border border-purple-900">
                    <ul class="space-y-4">
                        <li class="flex items-start">
                            <span class="text-blue-400 mr-3 mt-1">•</span>
                            <span class="text-lg text-white"><strong>Pasión por los videojuegos:</strong> Somos gamers antes que vendedores, y eso se refleja en nuestro servicio.</span>
                        </li>
                        <li class="flex items-start">
                            <span class="text-blue-400 mr-3 mt-1">•</span>
                            <span class="text-lg text-white"><strong>Integridad:</strong> Transparencia en precios y políticas claras para nuestros clientes.</span>
                        </li>
                        <li class="flex items-start">
                            <span class="text-blue-400 mr-3 mt-1">•</span>
                            <span class="text-lg text-white"><strong>Innovación:</strong> Siempre buscamos nuevas formas de mejorar tu experiencia de compra.</span>
                        </li>
                        <li class="flex items-start">
                            <span class="text-blue-400 mr-3 mt-1">•</span>
                            <span class="text-lg text-white"><strong>Comunidad:</strong> Creemos en el poder de conectar a los gamers entre sí.</span>
                        </li>
                        <li class="flex items-start">
                            <span class="text-blue-400 mr-3 mt-1">•</span>
                            <span class="text-lg text-white"><strong>Excelencia:</strong> No nos conformamos con menos que lo mejor para nuestros clientes.</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    `;

    const init = () => {
        // Aquí puedes inicializar cualquier funcionalidad JavaScript necesaria
        console.log("AboutPage initialized");
    };

    return {
        html,
        init
    };
};

export default AboutPage;