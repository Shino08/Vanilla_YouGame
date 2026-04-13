import AllOfertsGames from "../components/AllOfertsGames";

const OffersPage = () => {
    const html = `
    ${AllOfertsGames().html}
    `;

    const init = () => {
        AllOfertsGames().init();
    }

    return { html, init }
}

export default OffersPage;
