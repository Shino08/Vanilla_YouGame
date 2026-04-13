import AllGendersGames from "../components/AllGendersGames";

const GendersPage = () => {
    const html = `
    ${AllGendersGames().html}
    `;

    const init = () => {
        AllGendersGames().init();
    }

    return { html, init }
}

export default GendersPage;
