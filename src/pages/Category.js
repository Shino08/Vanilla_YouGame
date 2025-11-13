import Filter from "../components/Filter";

const Category = () =>{

    const html = `
    ${Filter().html}
    `

    const init = () => {
        Filter()
    }

    return{
        html,
        init
    }
}

export default Category;