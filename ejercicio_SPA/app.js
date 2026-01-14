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

document.getElementById('home').addEventListener('click', renderHome)
document.getElementById('services').addEventListener('click', renderServices)
document.getElementById('contact').addEventListener('click', renderContact)


renderHome()

window.location = "#/home"
console.log(location.hash);

