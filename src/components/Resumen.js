const Resumen = () => {
    const html = `
    <!-- Resumen del Pedido -->
            <div class="bg-white p-6 rounded-xl shadow-lg border border-gray-200 h-fit sticky top-4">
                <h2 class="text-xl font-bold mb-6 pb-3 border-b border-gray-200 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2 text-purple-600" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z" />
                    </svg>
                    RESUMEN DE COMPRA
                </h2>

                <!-- Detalles del pedido -->
                <div class="space-y-3 mb-4">
                    <div class="flex justify-between">
                        <span class="text-gray-600">Subtotal (3 juegos)</span>
                        <span class="font-medium">$165.97</span>
                    </div>
                    <div class="flex justify-between">
                        <span class="text-gray-600">Descuento</span>
                        <span class="text-red-600 font-medium">-$33.19</span>
                    </div>
                    <div class="flex justify-between">
                        <span class="text-gray-600">Envío</span>
                        <div>
                            <span class="font-medium">$15.00</span>
                            <span class="text-xs text-gray-500 block">Envío estándar (3-5 días)</span>
                        </div>
                    </div>
                </div>

                <!-- Total -->
                <div class="flex justify-between items-center mb-6 pt-4 border-t border-gray-200">
                    <span class="font-bold text-lg">Total</span>
                    <div>
                        <span class="font-bold text-xl">$147.78</span>
                        <span class="text-xs text-gray-500 block text-right">IVA incluido</span>
                    </div>
                </div>

                <!-- Código promocional -->
                <div class="mb-6">
                    <label for="promo-code" class="block text-sm font-medium text-gray-700 mb-2">¿Tienes un código de
                        descuento?</label>
                    <div class="flex">
                        <input type="text" id="promo-code" placeholder="Ej: GAMER2024"
                            class="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none">
                        <button type="button"
                            class="px-4 py-2 bg-purple-600 text-white rounded-r-lg hover:bg-purple-700 transition-colors font-medium">
                            Aplicar
                        </button>
                    </div>
                </div>

                <!-- Botón de checkout -->
                <button
                    class="w-full px-6 py-3 bg-black text-white rounded-lg font-bold hover:bg-gray-800 transition-colors flex items-center justify-center shadow-md">
                    PROCEDER AL PAGO
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20"
                        fill="currentColor">
                        <path fill-rule="evenodd"
                            d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                            clip-rule="evenodd" />
                    </svg>
                </button>

                <!-- Garantía YouGame -->
                <div class="mt-6 pt-4 border-t border-gray-200">
                    <div class="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-purple-600 mr-2 mt-1" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                        <div>
                            <h3 class="font-medium text-gray-800">Garantía YouGame</h3>
                            <p class="text-sm text-gray-500 mt-1">Todos nuestros juegos incluyen garantía de 30 días y
                                soporte técnico especializado.</p>
                        </div>
                    </div>
                </div>
            </div>
    `;

    const init = () =>{

    }

    return{
        html,
        init
    }
}

export default Resumen;