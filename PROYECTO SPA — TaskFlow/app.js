import { store } from "./src/store/store.js"
import { router } from "./src/router/router.js"
import { NavBar } from "./src/components/NavBar.js"
import { Footer } from "./src/components/Footer.js"


const app = document.getElementById('app')

export function render(view) {
    app.innerHTML = `
    ${sessionStorage.getItem('user') ? NavBar() : ""}
    <main>${view}</main>
    <footer>${Footer()}</footer>`
}


window.addEventListener('hashchange', router);
window.addEventListener('load', router);



