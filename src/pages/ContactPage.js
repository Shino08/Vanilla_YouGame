import Contact from "../components/Contact";

const ContactPage = () => {
    const html = `
    ${Contact().html}
    `;

    const init = () => {
        Contact();
    }

    return {html, init}
}

export default ContactPage;