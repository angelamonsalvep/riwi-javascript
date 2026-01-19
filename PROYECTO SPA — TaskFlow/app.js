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


document.addEventListener('click', (e) => {

    if (e.target.id == 'toggle-dark-mode') {

        const span = e.target.parentElement.querySelector("span");
        if (e.target.checked) {
            document.documentElement.classList.replace('light', 'dark')
            span.textContent = "dark_mode"
        } else {
            document.documentElement.classList.replace('dark', 'light');
            span.textContent = "light_mode"
        }
        sessionStorage.setItem('mode', e.target.checked)
    }
})


window.addEventListener('hashchange', router);
window.addEventListener('load', router);



