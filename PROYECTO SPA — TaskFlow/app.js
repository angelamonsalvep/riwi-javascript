import { store } from "./src/store/store.js"
import { router } from "./src/router/router.js"
import { NavBar } from "./src/components/NavBar.js"


const app = document.getElementById('app')

export function render(view) {
    app.innerHTML = `
    ${store.user ? NavBar() : ""}
    <main>${view}</main>`
}


// app.addEventListener('click', (e) => {
//     console.log(e.target.closest('form'));
//     const form = e.target.closest('form')
//     const btnLogin = form.querySelector('button')

// })

window.addEventListener('hashchange', router);
window.addEventListener('load', router);



/* window.addEventListener('load', () => {
    const btnLogin = document.getElementById('btnLogin')
    const inpUser = document.getElementById('inpUser')

    btnLogin.addEventListener('click', ()=>{
        loginUser(inpUser.value);
    })


}) */

