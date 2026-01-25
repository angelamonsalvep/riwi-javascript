import { Navbar,Footer } from "../components/index.js"

const app = document.getElementById('app')
export function render(view) {
    
    return app.innerHTML = `
    ${sessionStorage.getItem('user') ? Navbar():''}
    <main>
    ${view}
    </main>
    ${sessionStorage.getItem('user') ? Footer():''}

    `
}