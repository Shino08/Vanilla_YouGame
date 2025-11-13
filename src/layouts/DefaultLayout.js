import Header from "../components/Header";
import Footer from "../components/Footer"

const DefaultLayout = (content) => {
    const header = Header();
    const footer = Footer();

    return{
        html:`
        ${header.html}
        <main class="min-h-screen">
        ${content.html}
        </main>
        ${footer.html}
        `,
        init: () =>{
            if (typeof header.init === "function") {
                header.init()
            }

            if (typeof content.init === "function") {
                content.init()
            }
        }

    }
}

export default DefaultLayout;