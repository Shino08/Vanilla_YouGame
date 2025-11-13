const Footer = () => {

    const html = `
    <footer class="bg-gray-900 text-white py-4 px-4 border-t border-gray-700 -mx-24">
        <div class="container mx-auto">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-5 items-center ">
                <!-- Columna 1: Logo + Redes -->
                <div class="items-center mx-auto">
                    <div class="flex items-center space-x-2 mb-4">
                        <img src="/src/assets/images/imgFooter/YG_Footer.png" alt="YouGame Logo" class="h-16 rounded-full">
                        <span class="text-xl font-bold">YouGame</span>
                    </div>
                    <p class="text-gray-400 mb-4 text-sm">La mejor plataforma para gamers.</p>
                    <div class="flex space-x-4">
                        <a href="#" class="text-gray-400 hover:text-log-400 transition" aria-label="Discord">
                            <i class="fab fa-youtube text-lg"></i>
                        </a>
                        <a href="#" class="text-gray-400 hover:text-log-400 transition" aria-label="Discord">
                            <i class="fab fa-discord text-lg"></i>
                        </a>
                        <a href="#" class="text-gray-400 hover:text-primary-400 transition" aria-label="Instagram">
                            <i class="fab fa-instagram text-lg"></i>
                        </a>
                        <a href="#" class="text-gray-400 hover:text-primary-400 transition" aria-label="Twitch">
                            <i class="fab fa-twitch text-lg"></i>
                        </a>
                    </div>
                </div>

                <!-- Columna 2: Enlaces útiles -->
                <div class="mx-auto items-center">
                    <h3 class="text-lg font-semibold mb-4 text-gray-200">Menu</h3>
                    <ul class="space-y-2">
                        <li><a href="/about" class="text-gray-400 hover:text-primary-400 transition text-sm">About</a></li>

                        <li><a href="/faq" class="text-gray-400 hover:text-primary-400 transition text-sm">Ofertas</a></li>
                        <li><a href="/Category"
                                class="text-gray-400 hover:text-primary-400 transition text-sm">Categorias</a></li>
                    </ul>
                </div>

                <!-- Columna 3: Legal -->

                <!-- Columna 4: Contacto -->
                <div class="mx-auto">
                    <h3 class="text-lg font-semibold mb-4 text-gray-200">Contacto</h3>
                    <ul class="space-y-3 text-sm">
                        <li class="text-gray-400 flex items-start">
                            <i class="fas fa-envelope mr-2 mt-1 text-primary-400"></i>
                            <span>soporte@yougame.com</span>
                        </li>
                        <li class="text-gray-400 flex items-start">
                            <i class="fas fa-phone mr-2 mt-1 text-primary-400"></i>
                            <span>+58 424 555-0011</span>
                        </li>
                        <li class="text-gray-400 flex items-start">
                            <i class="fas fa-map-marker-alt mr-2 mt-1 text-primary-400"></i>
                            <span>Ciudad Gamer</span>
                        </li>
                    </ul>
                </div>
            </div>

            <!-- Copyright -->
            <div class="border-t border-gray-700 mt-8 pt-6 text-center text-gray-500 text-sm">
                <p>Copyright © 2025-2026 YouGame - Todos los derechos reservados.</p>
            </div>
        </div>
    </footer>
    `

    const init = () => {

    }

    return{
        html,
        init
    }

}

export default Footer;