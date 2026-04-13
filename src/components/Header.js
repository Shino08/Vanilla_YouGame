const Header = () => {
    const html = `
    <div class="bg-black -mx-24">
        <div class="container mx-auto px-4 py-2 flex justify-between items-center">
            <div>
                <span class="text-gray-100 text-sm">Bienvenido a YouGame</span>
            </div>
            <div class="flex space-x-6">
                <div class="flex items-center">
                    <i class="fas fa-gamepad text-purple-800 mr-2"></i>
                    <span class="text-gray-100 text-sm">Busca tu juego</span>
                </div>
                <div class="flex items-center">
                    <i class="fas fa-tag text-purple-800 mr-2"></i>
                    <span class="text-gray-100 text-sm">Todas las Ofertas</span>
                </div>
            </div>
        </div>
    </div>

    <!-- Header Principal -->
    <header class="bg-white py-4 shadow-md -mx-24 rounded-b-3xl">
        <div class="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
            <!-- Logo y Menú Mobile -->
            <div class="flex items-center justify-between w-full md:w-auto mb-4 md:mb-0">
                <button class="mr-4 p-2 lg:hidden bg-gray-100 rounded-lg text-primary-600">
                    <i class="fas fa-bars"></i>
                </button>
                <a href="#" class="text-3xl font-bold text-black">You<span
                        class="text-3xl font-bold text-purple-800">Game</span></a>
                <a href="#">
                    <img src="/src/assets/images/imgFooter/YG.png" alt="YouGame Logo" class="h-10 rounded-full ml-2">
                </a>
            </div>

            <!-- Barra de Búsqueda -->
            <div class="w-full md:w-1/3 mb-4 md:mb-0 px-0 md:px-4">
                <div class="relative">
                    <input type="search" placeholder="Busca tus juegos favoritos"
                        class="w-full py-2 pl-10 pr-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-700 focus:border-transparent">
                    <div class="absolute left-3 top-2.5 text-gray-400">
                        <i class="fas fa-search"></i>
                    </div>
                </div>
            </div>

            <!-- Iconos de Navegación -->
            <div class="flex items-center space-x-4 md:space-x-6">

                <a href="/cart" class="flex items-center text-gray-800 font-medium hover:text-purple-800 relative">
                    <i class="fas fa-shopping-cart text-gray-700 hover:text-purple-500"></i>
                    <span class="hidden md:inline ml-2">Carrito</span>
                </a>

                <a href="#" class="flex items-center text-gray-800 font-medium hover:text-purple-800 relative">
                    <i class="fas fa-user mr-2"></i>
                    <span class="hidden md:inline">Mi Cuenta</span>
                </a>

                <a href="/src/pages/notifications" class="flex items-center hover:text-purple-800 relative">
                    <i class="fas fa-bell text-gray-700 hover:text-purple-500"></i>
                    <span class="hidden md:inline ml-2">Notificaciones</span>
                    <span
                        class="absolute -top-2 -right-2 bg-purple-800 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">3</span>
                </a>
            </div>
        </div>
    </header>
    `

    const init = () => {

    }

    return {
        html,
        init
    }
}

export default Header;