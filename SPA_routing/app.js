const app = document.getElementById('app');


function renderHome() {
    app.innerHTML = '<h1>🏠 Home<h1/><p>Bienvenido a nuestra SPA<p/>'
}

function renderServices() {
    app.innerHTML = '<h1>🛠️ Services<h1/><p>FrontEnd con JS<p/>'
}

function renderContact() {
    app.innerHTML = '<h1>📧 Contact<h1/><p>clan@Hamilton.dev<p/>'
}

function renderNotFound() {
    app.innerHTML = '<h1> Not found 404<h1/><p>Página no encontrada<p/>'
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

function routing() {
    let route = location.hash
    switch (route) {
        case '#/home':
            renderWithAnimation(renderHome)
            break;

        case '#/services':
            renderWithAnimation(renderServices)
            break;

        case '#/contact':
            renderWithAnimation(renderContact)
            break;

        default:
            renderWithAnimation(renderNotFound)
    }
}

window.addEventListener('hashchange', routing)
window.addEventListener('load', routing)
