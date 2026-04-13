import AllCardsGames from "../components/AllCardsGames";

const FeaturedPage = () => {
    const html = `
    ${AllCardsGames().html}
    `;

    const init = () => {
        AllCardsGames().init();
    }

    return { html, init }
}

export default FeaturedPage;
