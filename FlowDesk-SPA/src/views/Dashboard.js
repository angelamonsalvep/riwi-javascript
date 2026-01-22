

export function Dashboard() {

    return `
    <h1>FlowDesk</h1>
    <section class="cards">
      <div class="card">📁 Proyectos: 3</div>
      <div class="card">👥 Usuarios: 5</div>
      <div class="card">✅ Tareas: 12</div>
      <a href="#/projects">Proyectos</a>
    </section>

    <button data-action="login">Simular Login</button>
    <button data-action="logout">Logout</button>
    `;
}