import { split } from "postcss/lib/list";
import NotFoundPage from "../pages/NotFoundPage";

const routes = [];

export const route = (path, component) => {
    routes.push({path, component});
}

const findRoute = (url) => {
  const path = url.split('?')[0];
  
  // Busca coincidencia exacta
  const exactMatch = routes.find(route => route.path === path);
  if (exactMatch) return exactMatch;
  
  // Busca rutas con parámetros dinámicos
  for (const route of routes) {
    const pattern = new RegExp(
      '^' + route.path.replace(/:\w+/g, '([^\\/]+)') + '$'
    );
    
    const matches = path.match(pattern);
    if (matches) {
      const params = {};
      const paramNames = route.path.match(/:\w+/g) || [];
      paramNames.forEach((param, index) => {
        params[param.substring(1)] = matches[index + 1];
      });
      
      return { ...route, params };
    }
  }
  
  // Ruta 404 si no hay coincidencia
  return routes.find(route => route.path === '/404') || { 
    path: '/404', 
    component: () => `${NotFoundPage().html}` 
  };

  
};

export const navigateTo = (url) => {
  history.pushState(null, null, url);
  renderRoute();
};

export const renderRoute = () => {
  const url = window.location.pathname;
  const route = findRoute(url);
  
  const contentElement = document.getElementById('app');
  
  const component = route.component(route.params || {});
  
  if (typeof component === 'object' && component.html) {
    contentElement.innerHTML = component.html;
    if (typeof component.init === 'function') {
      component.init();
    }
  } else {
    contentElement.innerHTML = component;
  }
  
  attachLinkListeners();
};

const attachLinkListeners = () => {
  document.querySelectorAll('a').forEach(link => {
    const href = link.getAttribute('href');
    if (href && (href.startsWith('/') || !href.startsWith('http'))) {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        navigateTo(href);
      });
    }
  });
};

export const initRouter = () => {
  window.addEventListener('popstate', renderRoute);
  renderRoute();
};