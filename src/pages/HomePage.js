import CardsGames from "../components/Cards";
import Carousel from "../components/Carousel";
import GendersGames from "../components/GendersGames";
import OfertsGames from "../components/OfertsGames";

const HomePage = () => {
    const html = `
    ${Carousel().html}
    ${OfertsGames().html}
    ${GendersGames().html}
    ${CardsGames().html}
    `;
    const init = () => {
        Carousel().init();
        CardsGames().init();
    }
    return { html, init }
}
export default HomePage;