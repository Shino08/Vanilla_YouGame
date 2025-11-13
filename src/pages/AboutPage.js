import AboutPage from "../components/AboutPage";

const About = () => {
    const html = `
    ${AboutPage().html}
    `;
    const init = () =>{
        AboutPage();
    }

    return{
        html,
        init
    }
}

export default About;