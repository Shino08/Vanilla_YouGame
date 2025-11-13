import  Header from "../components/Header";
import  Footer  from "../components/Footer";

const NotFoundPage = () => {
    const html = `
    ${Header().html}
        <!-- Contenido 404 -->
    <main class="min-h-screen flex items-center justify-center">
        <div class="text-center px-4">
            <div class="inline-block bg-purple-100 rounded-full p-6 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-20 w-20 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </div>
            <h1 class="text-5xl md:text-6xl font-bold text-gray-800 mb-4">404</h1>
            <h2 class="text-2xl md:text-3xl font-semibold text-gray-700 mb-6">¡Ups! Página no encontrada</h2>
            <p class="text-gray-600 mb-8 max-w-md mx-auto">
                La página que estás buscando podría haber sido eliminada, haber cambiado de nombre o no está disponible temporalmente.
            </p>
            <a href="/" class="inline-block bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-lg transition duration-200">
                Volver al inicio
            </a>
        </div>
    </main>
    ${Footer().html}
    `

    const init = () => {
        Header().init()
        Footer().init();
    }

    return{ html, init}
}

export default NotFoundPage;