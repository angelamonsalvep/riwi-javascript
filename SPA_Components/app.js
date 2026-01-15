const app = document.getElementById('app');
/* Components */
function Navbar () {
    return `<nav>
      <a href="#/home">Home</a>
      <a href="#/services">services</a>
      <a href="#/contact">Contacto</a>
    </nav>`
}

function renderHome() {
    return `<h1>🏠 Home<h1/><p>Bienvenido a nuestra SPA<p/>`
    
}

function renderServices() {
    return '<h1>🛠️ Servicios<h1/><p>Esto es un componente<p/>'
}

function renderContact() {
    return '<h1>📧 Contacto<h1/><p>Esto es un componente<p/>'
}

function renderNotFound() {
    return '<h1> Not found 404<h1/><p>Esto es un componente<p/>'
}

let counter = 0
function renderCounter() {
    app.innerHTML = `
    <h1>Contador</h1>
    <p>${counter}</p>
    <button id='add'>+</button>
    `
    document.getElementById('add').onclick = () =>{
        counter ++
        renderCounter()    
    }
}

function renderWithAnimation(renderFunction) {
    app.classList.remove('slide-in');
    app.classList.add('slide-out');
    setTimeout(() => {
        renderFunction()
        app.classList.remove('slide-out');
        app.classList.add('slide-in');
    }, 200)
}

function renderView(view) {
    app.innerHTML =`
    ${Navbar()}
    <section>
    ${view}
    </section>
    `
}

function routing() {
    let route = location.hash
    switch (route) {
        case '':
            // renderWithAnimation(renderHome)
            renderView(renderHome())
            break;
        case '#/home':
            // renderWithAnimation(renderHome)
            renderView(renderHome())
            break;

        case '#/services':
            // renderWithAnimation(renderServices)
            renderView(renderServices())
            break;

        case '#/contact':
            // renderWithAnimation(renderContact)
            renderView(renderContact())
            break;
        case '#/counter':
            // renderWithAnimation(renderCounter)
            renderView(renderCounter())
            break
        default:
            // renderWithAnimation(renderNotFound)
            renderView(renderNotFound())
    }
}

window.addEventListener('hashchange', routing)
window.addEventListener('load', routing)

