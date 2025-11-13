import Cart from "../components/Cart.js";

const CartPage = () => {
    const html = `
    ${Cart().html}
    `

    const init = () =>{
        Cart().init();
    }

    return{
        html,
        init
    }

}

export default CartPage;