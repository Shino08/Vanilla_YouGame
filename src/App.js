import './assets/css/style.css';
import { initRouter, route } from './router';
import DefaultLayout from './layouts/DefaultLayout';

// Importar páginas
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import Category from "./pages/Category";
import CartPage from "./pages/Cart";
import OffersPage from "./pages/OffersPage";
import GendersPage from "./pages/GendersPage";
import FeaturedPage from "./pages/FeaturedPage";
// import NotFoundPage from "./pages/NotFoundPage";

// Componente principal de la aplicación
const App = () => {
  // Función para inicializar la aplicación
  const init = () => {
    // console.log('Inicializando la aplicación...');
    
    // Registrar rutas
    route('/', () => DefaultLayout(HomePage()));
    route('/about', () => DefaultLayout(AboutPage()));
    route('/Category', () => DefaultLayout(Category()));
    route('/cart', () => DefaultLayout(CartPage()));
    route('/ofertas', () => DefaultLayout(OffersPage()));
    route('/generos', () => DefaultLayout(GendersPage()));
    route('/destacados', () => DefaultLayout(FeaturedPage()));
    // route('/404', () => DefaultLayout(NotFoundPage()));
    
    // Inicializar el router
    initRouter();
    
    // Aquí podrías añadir más lógica de inicialización:
    // - Cargar configuración
    // - Verificar autenticación
    // - Establecer listeners globales
    // - Inicializar servicios
  };

  // Devuelve un objeto con los métodos de la aplicación
  return {
    init
  };
};

// Inicializar la aplicación cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
  const app = App();
  app.init();
  
  // Opcional: Exponer la instancia de la aplicación globalmente para debugging
  window.app = app;
});